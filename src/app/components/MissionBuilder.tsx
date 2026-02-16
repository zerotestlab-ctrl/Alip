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
      difficulty: "Beginner",
    },
    {
      icon: Code2,
      title: "DeFi Protocol Development",
      difficulty: "Advanced",
    },
    {
      icon: HelpCircle,
      title: "NFT Marketplace Creation",
      difficulty: "Intermediate",
    },
    {
      icon: Play,
      title: "Token Standards (ERC-20)",
      difficulty: "Intermediate",
    },
  ];

  const quickTopics = [
    "Smart Contract Security",
    "Liquidity Pools",
    "DAO Governance",
    "Cross-chain Bridges",
  ];

  return (
    <div className="min-h-full bg-neutral-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4 border border-blue-100">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">AI-Powered Mission Generation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Mission Builder Studio
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Enter any Web3 topic and let AI create a comprehensive learning mission
          </p>
        </motion.div>

        {/* Main Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200"
        >
          <label className="block text-sm font-medium text-neutral-900 mb-3">
            Enter Mission Topic
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            placeholder="e.g., Building a Decentralized Exchange on Arbitrum"
            className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all mb-4"
          />

          <button
            onClick={handleGenerate}
            disabled={!topic.trim()}
            className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-200 text-white disabled:text-neutral-400 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md disabled:shadow-none flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Generate Mission
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Quick Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-medium text-neutral-600 mb-3">Quick Suggestions</h3>
          <div className="flex flex-wrap gap-2">
            {quickTopics.map((quickTopic, index) => (
              <button
                key={index}
                onClick={() => setTopic(quickTopic)}
                className="px-4 py-2 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-700 transition-all"
              >
                {quickTopic}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Templates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Mission Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templates.map((template, index) => {
              const Icon = template.icon;
              return (
                <button
                  key={index}
                  onClick={() => setTopic(template.title)}
                  className="bg-white hover:bg-neutral-50 border border-neutral-200 rounded-2xl p-6 transition-all text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-neutral-900">{template.title}</h3>
                        <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-lg font-medium whitespace-nowrap ml-2">
                          {template.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
