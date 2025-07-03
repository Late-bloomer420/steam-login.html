import React from 'react';
import { useParams } from 'react-router-dom';
import { User, Trophy, Target, TrendingUp, Clock, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { allMatches, heroes } from '../data/mockData';

export const PlayerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock player data based on ID
  const playerData = {
    id: id || '123456789',
    name: 'ProPlayer1',
    avatar: '',
    rank: 'Immortal',
    mmr: 7834,
    totalMatches: allMatches.length,
    winRate: 65.2,
    avgGPM: 485,
    avgXPM: 632,
    favoriteHero: 'Juggernaut'
  };

  // Recent matches for this player
  const recentMatches = allMatches.slice(0, 10);

  // Performance data over time
  const performanceData = [
    { date: '2024-01', gpm: 420, xpm: 550, mmr: 7600 },
    { date: '2024-02', gpm: 445, xpm: 580, mmr: 7650 },
    { date: '2024-03', gpm: 468, xpm: 610, mmr: 7700 },
    { date: '2024-04', gpm: 490, xpm: 645, mmr: 7750 },
    { date: '2024-05', gpm: 512, xpm: 670, mmr: 7800 },
    { date: '2024-06', gpm: 535, xpm: 695, mmr: 7834 },
  ];

  // Hero performance
  const heroPerformance = heroes.slice(0, 5).map(hero => ({
    name: hero.localized_name,
    matches: Math.floor(Math.random() * 20) + 5,
    winRate: Math.floor(Math.random() * 40) + 50,
    avgGPM: Math.floor(Math.random() * 200) + 400,
    avgXPM: Math.floor(Math.random() * 200) + 500
  }));

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Player Header */}
      <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 bg-dota-secondary rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-dota-accent" />
          </div>
          
          {/* Player Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{playerData.name}</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-gray-400">ID: {playerData.id}</span>
              <span className="text-dota-gold font-semibold">{playerData.rank}</span>
              <span className="text-dota-blue font-semibold">{playerData.mmr} MMR</span>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{playerData.totalMatches}</p>
              <p className="text-xs text-gray-400">Matches</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-dota-green">{playerData.winRate}%</p>
              <p className="text-xs text-gray-400">Win Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-dota-gold">{playerData.avgGPM}</p>
              <p className="text-xs text-gray-400">Avg GPM</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-dota-blue">{playerData.avgXPM}</p>
              <p className="text-xs text-gray-400">Avg XPM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Favorite Hero</p>
              <p className="text-xl font-bold text-white">{playerData.favoriteHero}</p>
            </div>
            <Trophy className="w-8 h-8 text-dota-gold" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Current MMR</p>
              <p className="text-xl font-bold text-dota-blue">{playerData.mmr}</p>
            </div>
            <Target className="w-8 h-8 text-dota-blue" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Best GPM</p>
              <p className="text-xl font-bold text-dota-gold">742</p>
            </div>
            <TrendingUp className="w-8 h-8 text-dota-gold" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Longest Match</p>
              <p className="text-xl font-bold text-white">72:34</p>
            </div>
            <Clock className="w-8 h-8 text-dota-accent" />
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Over Time */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2b37" />
              <XAxis dataKey="date" stroke="#9ca3af" />
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
              <Line type="monotone" dataKey="mmr" stroke="#ff6b35" strokeWidth={2} name="MMR" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Hero Performance */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Hero Win Rates</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={heroPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2b37" />
              <XAxis dataKey="name" stroke="#9ca3af" tick={{ fontSize: 12 }} />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1b23', 
                  border: '1px solid #2a2b37',
                  borderRadius: '8px'
                }}
                formatter={(value: any, name: string) => [
                  `${value}${name === 'winRate' ? '%' : ''}`,
                  name === 'winRate' ? 'Win Rate' : name === 'matches' ? 'Matches' : name.toUpperCase()
                ]}
              />
              <Bar dataKey="winRate" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Matches */}
      <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
        <h3 className="text-xl font-semibold text-white mb-6">Recent Matches</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dota-secondary">
                <th className="text-left py-3 px-4 text-gray-400">Match ID</th>
                <th className="text-left py-3 px-4 text-gray-400">Result</th>
                <th className="text-left py-3 px-4 text-gray-400">Hero</th>
                <th className="text-left py-3 px-4 text-gray-400">K/D/A</th>
                <th className="text-left py-3 px-4 text-gray-400">GPM/XPM</th>
                <th className="text-left py-3 px-4 text-gray-400">Duration</th>
                <th className="text-left py-3 px-4 text-gray-400">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentMatches.map((match) => {
                const player = match.players?.[0] || {
                  kills: Math.floor(Math.random() * 20),
                  deaths: Math.floor(Math.random() * 10),
                  assists: Math.floor(Math.random() * 25),
                  gold_per_min: Math.floor(Math.random() * 200) + 400,
                  xp_per_min: Math.floor(Math.random() * 200) + 500,
                  hero_id: 8
                };
                const hero = heroes.find(h => h.id === player.hero_id);
                
                return (
                  <tr key={match.match_id} className="border-b border-dota-secondary hover:bg-dota-secondary transition-colors">
                    <td className="py-3 px-4">
                      <span className="text-dota-accent">{match.match_id}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        match.radiant_win ? 'bg-dota-green text-white' : 'bg-dota-red text-white'
                      }`}>
                        {match.radiant_win ? 'Victory' : 'Defeat'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {hero?.localized_name || 'Unknown'}
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {player.kills}/{player.deaths}/{player.assists}
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {player.gold_per_min}/{player.xp_per_min}
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {formatDuration(match.duration)}
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {new Date(match.start_time * 1000).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hero Statistics */}
      <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
        <h3 className="text-xl font-semibold text-white mb-6">Hero Performance</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {heroPerformance.map((hero, index) => (
            <div key={index} className="bg-dota-secondary p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-dota-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-dota-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{hero.name}</h4>
                  <p className="text-sm text-gray-400">{hero.matches} matches</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Win Rate:</span>
                  <span className="text-dota-green font-semibold">{hero.winRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg GPM:</span>
                  <span className="text-dota-gold font-semibold">{hero.avgGPM}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg XPM:</span>
                  <span className="text-dota-blue font-semibold">{hero.avgXPM}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};