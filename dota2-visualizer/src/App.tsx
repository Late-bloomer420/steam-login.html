import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Matches } from './pages/Matches';
import { HeroStats } from './pages/HeroStats';
import { ItemTimings } from './pages/ItemTimings';
import { PlayerProfile } from './pages/PlayerProfile';
import { MatchDetail } from './pages/MatchDetail';

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-dota-bg text-white">
        <Router>
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/matches/:id" element={<MatchDetail />} />
              <Route path="/heroes" element={<HeroStats />} />
              <Route path="/items" element={<ItemTimings />} />
              <Route path="/player/:id" element={<PlayerProfile />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
