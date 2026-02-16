import { motion } from "motion/react";
import { ArrowRight, Play, BookOpen, Target, Clock, Award, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function HomeDashboard() {
  const missions = [
    {
      title: "Smart Contract Basics",
      description: "Learn fundamentals of smart contracts on Arbitrum",
      progress: 75,
      icon: BookOpen,
    },
    {
      title: "DeFi Protocols",
      description: "Understand decentralized finance mechanisms",
      progress: 45,
      icon: Target,
    },
  ];

  const stats = [
    { label: "Missions Completed", value: "12", icon: Target },
    { label: "Learning Hours", value: "48", icon: Clock },
    { label: "Certificates", value: "5", icon: Award },
  ];

  return (
    <div className="min-h-full bg-neutral-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-lg"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium opacity-90">Welcome back!</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Ready to Continue Learning?
          </h1>
          <p className="text-lg opacity-90 mb-8 max-w-2xl">
            Master Web3 development through interactive missions and hands-on simulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/sandbox"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-md"
            >
              <Play className="w-5 h-5" />
              Launch Sandbox
            </Link>
            <Link
              to="/missions"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl font-semibold transition-all"
            >
              Browse Missions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Missions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-1">Active Missions</h2>
              <p className="text-sm text-neutral-600">Continue where you left off</p>
            </div>
            <Link
              to="/missions"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:gap-6">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {mission.title}
                      </h3>
                      <p className="text-neutral-600 mb-6">{mission.description}</p>
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-neutral-600">Progress</span>
                          <span className="font-semibold text-neutral-900">
                            {mission.progress}%
                          </span>
                        </div>
                        <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${mission.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            className="h-full bg-blue-600 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200"
        >
          <h3 className="text-lg font-semibold text-neutral-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/missions"
              className="p-6 bg-neutral-50 hover:bg-neutral-100 rounded-xl transition-all text-center group"
            >
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-medium text-neutral-900 mb-1">Start New Mission</p>
              <p className="text-xs text-neutral-600">Begin a new learning path</p>
            </Link>
            <Link
              to="/sandbox"
              className="p-6 bg-neutral-50 hover:bg-neutral-100 rounded-xl transition-all text-center group"
            >
              <Play className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-medium text-neutral-900 mb-1">Practice in Sandbox</p>
              <p className="text-xs text-neutral-600">Test your Web3 skills</p>
            </Link>
            <Link
              to="/analytics"
              className="p-6 bg-neutral-50 hover:bg-neutral-100 rounded-xl transition-all text-center group"
            >
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-medium text-neutral-900 mb-1">View Progress</p>
              <p className="text-xs text-neutral-600">Track your achievements</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
