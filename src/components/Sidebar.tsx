import React from 'react';
import { Home, Server, Terminal, Users, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Server, label: 'Servers' },
    { icon: Terminal, label: 'Console' },
    { icon: Users, label: 'Users' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-[#1A1D21] text-gray-400 p-4 flex flex-col">
      <div className="mb-8 px-4">
        <h1 className="text-2xl font-bold text-white flex items-center">
          <Terminal className="w-8 h-8 mr-2 text-blue-500" />
          Pterodactyl
        </h1>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              item.active
                ? 'bg-blue-500 bg-opacity-10 text-blue-500'
                : 'hover:bg-[#2A2D31] hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <button className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-[#2A2D31] hover:text-red-500 rounded-lg transition-colors">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;