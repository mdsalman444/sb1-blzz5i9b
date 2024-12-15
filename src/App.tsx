import React from 'react';
import { Cpu, Server, Terminal, Users, Activity, Settings } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ServerCard from './components/ServerCard';
import StatsCard from './components/StatsCard';

function App() {
  return (
    <div className="flex min-h-screen bg-[#0B0E11]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Manage your game servers with ease</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="CPU Usage"
              value="45%"
              icon={<Cpu className="w-6 h-6" />}
              trend="+2.5%"
            />
            <StatsCard
              title="Memory"
              value="6.2 GB"
              icon={<Activity className="w-6 h-6" />}
              trend="-0.8%"
            />
            <StatsCard
              title="Active Users"
              value="1,284"
              icon={<Users className="w-6 h-6" />}
              trend="+12.3%"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Servers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServerCard
                name="Minecraft SMP"
                status="online"
                type="minecraft"
                memory="4GB / 8GB"
                cpu="45%"
              />
              <ServerCard
                name="Valheim World"
                status="offline"
                type="valheim"
                memory="0GB / 4GB"
                cpu="0%"
              />
              <ServerCard
                name="ARK Server"
                status="starting"
                type="ark"
                memory="2GB / 16GB"
                cpu="12%"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;