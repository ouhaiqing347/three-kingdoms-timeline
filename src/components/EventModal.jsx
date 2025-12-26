import React from 'react';
import { X, Map, User } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    // 1. Backdrop (Dark overlay)
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose} // Close when clicking outside
    >
      
      {/* 2. Modal Content */}
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* 3. Hero Image / Map Section */}
        <div className="h-64 bg-slate-200 w-full relative group">
            {/* Placeholder for actual image */}
            <img 
              src={`https://placehold.co/800x400/e2e8f0/475569?text=${encodeURIComponent(event.title)}`} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2">
               <Map size={16} /> 
               View Strategic Map
            </div>
        </div>

        {/* 4. Text Content */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
             <span className="text-3xl font-bold text-slate-800">{event.title}</span>
             <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-mono font-bold">
               {event.year} AD
             </span>
          </div>

          <div className="prose prose-slate max-w-none">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">Historical Context</h4>
            <p className="text-slate-600 leading-relaxed mb-6">
              {event.summary} 
              {/* Note: In a real app, you'd want a separate 'longDescription' field in your JSON for this section. For now, we reuse the summary. */}
            </p>
            
            <hr className="border-slate-200 my-6" />
            
            <h4 className="text-lg font-semibold text-slate-700 mb-4">Key Figures Involved</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {event.keyFigures.map((figure) => (
                <div key={figure} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                    <User size={16} />
                  </div>
                  <span className="font-medium text-slate-700">{figure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;