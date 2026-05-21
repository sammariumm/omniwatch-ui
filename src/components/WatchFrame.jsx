import { useWatch } from './WatchContext';

function WatchFrame({ children }) {
  const { theme } = useWatch();

  const shell = theme === 'dark'
    ? 'bg-slate-900 border-4 border-slate-700'
    : 'bg-gray-100 border-4 border-gray-300'

  return (
    <div className={`w-85 h-[460px] ${shell} rounded-[3rem] shadow-2xl p-6 overflow-hidden`}>
      <div className="flex flex-col items-center gap-3 h-full">
        {children}
      </div>
    </div>
  );
}

export default WatchFrame;