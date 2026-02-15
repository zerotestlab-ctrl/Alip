import { motion } from "motion/react";
import { useSearchParams, Link } from "react-router";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  HelpCircle,
  Play,
  CheckCircle2,
  Clock,
  Target,
  Sparkles,
  Download,
  Share2,
} from "lucide-react";

export function MissionResult() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic") || "Web3 Development";

  const missionSteps = [
    {
      type: "Introduction",
      icon: BookOpen,
      title: "Understanding the Basics",
      description: "Learn the fundamental concepts and terminology",
      duration: "5 min",
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "Tutorial",
      icon: Play,
      title: "Video Walkthrough",
      description: "Watch an expert demonstration of key concepts",
      duration: "8 min",
      color: "from-purple-500 to-pink-500",
    },
    {
      type: "Coding Exercise",
      icon: Code2,
      title: "Hands-on Practice",
      description: "Write and deploy your own implementation",
      duration: "15 min",
      color: "from-emerald-500 to-teal-500",
    },
    {
      type: "Quiz",
      icon: HelpCircle,
      title: "Knowledge Check",
      description: "Test your understanding with interactive questions",
      duration: "5 min",
      color: "from-orange-500 to-red-500",
    },
    {
      type: "Project",
      icon: Target,
      title: "Final Challenge",
      description: "Build a complete solution from scratch",
      duration: "20 min",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const totalDuration = missionSteps.reduce((sum, step) => {
    const minutes = parseInt(step.duration);
    return sum + minutes;
  }, 0);

  return (
    <div className="min-h-full w-full">
      <div className="max-w-[1000px] mx-auto p-12 space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/missions"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Mission Builder
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-300 font-medium">Mission Generated</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">{topic}</h1>
              <p className="text-lg text-zinc-400">
                Your AI-generated learning mission is ready
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8"
        >
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-zinc-400">Total Steps</span>
              </div>
              <p className="text-3xl font-bold text-white">{missionSteps.length}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-zinc-400">Duration</span>
              </div>
              <p className="text-3xl font-bold text-white">{totalDuration} min</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-zinc-400">Difficulty</span>
              </div>
              <p className="text-3xl font-bold text-white">Intermediate</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Start Mission
            </button>
            <button className="px-6 py-4 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-white rounded-xl font-semibold transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export
            </button>
            <button className="px-6 py-4 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-white rounded-xl font-semibold transition-all flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </motion.div>

        {/* Mission Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white">Mission Structure</h2>

          <div className="space-y-4">
            {missionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 rounded-2xl p-6 transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {index < missionSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-zinc-700 to-transparent"></div>
                      )}
                    </div>

                    <div className="flex-1 pt-2">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-zinc-500">
                              Step {index + 1}
                            </span>
                            <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-lg font-medium">
                              {step.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                          <p className="text-zinc-400">{step.description}</p>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4">What You'll Learn</h3>
          <ul className="space-y-3">
            {[
              "Core concepts and fundamental principles",
              "Practical implementation techniques",
              "Best practices and common patterns",
              "Real-world application scenarios",
              "Advanced optimization strategies",
            ].map((outcome, index) => (
              <li key={index} className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
