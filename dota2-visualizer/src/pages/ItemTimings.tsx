import React, { useState, useMemo } from 'react';
import { Search, Clock, Package, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { itemTimings, items, heroes } from '../data/mockData';

export const ItemTimings: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState('blink');
  const [selectedHero, setSelectedHero] = useState('all');

  const filteredTimings = useMemo(() => {
    return itemTimings.filter(timing => {
      if (selectedItem !== 'all' && timing.item !== selectedItem) return false;
      if (selectedHero !== 'all' && timing.hero_id !== parseInt(selectedHero)) return false;
      return true;
    });
  }, [selectedItem, selectedHero]);

  // Calculate average timing for selected item
  const averageTiming = useMemo(() => {
    if (filteredTimings.length === 0) return 0;
    return Math.round(filteredTimings.reduce((sum, timing) => sum + timing.time, 0) / filteredTimings.length);
  }, [filteredTimings]);

  // Item timing distribution
  const timingDistribution = useMemo(() => {
    const intervals = [
      { range: '0-10 min', min: 0, max: 600, count: 0 },
      { range: '10-20 min', min: 600, max: 1200, count: 0 },
      { range: '20-30 min', min: 1200, max: 1800, count: 0 },
      { range: '30-40 min', min: 1800, max: 2400, count: 0 },
      { range: '40+ min', min: 2400, max: Infinity, count: 0 },
    ];

    filteredTimings.forEach(timing => {
      const interval = intervals.find(int => timing.time >= int.min && timing.time < int.max);
      if (interval) interval.count++;
    });

    return intervals;
  }, [filteredTimings]);

  // Item comparison data
  const itemComparisonData = useMemo(() => {
    const itemGroups = ['blink', 'black_king_bar', 'aghanims_scepter'].map(item => {
      const itemTimingsForItem = itemTimings.filter(t => t.item === item);
      const avgTime = itemTimingsForItem.length > 0 
        ? itemTimingsForItem.reduce((sum, t) => sum + t.time, 0) / itemTimingsForItem.length 
        : 0;
      
      return {
        name: item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        averageTime: Math.round(avgTime / 60), // Convert to minutes
        count: itemTimingsForItem.length
      };
    });

    return itemGroups;
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Item Timings</h1>
        <p className="text-gray-400">Analyze item purchase patterns and optimize your farming</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Item Records</p>
              <p className="text-2xl font-bold text-white">{itemTimings.length}</p>
            </div>
            <Package className="w-8 h-8 text-dota-accent" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Average {selectedItem.replace(/_/g, ' ')} Timing</p>
              <p className="text-2xl font-bold text-dota-gold">{formatTime(averageTiming)}</p>
            </div>
            <Clock className="w-8 h-8 text-dota-gold" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Filtered Records</p>
              <p className="text-2xl font-bold text-dota-blue">{filteredTimings.length}</p>
            </div>
            <TrendingDown className="w-8 h-8 text-dota-blue" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Item Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Item</label>
            <select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="w-full px-4 py-2 bg-dota-secondary border border-gray-600 rounded-lg text-white focus:outline-none focus:border-dota-accent"
            >
              <option value="all">All Items</option>
              <option value="blink">Blink Dagger</option>
              <option value="black_king_bar">Black King Bar</option>
              <option value="aghanims_scepter">Aghanim's Scepter</option>
              <option value="power_treads">Power Treads</option>
              <option value="bottle">Bottle</option>
            </select>
          </div>

          {/* Hero Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Hero</label>
            <select
              value={selectedHero}
              onChange={(e) => setSelectedHero(e.target.value)}
              className="w-full px-4 py-2 bg-dota-secondary border border-gray-600 rounded-lg text-white focus:outline-none focus:border-dota-accent"
            >
              <option value="all">All Heroes</option>
              {heroes.map(hero => (
                <option key={hero.id} value={hero.id.toString()}>
                  {hero.localized_name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Item Timing Distribution */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Timing Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timingDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2b37" />
              <XAxis dataKey="range" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1b23', 
                  border: '1px solid #2a2b37',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="count" fill="#ff6b35" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Item Comparison */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Average Item Timings (Minutes)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={itemComparisonData}>
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
                  `${value} ${name === 'averageTime' ? 'min' : ''}`,
                  name === 'averageTime' ? 'Average Time' : 'Count'
                ]}
              />
              <Bar dataKey="averageTime" fill="#d4af37" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Item Timing Records */}
      <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
        <h3 className="text-xl font-semibold text-white mb-6">Recent Item Timings</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dota-secondary">
                <th className="text-left py-3 px-4 text-gray-400">Item</th>
                <th className="text-left py-3 px-4 text-gray-400">Hero</th>
                <th className="text-left py-3 px-4 text-gray-400">Player</th>
                <th className="text-left py-3 px-4 text-gray-400">Timing</th>
                <th className="text-left py-3 px-4 text-gray-400">Match</th>
              </tr>
            </thead>
            <tbody>
              {filteredTimings.slice(0, 20).map((timing, index) => {
                const hero = heroes.find(h => h.id === timing.hero_id);
                return (
                  <tr key={index} className="border-b border-dota-secondary hover:bg-dota-secondary transition-colors">
                    <td className="py-3 px-4">
                      <span className="text-dota-accent font-medium capitalize">
                        {timing.item.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {hero?.localized_name || 'Unknown'}
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {timing.player_name}
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-dota-gold font-semibold">
                        {formatTime(timing.time)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-dota-blue">
                        {timing.match_id}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredTimings.length === 0 && (
          <div className="text-center py-12">
            <Clock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No timing records found</h3>
            <p className="text-gray-500">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};