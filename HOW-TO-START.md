# 🎮 How to Start Your Dota 2 Dashboard

## Quick Start Options:

### Option 1: Use the Startup Script (Recommended)
```bash
# On Linux/Mac
./start-dota-dashboard.sh

# On Windows
start-dota-dashboard.bat
```

### Option 2: Manual Start
```bash
cd dota2-visualizer
npm start
```

### Option 3: Mobile-Friendly Start
```bash
cd dota2-visualizer
HOST=0.0.0.0 PORT=3001 npm start
```

## Access URLs:

- **Desktop**: http://localhost:3001
- **Mobile**: http://YOUR_LOCAL_IP:3001

## Mobile Setup:

1. Start the app using Option 1 or 3 above
2. Find your computer's local IP address
3. On your iPhone, open Safari
4. Go to: `http://YOUR_IP:3001`
5. Add to home screen for app-like experience

## Finding Your Local IP:

### Windows:
```cmd
ipconfig
```
Look for "IPv4 Address" under your active network adapter

### Mac:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### Linux:
```bash
hostname -I
```

## Stopping the Server:
Press `Ctrl+C` in the terminal where the server is running.

## Features:
- 📊 Performance Dashboard
- 📈 Match Analysis
- 🦸 Hero Statistics  
- ⏱️ Item Timing Analysis
- 👤 Player Profiles
- 📱 Mobile Responsive Design