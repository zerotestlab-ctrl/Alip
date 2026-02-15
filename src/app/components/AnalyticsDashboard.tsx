import { motion } from "motion/react";
import {
  BarChart3,
  TrendingUp,
  Award,
  Target,
  Clock,
  Users,
  Calendar,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

export function AnalyticsDashboard() {
  const progressData = [
    { month: "Jan", hours: 12 },
    { month: "Feb", hours: 19 },
    { month: "Mar", hours: 25 },
    { month: "Apr", hours: 32 },
    { month: "May", hours: 38 },
    { month: "Jun", hours: 48 },
  ];

  const missionData = [
    { topic: "Smart Contracts", completed: 8, total: 10 },
    { topic: "DeFi", completed: 6, total: 8 },
    { topic: "NFTs", completed: 5, total: 6 },
    { topic: "DAOs", completed: 3, total: 5 },
    { topic: "Security", completed: 4, total: 7 },
  ];

  const stats = [
    {
      label: "Total Learning Hours",
      value: "48",
      change: "+12%",
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-400",
    },
    {
      label: "Missions Completed",
      value: "26",
      change: "+8%",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400",
    },
    {
      label: "Certificates Earned",
      value: "5",
      change: "+2",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-400",
    },
    {
      label: "Community Rank",
      value: "#234",
      change: "↑ 12",
      icon: Users,
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-400",
    },
  ];

  const recentActivity = [
    { mission: "Token Swaps", date: "Feb 14, 2026", score: "95%" },
    { mission: "Liquidity Pools", date: "Feb 12, 2026", score: "88%" },
    { mission: "Smart Contract Security", date: "Feb 10, 2026", score: "92%" },
    { mission: "NFT Minting", date: "Feb 8, 2026", score: "100%" },
  ];

  return (
    <div className="min-h-full w-full">
      <div className="max-w-[1200px] mx-auto p-12 space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium">Progress Analytics</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Your Learning Analytics</h1>
          <p className="text-lg text-zinc-400">Track your progress and achievements</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700/50 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-400 mb-2">{stat.label}</div>
                <div className={`text-sm font-semibold ${stat.textColor}`}>{stat.change}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Learning Progress Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">Learning Progress</h2>
                <p className="text-sm text-zinc-400">Monthly learning hours</p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                +27%
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={progressData}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="month" stroke="#71717a" style={{ fontSize: "12px" }} />
                <YAxis stroke="#71717a" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="hours"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorHours)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Mission Completion Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8"
          >
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-1">Mission Completion</h2>
              <p className="text-sm text-zinc-400">Progress by topic</p>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={missionData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis type="number" stroke="#71717a" style={{ fontSize: "12px" }} />
                <YAxis
                  type="category"
                  dataKey="topic"
                  stroke="#71717a"
                  style={{ fontSize: "12px" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="completed" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                <Bar dataKey="total" fill="#27272a" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">Recent Completions</h2>
              <p className="text-sm text-zinc-400">Your latest mission scores</p>
            </div>
            <Calendar className="w-5 h-5 text-zinc-600" />
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-5 bg-zinc-800/30 hover:bg-zinc-800/50 border border-zinc-800/50 rounded-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{activity.mission}</h3>
                    <p className="text-sm text-zinc-500">{activity.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-400">{activity.score}</div>
                  <div className="text-xs text-zinc-500">Score</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
