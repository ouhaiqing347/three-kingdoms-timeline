const TimelineCard = ({ event, index, onClick }) => {
  // 根据阵营确定颜色
  const colorClasses = {
    wei: 'bg-blue-50 border-blue-500 hover:border-blue-600',
    shu: 'bg-green-50 border-green-500 hover:border-green-600',
    wu: 'bg-red-50 border-red-500 hover:border-red-600',
    han: 'bg-slate-50 border-slate-500 hover:border-slate-600',
    jin: 'bg-purple-50 border-purple-500 hover:border-purple-600',
  };

  const colorClass = colorClasses[event.factionKey] || colorClasses.han;

  // 判断左右布局
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* 时间点圆圈 */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10"></div>

      {/* 空白间隔 */}
      <div className="hidden md:block w-1/2"></div>

      {/* 卡片内容 */}
      <div
        onClick={() => onClick(event)}
        className={`w-[85%] md:w-5/12 ml-12 md:ml-0 p-4 border-l-4 rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-xl cursor-pointer ${colorClass}`}
      >
        <div className="text-sm font-mono font-bold text-slate-500 mb-1">{event.year} AD</div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
        <p className="text-slate-600 text-sm line-clamp-2">{event.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {event.keyFigures.slice(0, 3).map((figure) => (
            <span key={figure} className="text-xs px-2 py-1 bg-white/60 rounded-full text-slate-600">
              {figure}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
