import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Trophy, Target, Users, Zap, Sword, Shield, Heart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { allMatches, heroes } from '../data/mockData';

export const MatchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the match or use the first one as fallback
  const match = allMatches.find(m => m.match_id.toString() === id) || allMatches[0];
  
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Generate mock player data for demonstration
  const radiantPlayers = Array.from({ length: 5 }, (_, i) => ({
    player_slot: i,
    account_id: 100000000 + i,
    player_name: `Radiant_${i + 1}`,
    hero_id: heroes[i]?.id || 1,
    kills: Math.floor(Math.random() * 15) + 2,
    deaths: Math.floor(Math.random() * 8) + 1,
    assists: Math.floor(Math.random() * 20) + 5,
    last_hits: Math.floor(Math.random() * 200) + 150,
    denies: Math.floor(Math.random() * 30) + 10,
    gold_per_min: Math.floor(Math.random() * 200) + 400,
    xp_per_min: Math.floor(Math.random() * 200) + 500,
    level: Math.floor(Math.random() * 5) + 20,
    hero_damage: Math.floor(Math.random() * 30000) + 20000,
    tower_damage: Math.floor(Math.random() * 5000) + 2000,
    hero_healing: Math.floor(Math.random() * 5000) + 1000,
    gold: Math.floor(Math.random() * 5000) + 2000,
    items: [46, 116, 102, 1, 36, 0],
  }));

  const direPlayers = Array.from({ length: 5 }, (_, i) => ({
    player_slot: i + 128,
    account_id: 200000000 + i,
    player_name: `Dire_${i + 1}`,
    hero_id: heroes[i + 3]?.id || 2,
    kills: Math.floor(Math.random() * 15) + 2,
    deaths: Math.floor(Math.random() * 8) + 1,
    assists: Math.floor(Math.random() * 20) + 5,
    last_hits: Math.floor(Math.random() * 200) + 150,
    denies: Math.floor(Math.random() * 30) + 10,
    gold_per_min: Math.floor(Math.random() * 200) + 400,
    xp_per_min: Math.floor(Math.random() * 200) + 500,
    level: Math.floor(Math.random() * 5) + 20,
    hero_damage: Math.floor(Math.random() * 30000) + 20000,
    tower_damage: Math.floor(Math.random() * 5000) + 2000,
    hero_healing: Math.floor(Math.random() * 5000) + 1000,
    gold: Math.floor(Math.random() * 5000) + 2000,
    items: [46, 116, 102, 1, 36, 0],
  }));

  // Gold advantage over time (mock data)
  const goldAdvantageData = Array.from({ length: Math.floor(match.duration / 60) }, (_, i) => ({
    time: i,
    radiant: Math.floor(Math.random() * 10000) + (i * 1000),
    dire: Math.floor(Math.random() * 10000) + (i * 900),
  }));

  // XP advantage over time (mock data)
  const xpAdvantageData = Array.from({ length: Math.floor(match.duration / 60) }, (_, i) => ({
    time: i,
    radiant: Math.floor(Math.random() * 8000) + (i * 800),
    dire: Math.floor(Math.random() * 8000) + (i * 750),
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <Link 
          to="/matches" 
          className="p-2 bg-dota-secondary rounded-lg text-gray-400 hover:text-white hover:bg-dota-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">Match {match.match_id}</h1>
          <p className="text-gray-400">
            {new Date(match.start_time * 1000).toLocaleDateString()} • {formatDuration(match.duration)}
          </p>
        </div>
      </div>

      {/* Match Overview */}
      <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Teams */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center space-x-3 ${match.radiant_win ? 'text-dota-green' : 'text-gray-400'}`}>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-xl font-semibold">Radiant</span>
                {match.radiant_win && <Trophy className="w-5 h-5" />}
              </div>
              <div className="text-2xl font-bold text-white">
                {match.radiant_score} - {match.dire_score}
              </div>
              <div className={`flex items-center space-x-3 ${!match.radiant_win ? 'text-dota-red' : 'text-gray-400'}`}>
                {!match.radiant_win && <Trophy className="w-5 h-5" />}
                <span className="text-xl font-semibold">Dire</span>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Match Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <Clock className="w-8 h-8 text-dota-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{formatDuration(match.duration)}</p>
              <p className="text-sm text-gray-400">Duration</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-dota-gold mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{formatTime(match.first_blood_time)}</p>
              <p className="text-sm text-gray-400">First Blood</p>
            </div>
          </div>
        </div>
      </div>

      {/* Players Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radiant Team */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <h3 className="text-xl font-semibold text-white">Radiant Team</h3>
          </div>
          
          <div className="space-y-3">
            {radiantPlayers.map((player, index) => {
              const hero = heroes.find(h => h.id === player.hero_id);
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-dota-secondary rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-dota-primary rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-dota-accent" />
                    </div>
                    <div>
                      <Link 
                        to={`/player/${player.account_id}`}
                        className="text-white font-semibold hover:text-dota-accent transition-colors"
                      >
                        {player.player_name}
                      </Link>
                      <p className="text-sm text-gray-400">{hero?.localized_name}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-400">K/D/A</p>
                      <p className="text-white font-semibold">
                        {player.kills}/{player.deaths}/{player.assists}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">CS</p>
                      <p className="text-white font-semibold">{player.last_hits}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GPM</p>
                      <p className="text-white font-semibold">{player.gold_per_min}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dire Team */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <h3 className="text-xl font-semibold text-white">Dire Team</h3>
          </div>
          
          <div className="space-y-3">
            {direPlayers.map((player, index) => {
              const hero = heroes.find(h => h.id === player.hero_id);
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-dota-secondary rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-dota-primary rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-dota-accent" />
                    </div>
                    <div>
                      <Link 
                        to={`/player/${player.account_id}`}
                        className="text-white font-semibold hover:text-dota-accent transition-colors"
                      >
                        {player.player_name}
                      </Link>
                      <p className="text-sm text-gray-400">{hero?.localized_name}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-400">K/D/A</p>
                      <p className="text-white font-semibold">
                        {player.kills}/{player.deaths}/{player.assists}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">CS</p>
                      <p className="text-white font-semibold">{player.last_hits}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GPM</p>
                      <p className="text-white font-semibold">{player.gold_per_min}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Match Progress Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gold Advantage */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Gold Advantage Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={goldAdvantageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2b37" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1b23', 
                  border: '1px solid #2a2b37',
                  borderRadius: '8px'
                }}
                formatter={(value: any, name: string) => [
                  `${value.toLocaleString()} gold`,
                  name === 'radiant' ? 'Radiant' : 'Dire'
                ]}
                labelFormatter={(label) => `${label} minutes`}
              />
              <Legend />
              <Line type="monotone" dataKey="radiant" stroke="#4ade80" strokeWidth={2} name="Radiant" />
              <Line type="monotone" dataKey="dire" stroke="#ef4444" strokeWidth={2} name="Dire" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* XP Advantage */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Experience Advantage Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={xpAdvantageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2b37" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1b23', 
                  border: '1px solid #2a2b37',
                  borderRadius: '8px'
                }}
                formatter={(value: any, name: string) => [
                  `${value.toLocaleString()} XP`,
                  name === 'radiant' ? 'Radiant' : 'Dire'
                ]}
                labelFormatter={(label) => `${label} minutes`}
              />
              <Legend />
              <Line type="monotone" dataKey="radiant" stroke="#4ade80" strokeWidth={2} name="Radiant" />
              <Line type="monotone" dataKey="dire" stroke="#ef4444" strokeWidth={2} name="Dire" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
        <h3 className="text-xl font-semibold text-white mb-6">Detailed Player Statistics</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dota-secondary">
                <th className="text-left py-3 px-4 text-gray-400">Player</th>
                <th className="text-left py-3 px-4 text-gray-400">Hero</th>
                <th className="text-left py-3 px-4 text-gray-400">Level</th>
                <th className="text-left py-3 px-4 text-gray-400">K/D/A</th>
                <th className="text-left py-3 px-4 text-gray-400">LH/DN</th>
                <th className="text-left py-3 px-4 text-gray-400">GPM/XPM</th>
                <th className="text-left py-3 px-4 text-gray-400">HD</th>
                <th className="text-left py-3 px-4 text-gray-400">TD</th>
                <th className="text-left py-3 px-4 text-gray-400">HH</th>
              </tr>
            </thead>
            <tbody>
              {[...radiantPlayers, ...direPlayers].map((player, index) => {
                const hero = heroes.find(h => h.id === player.hero_id);
                const isRadiant = player.player_slot < 128;
                
                return (
                  <tr key={index} className="border-b border-dota-secondary hover:bg-dota-secondary transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${isRadiant ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <Link 
                          to={`/player/${player.account_id}`}
                          className="text-dota-accent hover:text-white transition-colors"
                        >
                          {player.player_name}
                        </Link>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{hero?.localized_name}</td>
                    <td className="py-3 px-4 text-white font-semibold">{player.level}</td>
                    <td className="py-3 px-4 text-gray-300">
                      {player.kills}/{player.deaths}/{player.assists}
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {player.last_hits}/{player.denies}
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {player.gold_per_min}/{player.xp_per_min}
                    </td>
                    <td className="py-3 px-4 text-gray-300">{player.hero_damage.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-300">{player.tower_damage.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-300">{player.hero_healing.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};