import { motion } from "motion/react";
import { Target, Clock, Award, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function AnalyticsDashboard() {
  const progressData = [
    { date: "Jan", hours: 12 },
    { date: "Feb", hours: 19 },
    { date: "Mar", hours: 25 },
    { date: "Apr", hours: 32 },
    { date: "May", hours: 38 },
    { date: "Jun", hours: 48 },
  ];

  const metrics = [
    {
      label: "Missions Completed",
      value: "26",
      change: "+8% from last month",
      icon: Target,
      color: "blue",
    },
    {
      label: "Learning Hours",
      value: "48",
      change: "+12 hours this month",
      icon: Clock,
      color: "blue",
    },
    {
      label: "Certificates Earned",
      value: "5",
      change: "2 new this month",
      icon: Award,
      color: "blue",
    },
  ];

  const recentActivity = [
    {
      mission: "Smart Contract Security",
      date: "Feb 14, 2026",
      score: "95%",
      status: "completed",
    },
    {
      mission: "DeFi Liquidity Pools",
      date: "Feb 12, 2026",
      score: "88%",
      status: "completed",
    },
    {
      mission: "NFT Minting Basics",
      date: "Feb 10, 2026",
      score: "100%",
      status: "completed",
    },
    {
      mission: "Token Standards",
      date: "Feb 8, 2026",
      score: "92%",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-full bg-neutral-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            Analytics
          </h1>
          <p className="text-neutral-600">Track your learning progress and achievements</p>
        </div>

        {/* 3 Key Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-neutral-600 mb-2">{metric.label}</div>
                <div className="flex items-center gap-1 text-xs text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  {metric.change}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200"
        >
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-1">
              Learning Progress
            </h2>
            <p className="text-sm text-neutral-600">Monthly learning hours over time</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                <XAxis
                  dataKey="date"
                  stroke="#737373"
                  style={{ fontSize: "12px" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#737373"
                  style={{ fontSize: "12px" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e5e5",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                  labelStyle={{ color: "#171717", fontWeight: 600 }}
                />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ fill: "#2563eb", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Simple Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200"
        >
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-1">
              Recent Activity
            </h2>
            <p className="text-sm text-neutral-600">Your latest completed missions</p>
          </div>

          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-neutral-900 mb-1 truncate">
                      {activity.mission}
                    </h3>
                    <p className="text-sm text-neutral-600">{activity.date}</p>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <div className="text-xl font-bold text-emerald-600">{activity.score}</div>
                  <div className="text-xs text-neutral-500">Score</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
