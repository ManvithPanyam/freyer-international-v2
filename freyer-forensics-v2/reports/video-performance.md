# Video Performance Audit

- moov atom position: BEFORE mdat (faststart confirmed ✓)
- File size: 15.4 MB
- Duration: 24.4 seconds  
- Bitrate: 5,304 kbps
- Root cause of slow playback: file size / bitrate, not atom position
- Recommendation: re-encode at CRF 26 (~2-3 Mbps), target ~5-8 MB
