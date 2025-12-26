import { useState } from 'react';
import TimelineCard from './components/TimelineCard';
import EventModal from './components/EventModal';
import { events } from './data/events';

function App() {
  const [filter, setFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = filter === 'all'
    ? events
    : events.filter(e => e.factionKey === filter);

  const factions = [
    { key: 'all', name: '全部', color: 'bg-slate-500' },
    { key: 'wei', name: '魏', color: 'bg-blue-500' },
    { key: 'shu', name: '蜀', color: 'bg-green-500' },
    { key: 'wu', name: '吴', color: 'bg-red-500' },
    { key: 'han', name: '汉', color: 'bg-slate-600' },
    { key: 'jin', name: '晋', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-2">
          三国历史时间线
        </h1>
        <p className="text-center text-slate-500 mb-6">184 AD - 280 AD</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {factions.map((faction) => (
            <button
              key={faction.key}
              onClick={() => setFilter(faction.key)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === faction.key
                  ? `${faction.color} text-white shadow-lg scale-105`
                  : 'bg-white text-slate-600 hover:bg-slate-50 shadow'
              }`}
            >
              {faction.name}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-300 transform -translate-x-1/2"></div>

        {filteredEvents.map((event, index) => (
          <TimelineCard
            key={event.id}
            event={event}
            index={index}
            onClick={setSelectedEvent}
          />
        ))}
      </div>

      {/* Render Modal if an event is selected */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default App;
