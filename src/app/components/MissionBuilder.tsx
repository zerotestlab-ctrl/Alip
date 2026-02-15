import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Code2,
  HelpCircle,
  Play,
  Zap,
} from "lucide-react";

export function MissionBuilder() {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const handleGenerate = () => {
    if (topic.trim()) {
      navigate(`/missions/result?topic=${encodeURIComponent(topic)}`);
    }
  };

  const templates = [
    {
      icon: BookOpen,
      title: "Smart Contract Fundamentals",
      description: "Introduction to writing and deploying smart contracts",
      color: "from-blue-500 to-cyan-500",
      difficulty: "Beginner",
    },
    {
      icon: Code2,
      title: "DeFi Protocol Development",
      description: "Build decentralized finance applications",
      color: "from-purple-500 to-pink-500",
      difficulty: "Advanced",
    },
    {
      icon: HelpCircle,
      title: "NFT Marketplace Creation",
      description: "Create and deploy NFT smart contracts",
      color: "from-emerald-500 to-teal-500",
      difficulty: "Intermediate",
    },
    {
      icon: Play,
      title: "Token Standards (ERC-20)",
      description: "Implement fungible token standards",
      color: "from-orange-500 to-red-500",
      difficulty: "Intermediate",
    },
  ];

  const quickTopics = [
    "Smart Contract Security",
    "Liquidity Pools",
    "DAO Governance",
    "Cross-chain Bridges",
    "Token Economics",
    "Gas Optimization",
  ];

  return (
    <div className="min-h-full w-full">
      <div className="max-w-[1000px] mx-auto p-12 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">AI-Powered Mission Generation</span>
          </div>
          <h1 className="text-4xl font-bold text-white">Mission Builder Studio</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Enter any Web3 topic and let AI create a comprehensive learning mission for you
          </p>
        </motion.div>

        {/* Main Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-10 shadow-2xl">
            <label className="block text-sm font-medium text-zinc-300 mb-4">
              Enter Mission Topic
            </label>
            <div className="relative">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                placeholder="e.g., Building a Decentralized Exchange on Arbitrum"
                className="w-full px-6 py-5 bg-zinc-800/50 border-2 border-zinc-700/50 rounded-2xl text-white text-lg placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
              <Zap className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
            </div>

            <button
              onClick={handleGenerate}
              disabled={!topic.trim()}
              className="w-full mt-6 px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-zinc-700 disabled:to-zinc-700 text-white rounded-2xl font-semibold text-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:shadow-none flex items-center justify-center gap-3 group disabled:cursor-not-allowed"
            >
              <Sparkles className="w-5 h-5" />
              Generate Mission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Quick Topic Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-medium text-zinc-400 mb-4">Quick Suggestions</h3>
          <div className="flex flex-wrap gap-3">
            {quickTopics.map((quickTopic, index) => (
              <button
                key={index}
                onClick={() => setTopic(quickTopic)}
                className="px-4 py-2 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 rounded-xl text-sm text-zinc-300 hover:text-white transition-all"
              >
                {quickTopic}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Template Library */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Mission Templates</h2>
            <p className="text-sm text-zinc-400">Start with a pre-built mission template</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {templates.map((template, index) => {
              const Icon = template.icon;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onClick={() => setTopic(template.title)}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 rounded-2xl p-6 transition-all text-left group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${template.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-semibold">{template.title}</h3>
                        <span className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-lg font-medium">
                          {template.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400">{template.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
