function WatchFrame({ children }) {
  return (
    <div className="w-85 h-[400px] bg-slate-900 rounded-[3rem] border-8 border-slate-700 shadow-2xl p-6 overflow-hidden">
      <div className="flex flex-col items-center gap-3">
        {children}
      </div>
    </div>
  );
}

export default WatchFrame;
