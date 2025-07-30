#!/bin/bash

# Dota 2 Dashboard Startup Script
# Run this script to start your dashboard

echo "🎮 Starting Dota 2 Performance Analytics Dashboard..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Change to the project directory
cd /workspace/dota2-visualizer

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Get the local IP address for mobile access
LOCAL_IP=$(hostname -I | awk '{print $1}')

echo "🚀 Starting development server..."
echo "📱 Mobile access: http://$LOCAL_IP:3001"
echo "💻 Desktop access: http://localhost:3001"
echo ""
echo "✅ Dashboard will open automatically"
echo "🛑 Press Ctrl+C to stop the server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Start the server with mobile access enabled
HOST=0.0.0.0 PORT=3001 BROWSER=none npm start