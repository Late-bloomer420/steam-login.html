import React, { useState, useMemo } from 'react';
import { Search, Users, Target, TrendingUp, Crown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { heroStats, heroes } from '../data/mockData';

const COLORS = ['#ff6b35', '#d4af37', '#4ade80', '#3b82f6', '#8b5cf6', '#f59e0b'];

export const HeroStats: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'winRate' | 'pickRate' | 'name'>('pickRate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const enhancedHeroStats = useMemo(() => {
    return heroStats.map(hero => {
      const heroInfo = heroes.find(h => h.id === hero.hero_id);
      return {
        ...hero,
        winRate: ((hero.ranked_win / hero.ranked_pick) * 100).toFixed(1),
        pickRate: ((hero.ranked_pick / 1000000) * 100).toFixed(2), // Normalized pick rate
        roles: heroInfo?.roles || [],
        primary_attr: heroInfo?.primary_attr || 'str'
      };
    });
  }, []);

  const filteredAndSortedHeroes = useMemo(() => {
    let filtered = enhancedHeroStats.filter(hero => {
      // Search filter
      if (searchTerm && !hero.localized_name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Role filter
      if (roleFilter !== 'all' && !hero.roles.some(role => 
        role.toLowerCase().includes(roleFilter.toLowerCase())
      )) {
        return false;
      }
      
      return true;
    });

    // Sort heroes
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'winRate':
          aValue = parseFloat(a.winRate);
          bValue = parseFloat(b.winRate);
          break;
        case 'pickRate':
          aValue = parseFloat(a.pickRate);
          bValue = parseFloat(b.pickRate);
          break;
        case 'name':
          aValue = a.localized_name;
          bValue = b.localized_name;
          break;
        default:
          return 0;
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [enhancedHeroStats, searchTerm, roleFilter, sortBy, sortOrder]);

  // Top performing heroes for charts
  const topHeroesByWinRate = enhancedHeroStats
    .sort((a, b) => parseFloat(b.winRate) - parseFloat(a.winRate))
    .slice(0, 10)
    .map(hero => ({
      name: hero.localized_name,
      winRate: parseFloat(hero.winRate),
      pickRate: parseFloat(hero.pickRate)
    }));

  // Role distribution
  const roleDistribution = heroes.reduce((acc, hero) => {
    hero.roles.forEach(role => {
      acc[role] = (acc[role] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const roleData = Object.entries(roleDistribution).map(([role, count], index) => ({
    name: role,
    value: count,
    color: COLORS[index % COLORS.length]
  }));

  // Attribute distribution
  const attrDistribution = heroes.reduce((acc, hero) => {
    acc[hero.primary_attr] = (acc[hero.primary_attr] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const attrData = Object.entries(attrDistribution).map(([attr, count]) => ({
    name: attr.toUpperCase(),
    value: count,
    Strength: attr === 'str' ? count : 0,
    Agility: attr === 'agi' ? count : 0,
    Intelligence: attr === 'int' ? count : 0,
    Universal: attr === 'all' ? count : 0,
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Hero Statistics</h1>
        <p className="text-gray-400">Analyze hero performance, win rates, and pick rates</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Heroes</p>
              <p className="text-2xl font-bold text-white">{heroes.length}</p>
            </div>
            <Users className="w-8 h-8 text-dota-accent" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Avg Win Rate</p>
              <p className="text-2xl font-bold text-dota-green">
                {(enhancedHeroStats.reduce((sum, hero) => sum + parseFloat(hero.winRate), 0) / enhancedHeroStats.length).toFixed(1)}%
              </p>
            </div>
            <Target className="w-8 h-8 text-dota-green" />
          </div>
        </div>

        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Most Picked</p>
              <p className="text-2xl font-bold text-dota-gold">
                {enhancedHeroStats.sort((a, b) => parseFloat(b.pickRate) - parseFloat(a.pickRate))[0]?.localized_name}
              </p>
            </div>
            <Crown className="w-8 h-8 text-dota-gold" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Heroes by Win Rate */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Top Heroes by Win Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topHeroesByWinRate}>
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
                  `${value}${name.includes('Rate') ? '%' : ''}`,
                  name === 'winRate' ? 'Win Rate' : 'Pick Rate'
                ]}
              />
              <Bar dataKey="winRate" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Role Distribution */}
        <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
          <h3 className="text-xl font-semibold text-white mb-4">Role Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={roleData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {roleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1b23', 
                  border: '1px solid #2a2b37',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-dota-primary p-6 rounded-lg border border-dota-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search heroes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dota-secondary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-dota-accent"
            />
          </div>

          {/* Role Filter */}
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 bg-dota-secondary border border-gray-600 rounded-lg text-white focus:outline-none focus:border-dota-accent"
          >
            <option value="all">All Roles</option>
            <option value="carry">Carry</option>
            <option value="support">Support</option>
            <option value="nuker">Nuker</option>
            <option value="initiator">Initiator</option>
            <option value="disabler">Disabler</option>
            <option value="escape">Escape</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 bg-dota-secondary border border-gray-600 rounded-lg text-white focus:outline-none focus:border-dota-accent"
          >
            <option value="pickRate">Sort by Pick Rate</option>
            <option value="winRate">Sort by Win Rate</option>
            <option value="name">Sort by Name</option>
          </select>

          {/* Sort Order */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as any)}
            className="px-4 py-2 bg-dota-secondary border border-gray-600 rounded-lg text-white focus:outline-none focus:border-dota-accent"
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>

      {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedHeroes.map((hero) => (
          <div key={hero.hero_id} className="bg-dota-primary p-6 rounded-lg border border-dota-secondary hover:border-dota-accent transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-dota-secondary rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-dota-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{hero.localized_name}</h3>
                <p className="text-sm text-gray-400 capitalize">{hero.primary_attr} Hero</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Win Rate:</span>
                <span className="text-dota-green font-semibold">{hero.winRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pick Rate:</span>
                <span className="text-dota-gold font-semibold">{hero.pickRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Picks:</span>
                <span className="text-white font-semibold">{hero.ranked_pick.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Roles:</p>
              <div className="flex flex-wrap gap-2">
                {hero.roles.map((role, index) => (
                  <span key={index} className="px-2 py-1 bg-dota-secondary text-xs text-gray-300 rounded">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedHeroes.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No heroes found</h3>
          <p className="text-gray-500">Try adjusting your filters or search criteria</p>
        </div>
      )}
    </div>
  );
};