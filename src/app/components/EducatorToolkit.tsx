import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Users,
  Video,
  FileText,
  Calendar,
  Settings,
  Plus,
  Target,
  TrendingUp,
  Clock,
} from "lucide-react";

export function EducatorToolkit() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "missions", label: "Missions", icon: Target },
    { id: "students", label: "Students", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  // Overview content
  const stats = [
    { label: "Total Students", value: "142", icon: Users, change: "+12 this month" },
    { label: "Active Missions", value: "18", icon: Target, change: "3 new this week" },
    { label: "Completion Rate", value: "87%", icon: TrendingUp, change: "+5% this month" },
  ];

  const recentWorkshops = [
    {
      title: "Introduction to Web3 Development",
      date: "Feb 20, 2026",
      students: 24,
      status: "upcoming",
    },
    {
      title: "Advanced Smart Contract Security",
      date: "Feb 18, 2026",
      students: 18,
      status: "in-progress",
    },
    {
      title: "DeFi Protocol Workshop",
      date: "Feb 15, 2026",
      students: 32,
      status: "completed",
    },
  ];

  const resources = [
    { title: "Smart Contract Templates", count: 24, icon: FileText },
    { title: "Video Tutorials", count: 48, icon: Video },
    { title: "Course Materials", count: 36, icon: BookOpen },
  ];

  // Missions content
  const missions = [
    {
      title: "Smart Contract Basics",
      students: 45,
      completion: 78,
      status: "active",
    },
    {
      title: "DeFi Fundamentals",
      students: 38,
      completion: 65,
      status: "active",
    },
    {
      title: "NFT Development",
      students: 52,
      completion: 92,
      status: "active",
    },
  ];

  // Students content
  const students = [
    { name: "Alex Johnson", email: "alex@example.com", missions: 12, hours: 48 },
    { name: "Sarah Chen", email: "sarah@example.com", missions: 15, hours: 62 },
    { name: "Mike Wilson", email: "mike@example.com", missions: 8, hours: 34 },
    { name: "Emma Davis", email: "emma@example.com", missions: 20, hours: 85 },
  ];

  return (
    <div className="min-h-full bg-neutral-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            Educator Toolkit
          </h1>
          <p className="text-neutral-600">Manage your students and learning content</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl p-2 shadow-sm border border-neutral-200">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-neutral-600 hover:bg-neutral-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-neutral-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-neutral-600 mb-2">{stat.label}</div>
                      <div className="text-xs text-emerald-600">{stat.change}</div>
                    </div>
                  );
                })}
              </div>

              {/* Resources */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-900 mb-1">
                      Resource Library
                    </h2>
                    <p className="text-sm text-neutral-600">Teaching materials and content</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center gap-2 text-sm">
                    <Plus className="w-4 h-4" />
                    Add Resource
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {resources.map((resource, index) => {
                    const Icon = resource.icon;
                    return (
                      <div
                        key={index}
                        className="p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-neutral-900 mb-1 text-sm">
                              {resource.title}
                            </h3>
                            <p className="text-xs text-neutral-600">
                              {resource.count} items
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Workshops */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-900 mb-1">
                      Workshop Schedule
                    </h2>
                    <p className="text-sm text-neutral-600">Upcoming and recent sessions</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {recentWorkshops.map((workshop, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-neutral-50 gap-3"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-neutral-900 mb-1">
                            {workshop.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-neutral-600">
                            <span>{workshop.date}</span>
                            <span>•</span>
                            <span>{workshop.students} students</span>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${
                          workshop.status === "upcoming"
                            ? "bg-blue-50 text-blue-600"
                            : workshop.status === "in-progress"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-neutral-200 text-neutral-600"
                        }`}
                      >
                        {workshop.status === "upcoming"
                          ? "Upcoming"
                          : workshop.status === "in-progress"
                          ? "In Progress"
                          : "Completed"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "missions" && (
            <motion.div
              key="missions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-900 mb-1">
                      Active Missions
                    </h2>
                    <p className="text-sm text-neutral-600">Manage your learning missions</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center gap-2 text-sm">
                    <Plus className="w-4 h-4" />
                    Create Mission
                  </button>
                </div>

                <div className="space-y-4">
                  {missions.map((mission, index) => (
                    <div
                      key={index}
                      className="p-6 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-neutral-900 mb-1">
                            {mission.title}
                          </h3>
                          <p className="text-sm text-neutral-600">
                            {mission.students} students enrolled
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-medium">
                          Active
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-neutral-600">Avg. Completion</span>
                          <span className="font-semibold text-neutral-900">
                            {mission.completion}%
                          </span>
                        </div>
                        <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 transition-all"
                            style={{ width: `${mission.completion}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "students" && (
            <motion.div
              key="students"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200"
            >
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-neutral-900 mb-1">
                  Student Progress
                </h2>
                <p className="text-sm text-neutral-600">Track individual student performance</p>
              </div>

              <div className="space-y-3">
                {students.map((student, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors gap-3"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {student.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-neutral-900">{student.name}</h3>
                        <p className="text-sm text-neutral-600 truncate">{student.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <div className="text-neutral-600 mb-1">Missions</div>
                        <div className="font-semibold text-neutral-900">{student.missions}</div>
                      </div>
                      <div>
                        <div className="text-neutral-600 mb-1">Hours</div>
                        <div className="font-semibold text-neutral-900">{student.hours}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200"
            >
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-neutral-900 mb-1">Settings</h2>
                <p className="text-sm text-neutral-600">Manage your platform preferences</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    defaultValue="ALIP"
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Default Mission Duration
                  </label>
                  <select className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                    <option>90 minutes</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="font-medium text-neutral-900 mb-1">
                      Email Notifications
                    </div>
                    <div className="text-sm text-neutral-600">
                      Receive updates about student progress
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}