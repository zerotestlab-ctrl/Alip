import { motion } from "motion/react";
import {
  BookOpen,
  Users,
  Video,
  FileText,
  Download,
  Plus,
  Calendar,
  MessageSquare,
  GraduationCap,
  Lightbulb,
  Code2,
  PenTool,
} from "lucide-react";

export function EducatorToolkit() {
  const resources = [
    {
      title: "Smart Contract Templates",
      description: "Pre-built contract examples for teaching",
      icon: Code2,
      count: "24 templates",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Video Tutorials",
      description: "Recorded lectures and demonstrations",
      icon: Video,
      count: "48 videos",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Course Materials",
      description: "Slides, worksheets, and guides",
      icon: FileText,
      count: "36 documents",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Assessment Tools",
      description: "Quizzes and evaluation frameworks",
      icon: PenTool,
      count: "18 assessments",
      color: "from-orange-500 to-red-500",
    },
  ];

  const workshops = [
    {
      title: "Introduction to Web3 Development",
      date: "Feb 20, 2026",
      students: 24,
      status: "Upcoming",
      statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      title: "Advanced Smart Contract Security",
      date: "Feb 18, 2026",
      students: 18,
      status: "In Progress",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      title: "DeFi Protocol Workshop",
      date: "Feb 15, 2026",
      students: 32,
      status: "Completed",
      statusColor: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    },
  ];

  const quickActions = [
    {
      icon: Plus,
      title: "Create Workshop",
      description: "Set up a new learning session",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Manage Students",
      description: "View and organize learners",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "Engage with students",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Download,
      title: "Export Reports",
      description: "Download analytics data",
      color: "from-orange-500 to-red-500",
    },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Educator Tools</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Educator Toolkit</h1>
          <p className="text-lg text-zinc-400">
            Resources and tools to create amazing Web3 learning experiences
          </p>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 rounded-2xl p-6 transition-all text-left group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{action.title}</h3>
                <p className="text-sm text-zinc-400">{action.description}</p>
              </motion.button>
            );
          })}
        </div>

        {/* Resource Library */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Resource Library</h2>
              <p className="text-sm text-zinc-400">Teaching materials and content</p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25">
              <Plus className="w-4 h-4" />
              Add Resource
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 rounded-2xl p-8 transition-all group"
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-zinc-400 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-zinc-500 font-medium">
                          {resource.count}
                        </span>
                        <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-1">
                          Browse
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Workshop Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Workshop Schedule</h2>
              <p className="text-sm text-zinc-400">Upcoming and past sessions</p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-white rounded-xl font-semibold transition-all">
              <Calendar className="w-4 h-4" />
              View Calendar
            </button>
          </div>

          <div className="space-y-4">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 rounded-2xl p-6 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {workshop.title}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {workshop.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {workshop.students} students
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${workshop.statusColor}`}>
                    {workshop.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips & Ideas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Teaching Tips</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Start with interactive sandbox exercises to build student confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Use real-world examples from popular DeFi protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Encourage peer code reviews to foster collaborative learning</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
