# Dota 2 Performance Analytics

A comprehensive interactive web application for visualizing and analyzing Dota 2 match performance data. Built with React, TypeScript, and modern data visualization libraries.

## 🎮 Features

### Dashboard
- **Performance Overview**: Key statistics and metrics at a glance
- **Performance Trends**: GPM/XPM progression over time
- **Hero Performance**: Win rates and pick rates visualization
- **Recent Matches**: Quick access to latest match results
- **Quick Actions**: Navigation shortcuts to main sections

### Match Analysis
- **Match History**: Filterable and sortable list of all matches
- **Advanced Filters**: Search by match ID, filter by result, sort by various metrics
- **Match Details**: Comprehensive match breakdown with player performance
- **Team Comparison**: Side-by-side Radiant vs Dire analysis
- **Performance Charts**: Gold and XP advantage over time

### Hero Statistics
- **Hero Performance Metrics**: Win rates, pick rates, and role analysis
- **Hero Filtering**: Search and filter by hero name and role
- **Performance Visualization**: Charts showing top heroes by win rate
- **Role Distribution**: Pie chart showing hero role breakdown
- **Detailed Hero Cards**: Individual hero statistics and performance data

### Item Timing Analysis
- **Item Purchase Tracking**: Monitor item acquisition timings
- **Timing Distribution**: Visualize when items are typically purchased
- **Item Comparison**: Compare average timings across different items
- **Hero-Specific Analysis**: Filter item timings by specific heroes
- **Performance Optimization**: Identify optimal item timing patterns

### Player Profiles
- **Individual Player Stats**: Comprehensive player performance metrics
- **Performance Trends**: Track GPM, XPM, and MMR progression over time
- **Hero Mastery**: Individual hero performance and preferences
- **Match History**: Detailed record of recent matches
- **Skill Analysis**: Identify strengths and areas for improvement

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Dota 2 theme
- **Charts**: Recharts for interactive data visualization
- **Routing**: React Router for navigation
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Create React App

## 🎨 Design Features

- **Dark Theme**: Custom Dota 2-inspired color palette
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Interactive Elements**: Hover effects and smooth transitions
- **Modern UI**: Clean, professional interface with excellent UX
- **Accessibility**: Proper contrast ratios and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd dota2-visualizer
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Data Structure

The application uses comprehensive mock data that mirrors real Dota 2 API structures:

- **Matches**: Complete match data including duration, scores, and player performance
- **Heroes**: Hero information with roles, attributes, and statistics
- **Players**: Player profiles with rankings, preferences, and history
- **Items**: Item data with costs, timings, and purchase patterns

## 🎯 Key Metrics Tracked

### Player Performance
- **GPM (Gold Per Minute)**: Economic efficiency indicator
- **XPM (Experience Per Minute)**: Experience gain rate
- **KDA (Kills/Deaths/Assists)**: Combat performance ratio
- **Last Hits/Denies**: Farming proficiency
- **Hero Damage**: Combat contribution
- **Tower Damage**: Objective contribution
- **Hero Healing**: Support contribution

### Match Analysis
- **Duration**: Match length and pacing
- **Score Progression**: Kill accumulation over time
- **Economic Advantage**: Gold and experience leads
- **First Blood Timing**: Early game aggression
- **Item Progression**: Purchase timing analysis

### Hero Statistics
- **Win Rate**: Success percentage across all matches
- **Pick Rate**: Selection frequency
- **Ban Rate**: Prohibition frequency in ranked matches
- **Role Performance**: Effectiveness in different positions

## 🔧 Customization

### Adding New Data
- Extend the mock data in `src/data/mockData.ts`
- Update TypeScript interfaces in `src/types/index.ts`
- Modify components to display new metrics

### Styling
- Customize colors in `tailwind.config.js`
- Modify component styles using Tailwind classes
- Add new themes by extending the color palette

### Charts
- Recharts components are easily customizable
- Add new chart types by importing additional components
- Modify chart styling through props and CSS

## 📱 Mobile Experience

The application is fully responsive with:
- **Adaptive Layouts**: Components reorganize for smaller screens
- **Touch-Friendly Interface**: Appropriately sized touch targets
- **Optimized Navigation**: Collapsible mobile menu
- **Readable Typography**: Properly scaled text for mobile devices

## 🎲 Future Enhancements

- **Real API Integration**: Connect to OpenDota or Steam API
- **Advanced Analytics**: Machine learning insights and predictions
- **Team Analysis**: Multi-player team performance tracking
- **Export Features**: PDF reports and data export capabilities
- **Real-time Updates**: Live match tracking and notifications
- **Social Features**: Player comparisons and leaderboards

## 📋 Available Scripts

- `npm start`: Start development server
- `npm build`: Create production build
- `npm test`: Run test suite
- `npm eject`: Eject from Create React App (irreversible)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Valve Corporation** for creating Dota 2
- **OpenDota** for API inspiration and data structure references
- **React Community** for excellent libraries and tools
- **Tailwind CSS** for the utility-first CSS framework
