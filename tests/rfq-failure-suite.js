const { spawn } = require('child_process');
const puppeteer = require('puppeteer');

async function runRfqTestSuite() {
  console.log('=== STARTING RFQ FAILURE & EDGE-CASE TEST SUITE ===');
  
  const server = spawn('npx', ['next', 'start', '-p', '3012'], {
    cwd: '/home/p4cketsn1ff3r/Downloads/Projects_and_Development/Freyer International Logistics Pvt. Ltd',
    stdio: 'pipe'
  });

  return new Promise((resolve, reject) => {
    server.stdout.on('data', async d => {
      if (d.toString().includes('Ready')) {
        let browser;
        try {
          browser = await puppeteer.launch({ 
            executablePath: '/usr/bin/google-chrome', 
            args: ['--no-sandbox', '--disable-dev-shm-usage'] 
          });

          const page = await browser.newPage();
          await page.setViewport({ width: 1440, height: 900 });
          await page.goto('http://localhost:3012/', { waitUntil: 'networkidle0', timeout: 30000 });
          await page.evaluate(() => document.fonts.ready);
          await page.evaluate(() => document.getElementById('quote')?.scrollIntoView({ behavior: 'instant' }));
          await new Promise(r => setTimeout(r, 400));

          const clickContinue = async () => {
            await page.evaluate(() => {
              const btns = Array.from(document.querySelectorAll('button'));
              const btn = btns.find(b => b.textContent.includes('Continue') || b.textContent.includes('Request Quote'));
              if (btn) btn.click();
            });
            await new Promise(r => setTimeout(r, 300));
          };

          const clickPrev = async () => {
            await page.evaluate(() => {
              const btns = Array.from(document.querySelectorAll('button'));
              const btn = btns.find(b => b.textContent.includes('PREVIOUS'));
              if (btn) btn.click();
            });
            await new Promise(r => setTimeout(r, 300));
          };

          // TEST 1: Step 1 -> Step 2
          await clickContinue();
          let stepText = await page.evaluate(() => document.querySelector('#quote')?.textContent || '');
          if (!stepText.includes('Where is it going?')) throw new Error('Failed to advance to Step 2');
          console.log('✓ TEST 1 PASSED: Step 1 advances to Step 2');

          // TEST 2: Empty Origin/Destination Validation Error
          await clickContinue();
          let hasOriginError = await page.evaluate(() => document.body.textContent.includes('Origin location is required'));
          if (!hasOriginError) throw new Error('Failed: Empty origin did not trigger validation error');
          console.log('✓ TEST 2 PASSED: Missing origin triggers validation error');

          // TEST 3: Fill Origin & Destination, Advance to Step 3
          await page.type('#origin', 'Chennai Port (INMAA)');
          await page.type('#destination', 'Hamburg Port (DEHAM)');
          await clickContinue();
          stepText = await page.evaluate(() => document.querySelector('#quote')?.textContent || '');
          if (!stepText.includes('Tell us about the cargo.')) throw new Error('Failed to advance to Step 3');
          console.log('✓ TEST 3 PASSED: Valid origin/destination advances to Step 3');

          // TEST 4: Back navigation preserves typed state
          await clickPrev();
          const originVal = await page.$eval('#origin', el => el.value);
          const destVal = await page.$eval('#destination', el => el.value);
          if (originVal !== 'Chennai Port (INMAA)' || destVal !== 'Hamburg Port (DEHAM)') {
            throw new Error(`State loss on back navigation: origin=${originVal}, dest=${destVal}`);
          }
          console.log('✓ TEST 4 PASSED: Back navigation preserves form state');
          await clickContinue(); // Return to step 3

          // TEST 5: Negative / Zero Weight Validation
          await page.type('#weight', '-50');
          await clickContinue();
          let hasWeightError = await page.evaluate(() => document.body.textContent.includes('Total weight must be greater than zero'));
          if (!hasWeightError) throw new Error('Failed: Negative weight did not trigger error');
          console.log('✓ TEST 5 PASSED: Negative weight triggers validation error');

          // Set valid weight and advance to Step 4
          await page.evaluate(() => { const el = document.getElementById('weight'); if (el) el.value = ''; });
          await page.type('#weight', '4200');
          await clickContinue();
          stepText = await page.evaluate(() => document.querySelector('#quote')?.textContent || '');
          if (!stepText.includes('How should we reach you?')) throw new Error('Failed to advance to Step 4');
          console.log('✓ TEST 6 PASSED: Valid weight advances to Step 4');

          // TEST 7: Invalid Email Validation
          await page.type('#company', 'Apex Logistics Global');
          await page.type('#contactName', 'Ravi Shankar');
          await page.type('#email', 'invalid-email-no-domain');
          await page.type('#phone', '+91 98401 99999');
          await clickContinue();
          let hasEmailError = await page.evaluate(() => document.body.textContent.includes('Valid corporate email is required'));
          if (!hasEmailError) throw new Error('Failed: Malformed email did not trigger error');
          console.log('✓ TEST 7 PASSED: Malformed email triggers validation error');

          // TEST 8: Valid Submission & Server Action Execution
          await page.evaluate(() => { const el = document.getElementById('email'); if (el) el.value = ''; });
          await page.type('#email', 'ravi.shankar@apexlogistics.com');
          await clickContinue();

          // Wait for Server Action and success state
          await new Promise(r => setTimeout(r, 1200));
          const successText = await page.evaluate(() => document.querySelector('#quote')?.textContent || '');
          if (!successText.includes('Request received.')) throw new Error('Failed: Success state not reached');
          console.log('✓ TEST 8 PASSED: Server Action processed and success state rendered cleanly');

          console.log('=== ALL RFQ SUITE TESTS PASSED WITH ZERO FAILURES ===');
          await browser.close();
          server.kill();
          resolve(true);
        } catch(err) {
          if (browser) await browser.close();
          server.kill();
          reject(err);
        }
      }
    });

    server.stderr.on('data', d => {
      // console.error(d.toString());
    });

    setTimeout(() => {
      server.kill();
      reject(new Error('Test suite timeout after 45s'));
    }, 45000);
  });
}

runRfqTestSuite().catch(e => {
  console.error('TEST SUITE FAILED:', e);
  process.exit(1);
});
