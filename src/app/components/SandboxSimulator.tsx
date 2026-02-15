import { useState } from "react";
import { motion } from "motion/react";
import {
  Play,
  RotateCcw,
  Terminal,
  Wallet,
  Send,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Code2,
  BookOpen,
} from "lucide-react";

export function SandboxSimulator() {
  const [activeStep, setActiveStep] = useState(0);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    "> Sandbox initialized",
    "> Connected to Arbitrum testnet",
  ]);

  const tutorialSteps = [
    {
      title: "Connect Wallet",
      description: "Simulate a Web3 wallet connection",
      icon: Wallet,
      action: "Connect",
    },
    {
      title: "Deploy Contract",
      description: "Deploy a smart contract to the testnet",
      icon: Code2,
      action: "Deploy",
    },
    {
      title: "Execute Transaction",
      description: "Send a test transaction",
      icon: Send,
      action: "Send",
    },
    {
      title: "Verify Results",
      description: "Check transaction status",
      icon: CheckCircle2,
      action: "Verify",
    },
  ];

  const handleAction = (step: number, action: string) => {
    const messages = [
      "> Connecting wallet...\n> Wallet connected: 0x742d...35A3",
      "> Deploying contract...\n> Contract deployed at: 0x1234...5678\n> Gas used: 250,000",
      "> Sending transaction...\n> Transaction hash: 0xabcd...ef12\n> Status: Confirmed",
      "> Verifying on block explorer...\n> ✓ Transaction successful\n> ✓ Contract verified",
    ];

    setConsoleOutput([...consoleOutput, messages[step]]);
    if (step < tutorialSteps.length - 1) {
      setActiveStep(step + 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setConsoleOutput(["> Sandbox initialized", "> Connected to Arbitrum testnet"]);
  };

  return (
    <div className="min-h-full w-full">
      <div className="max-w-[1200px] mx-auto p-12 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Play className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Interactive Sandbox</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Web3 Simulator</h1>
          <p className="text-lg text-zinc-400">
            Practice Web3 development in a safe, simulated environment
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Tutorial Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-semibold text-white">Tutorial Steps</h2>
              </div>

              <div className="space-y-3">
                {tutorialSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = index < activeStep;

                  return (
                    <div
                      key={index}
                      className={`relative p-4 rounded-xl border-2 transition-all ${
                        isActive
                          ? "border-blue-500 bg-blue-500/5"
                          : isCompleted
                          ? "border-emerald-500/30 bg-emerald-500/5"
                          : "border-zinc-800 bg-zinc-800/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isActive
                              ? "bg-blue-500"
                              : isCompleted
                              ? "bg-emerald-500"
                              : "bg-zinc-700"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          ) : (
                            <Icon className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium mb-1">{step.title}</h3>
                          <p className="text-sm text-zinc-400">{step.description}</p>
                        </div>
                      </div>
                      {index < tutorialSteps.length - 1 && (
                        <div className="absolute left-8 bottom-0 translate-y-full w-0.5 h-3 bg-zinc-700"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleReset}
                className="w-full mt-6 px-4 py-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Tutorial
              </button>
            </div>
          </motion.div>

          {/* Workspace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 space-y-6"
          >
            {/* Action Area */}
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 mb-4">
                  {(() => {
                    const Icon = tutorialSteps[activeStep].icon;
                    return <Icon className="w-10 h-10 text-white" />;
                  })()}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {tutorialSteps[activeStep].title}
                  </h2>
                  <p className="text-zinc-400">{tutorialSteps[activeStep].description}</p>
                </div>

                <button
                  onClick={() => handleAction(activeStep, tutorialSteps[activeStep].action)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group"
                >
                  {tutorialSteps[activeStep].action}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Console Output */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-6 py-4 bg-zinc-800/50 border-b border-zinc-800/50">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-white">Console Output</h3>
              </div>
              <div className="p-6 font-mono text-sm space-y-2 h-[400px] overflow-y-auto">
                {consoleOutput.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${
                      line.includes("✓")
                        ? "text-emerald-400"
                        : line.includes("Error") || line.includes("✗")
                        ? "text-red-400"
                        : "text-zinc-400"
                    }`}
                  >
                    {line.split("\n").map((subLine, subIndex) => (
                      <div key={subIndex}>{subLine}</div>
                    ))}
                  </motion.div>
                ))}
                <div className="flex items-center gap-2 text-zinc-600">
                  <span className="animate-pulse">▊</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Wallet className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-zinc-400">Network</span>
                </div>
                <p className="text-white font-semibold">Arbitrum Testnet</p>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-zinc-400">Status</span>
                </div>
                <p className="text-white font-semibold">Connected</p>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-zinc-400">Gas Price</span>
                </div>
                <p className="text-white font-semibold">12 Gwei</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}