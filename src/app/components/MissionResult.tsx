import { motion } from "motion/react";
import { useSearchParams, Link } from "react-router";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  HelpCircle,
  Play,
  Target,
  CheckCircle2,
  Clock,
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
      duration: "5 min",
    },
    {
      type: "Tutorial",
      icon: Play,
      title: "Video Walkthrough",
      duration: "8 min",
    },
    {
      type: "Coding Exercise",
      icon: Code2,
      title: "Hands-on Practice",
      duration: "15 min",
    },
    {
      type: "Quiz",
      icon: HelpCircle,
      title: "Knowledge Check",
      duration: "5 min",
    },
    {
      type: "Project",
      icon: Target,
      title: "Final Challenge",
      duration: "20 min",
    },
  ];

  const totalDuration = missionSteps.reduce((sum, step) => {
    const minutes = parseInt(step.duration);
    return sum + minutes;
  }, 0);

  return (
    <div className="min-h-full bg-neutral-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/missions"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Mission Builder
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-4 border border-emerald-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-600 font-medium">Mission Generated</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">{topic}</h1>
          <p className="text-lg text-neutral-600">
            Your AI-generated learning mission is ready
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200"
        >
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-neutral-600">Steps</span>
              </div>
              <p className="text-3xl font-bold text-neutral-900">{missionSteps.length}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-neutral-600">Duration</span>
              </div>
              <p className="text-3xl font-bold text-neutral-900">{totalDuration} min</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-neutral-600">Difficulty</span>
              </div>
              <p className="text-3xl font-bold text-neutral-900">Medium</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-sm flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Start Mission
            </button>
            <button className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Export
            </button>
            <button className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
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
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200"
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">Mission Structure</h2>

          <div className="space-y-4">
            {missionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-neutral-500">
                            Step {index + 1}
                          </span>
                          <span className="px-2 py-1 bg-neutral-200 text-neutral-600 text-xs rounded font-medium">
                            {step.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {step.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-neutral-600 text-sm">
                        <Clock className="w-4 h-4" />
                        {step.duration}
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
          className="bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100"
        >
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">What You'll Learn</h3>
          <ul className="space-y-3">
            {[
              "Core concepts and fundamental principles",
              "Practical implementation techniques",
              "Best practices and common patterns",
              "Real-world application scenarios",
            ].map((outcome, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
