import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Clock, TrendingUp, Target, Shield } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { allMatches, heroStats } from '../data/mockData';

const recentMatches = allMatches.slice(0, 5);
const winRate = (allMatches.filter(match => match.radiant_win).length / allMatches.length * 100).toFixed(1);

const performanceData = [
  { name: 'Jan', gpm: 420, xpm: 550 },
  { name: 'Feb', gpm: 445, xpm: 580 },
  { name: 'Mar', gpm: 468, xpm: 610 },
  { name: 'Apr', gpm: 490, xpm: 645 },
  { name: 'May', gpm: 512, xpm: 670 },
  { name: 'Jun', gpm: 535, xpm: 695 },
];

const heroPickData = heroStats.slice(0, 5).map(hero => ({
  name: hero.localized_name,
  picks: hero.ranked_pick,
  winRate: ((hero.ranked_win / hero.ranked_pick) * 100).toFixed(1)
}));

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Dota 2 Performance Analytics</h1>
        <p className="text-gray-400">Track your gameplay performance and analyze match data</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Matches</p>
              <p className="text-2xl font-bold text-white">{allMatches.length}</p>
            </div>
            <Trophy className="w-8 h-8 text-dota-gold" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Win Rate</p>
              <p className="text-2xl font-bold text-dota-green">{winRate}%</p>
            </div>
            <Target className="w-8 h-8 text-dota-green" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Avg GPM</p>
              <p className="text-2xl font-bold text-dota-gold">485</p>
            </div>
            <TrendingUp className="w-8 h-8 text-dota-gold" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Heroes Played</p>
              <p className="text-2xl font-bold text-dota-blue">{heroStats.length}</p>
            </div>
            <Users className="w-8 h-8 text-dota-blue" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Over Time */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Performance Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2b37" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1b23', 
                  border: '1px solid #2a2b37',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="gpm" stroke="#d4af37" strokeWidth={2} name="GPM" />
              <Line type="monotone" dataKey="xpm" stroke="#3b82f6" strokeWidth={2} name="XPM" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Heroes */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Top Heroes by Pick Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={heroPickData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2b37" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1b23', 
                  border: '1px solid #2a2b37',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="picks" fill="#ff6b35" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Matches */}
      <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Recent Matches</h3>
          <Link 
            to="/matches" 
            className="text-dota-accent hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dota-secondary">
                <th className="text-left py-3 px-4 text-gray-400">Match ID</th>
                <th className="text-left py-3 px-4 text-gray-400">Result</th>
                <th className="text-left py-3 px-4 text-gray-400">Duration</th>
                <th className="text-left py-3 px-4 text-gray-400">Score</th>
                <th className="text-left py-3 px-4 text-gray-400">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentMatches.map((match) => (
                <tr key={match.match_id} className="border-b border-dota-secondary hover:bg-dota-secondary transition-colors">
                  <td className="py-3 px-4">
                    <Link 
                      to={`/matches/${match.match_id}`}
                      className="text-dota-accent hover:text-white transition-colors"
                    >
                      {match.match_id}
                    </Link>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      match.radiant_win ? 'bg-dota-green text-white' : 'bg-dota-red text-white'
                    }`}>
                      {match.radiant_win ? 'Victory' : 'Defeat'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    {Math.floor(match.duration / 60)}:{(match.duration % 60).toString().padStart(2, '0')}
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    {match.radiant_score} - {match.dire_score}
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    {new Date(match.start_time * 1000).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          to="/matches" 
          className="bg-dota-primary p-6 rounded-lg border border-dota-secondary hover:border-dota-accent transition-colors group"
        >
          <Trophy className="w-8 h-8 text-dota-accent mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-white mb-2">Browse Matches</h3>
          <p className="text-gray-400">View and filter all your match history</p>
        </Link>

        <Link 
          to="/heroes" 
          className="bg-dota-primary p-6 rounded-lg border border-dota-secondary hover:border-dota-accent transition-colors group"
        >
          <Users className="w-8 h-8 text-dota-accent mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-white mb-2">Hero Statistics</h3>
          <p className="text-gray-400">Analyze hero performance and win rates</p>
        </Link>

        <Link 
          to="/items" 
          className="bg-dota-primary p-6 rounded-lg border border-dota-secondary hover:border-dota-accent transition-colors group"
        >
          <Clock className="w-8 h-8 text-dota-accent mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-white mb-2">Item Timings</h3>
          <p className="text-gray-400">Track item purchase timings across matches</p>
        </Link>
      </div>
    </div>
  );
};