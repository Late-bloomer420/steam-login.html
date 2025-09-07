@echo off
echo 🎮 Starting Dota 2 Performance Analytics Dashboard...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

cd /d "%~dp0dota2-visualizer"

if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

echo 🚀 Starting development server...
echo 💻 Desktop access: http://localhost:3001
echo 📱 For mobile: Find your computer's IP and use http://YOUR_IP:3001
echo.
echo ✅ Dashboard will open automatically
echo 🛑 Press Ctrl+C to stop the server
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

set HOST=0.0.0.0
set PORT=3001
set BROWSER=none
npm start

pause