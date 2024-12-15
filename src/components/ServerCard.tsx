import React from 'react';
import { Server, Power, Terminal } from 'lucide-react';

interface ServerCardProps {
  name: string;
  status: 'online' | 'offline' | 'starting';
  type: string;
  memory: string;
  cpu: string;
}

const ServerCard = ({ name, status, type, memory, cpu }: ServerCardProps) => {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    starting: 'bg-yellow-500',
  };

  return (
    <div className="bg-[#1A1D21] rounded-lg p-6 hover:bg-[#22262B] transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
          <div className="flex items-center space-x-2">
            <span className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
            <span className="text-sm text-gray-400 capitalize">{status}</span>
          </div>
        </div>
        <Server className="w-6 h-6 text-blue-500" />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">Memory</p>
            <p className="text-white">{memory}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">CPU</p>
            <p className="text-white">{cpu}</p>
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
            <Power className="w-4 h-4" />
            <span>Start</span>
          </button>
          <button className="flex-1 bg-[#2A2D31] hover:bg-[#33363B] text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
            <Terminal className="w-4 h-4" />
            <span>Console</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerCard;