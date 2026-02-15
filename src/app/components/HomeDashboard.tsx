import { motion } from "motion/react";
import { ArrowRight, Play, BookOpen, Target, TrendingUp, CheckCircle2, Clock, Award, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function HomeDashboard() {
  const missions = [
    {
      title: "Smart Contract Basics",
      description: "Learn the fundamentals of smart contracts on Arbitrum",
      progress: 75,
      status: "In Progress",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "DeFi Protocols",
      description: "Understand decentralized finance mechanisms",
      progress: 45,
      status: "In Progress",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const stats = [
    { label: "Missions Completed", value: "12", icon: Target, color: "from-blue-500 to-cyan-500" },
    { label: "Learning Hours", value: "48", icon: Clock, color: "from-purple-500 to-pink-500" },
    { label: "Certificates", value: "5", icon: Award, color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <div className="min-h-full w-full">
      <div className="max-w-[1200px] mx-auto p-12 space-y-12">
        {/* Welcome Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-blue-100 text-sm font-medium">Welcome back!</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">
              Ready to Continue Learning?
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl">
              Master Web3 development through interactive missions and hands-on simulations on Arbitrum.
            </p>
            <div className="flex gap-4">
              <Link
                to="/sandbox"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-purple-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <Play className="w-5 h-5" />
                Launch Sandbox
              </Link>
              <Link
                to="/missions"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
              >
                Browse Missions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-zinc-700/50 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Missions */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Active Missions</h2>
              <p className="text-zinc-400 text-sm">Continue where you left off</p>
            </div>
            <Link
              to="/missions"
              className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium transition-colors"
            >
              View all missions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-zinc-700/50 transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mission.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/20`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{mission.title}</h3>
                          <p className="text-zinc-400">{mission.description}</p>
                        </div>
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {mission.status}
                        </span>
                      </div>
                      <div className="mt-6">
                        <div className="flex items-center justify-between text-sm mb-3">
                          <span className="text-zinc-400">Progress</span>
                          <span className="text-white font-semibold">{mission.progress}%</span>
                        </div>
                        <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${mission.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${mission.color} rounded-full`}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Start Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-4">
            <Link
              to="/missions"
              className="p-6 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-xl transition-all group text-center"
            >
              <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <p className="text-white font-medium mb-1">Start New Mission</p>
              <p className="text-xs text-zinc-500">Begin a new learning path</p>
            </Link>
            <Link
              to="/sandbox"
              className="p-6 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-xl transition-all group text-center"
            >
              <Play className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-white font-medium mb-1">Practice in Sandbox</p>
              <p className="text-xs text-zinc-500">Test your Web3 skills</p>
            </Link>
            <Link
              to="/analytics"
              className="p-6 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-xl transition-all group text-center"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-white font-medium mb-1">View Progress</p>
              <p className="text-xs text-zinc-500">Track your achievements</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
