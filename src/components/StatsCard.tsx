import React, { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend: string;
}

const StatsCard = ({ title, value, icon, trend }: StatsCardProps) => {
  const isPositive = trend.startsWith('+');

  return (
    <div className="bg-[#1A1D21] rounded-lg p-6 hover:bg-[#22262B] transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
        <div className="p-3 bg-blue-500 bg-opacity-10 rounded-lg">
          {React.cloneElement(icon as any, { className: 'w-6 h-6 text-blue-500' })}
        </div>
      </div>
      <div className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {trend} from last week
      </div>
    </div>
  );
};

export default StatsCard;