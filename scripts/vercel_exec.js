const { spawn } = require("child_process");

const args = process.argv.slice(2);
console.log("Running vercel with args:", args);

const p = spawn("npx.cmd", ["vercel", ...args], {
  env: { ...process.env, NODE_OPTIONS: "--use-system-ca" },
  shell: true,
  stdio: "inherit"
});

p.on("close", (code) => {
  console.log("Vercel process exited with code:", code);
  process.exit(code);
});
