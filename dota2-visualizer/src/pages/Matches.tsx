import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Trophy, Clock } from 'lucide-react';
import { allMatches, heroes } from '../data/mockData';
import { FilterOptions, Match } from '../types';

export const Matches: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    result: 'all',
    hero: '',
    gameMode: '',
  });
  const [sortBy, setSortBy] = useState<'date' | 'duration' | 'result'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredAndSortedMatches = useMemo(() => {
    let filtered = allMatches.filter(match => {
      // Search filter
      if (searchTerm && !match.match_id.toString().includes(searchTerm)) {
        return false;
      }
      
      // Result filter
      if (filters.result !== 'all') {
        if (filters.result === 'win' && !match.radiant_win) return false;
        if (filters.result === 'loss' && match.radiant_win) return false;
      }
      
      return true;
    });

    // Sort matches
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'date':
          aValue = a.start_time;
          bValue = b.start_time;
          break;
        case 'duration':
          aValue = a.duration;
          bValue = b.duration;
          break;
        case 'result':
          aValue = a.radiant_win ? 1 : 0;
          bValue = b.radiant_win ? 1 : 0;
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
  }, [searchTerm, filters, sortBy, sortOrder]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Match History</h1>
          <p className="text-gray-400">Browse and analyze your Dota 2 matches</p>
        </div>
        <div className="text-gray-400">
          {filteredAndSortedMatches.length} matches found
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
              placeholder="Search match ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dota-secondary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-dota-accent"
            />
          </div>

          {/* Result Filter */}
          <select
            value={filters.result}
            onChange={(e) => setFilters({ ...filters, result: e.target.value as any })}
            className="px-4 py-2 bg-dota-secondary border border-gray-600 rounded-lg text-white focus:outline-none focus:border-dota-accent"
          >
            <option value="all">All Results</option>
            <option value="win">Wins Only</option>
            <option value="loss">Losses Only</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 bg-dota-secondary border border-gray-600 rounded-lg text-white focus:outline-none focus:border-dota-accent"
          >
            <option value="date">Sort by Date</option>
            <option value="duration">Sort by Duration</option>
            <option value="result">Sort by Result</option>
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

      {/* Match List */}
      <div className="space-y-4">
        {filteredAndSortedMatches.map((match) => (
          <div key={match.match_id} className="bg-dota-primary p-6 rounded-lg border border-dota-secondary hover:border-dota-accent transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Match Info */}
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${match.radiant_win ? 'bg-dota-green' : 'bg-dota-red'}`}></div>
                <div>
                  <Link 
                    to={`/matches/${match.match_id}`}
                    className="text-lg font-semibold text-dota-accent hover:text-white transition-colors"
                  >
                    Match {match.match_id}
                  </Link>
                  <p className="text-sm text-gray-400">
                    {new Date(match.start_time * 1000).toLocaleDateString()} • {formatDuration(match.duration)}
                  </p>
                </div>
              </div>

              {/* Match Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-400">Result</p>
                  <p className={`font-semibold ${match.radiant_win ? 'text-dota-green' : 'text-dota-red'}`}>
                    {match.radiant_win ? 'Victory' : 'Defeat'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Score</p>
                  <p className="font-semibold text-white">{match.radiant_score} - {match.dire_score}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="font-semibold text-white">{formatDuration(match.duration)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Mode</p>
                  <p className="font-semibold text-white">Ranked</p>
                </div>
              </div>

              {/* Action */}
              <Link 
                to={`/matches/${match.match_id}`}
                className="lg:ml-4 px-4 py-2 bg-dota-accent text-white rounded-lg hover:bg-opacity-80 transition-colors text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedMatches.length === 0 && (
        <div className="text-center py-12">
          <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No matches found</h3>
          <p className="text-gray-500">Try adjusting your filters or search criteria</p>
        </div>
      )}
    </div>
  );
};