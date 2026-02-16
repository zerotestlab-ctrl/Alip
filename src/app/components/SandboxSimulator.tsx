import { useState } from "react";
import { motion } from "motion/react";
import {
  Play,
  RotateCcw,
  Terminal,
  CheckCircle2,
  Circle,
  Lightbulb,
  Code2,
} from "lucide-react";

export function SandboxSimulator() {
  const [activeStep, setActiveStep] = useState(0);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    "Sandbox initialized",
    "Connected to Arbitrum Sepolia testnet",
  ]);

  const missionSteps = [
    {
      title: "Connect Wallet",
      description: "Simulate a Web3 wallet connection",
      completed: false,
    },
    {
      title: "Deploy Contract",
      description: "Deploy a smart contract to testnet",
      completed: false,
    },
    {
      title: "Execute Transaction",
      description: "Send a test transaction",
      completed: false,
    },
    {
      title: "Verify Results",
      description: "Check transaction status",
      completed: false,
    },
  ];

  const [steps, setSteps] = useState(missionSteps);

  const handleAction = () => {
    const messages = [
      "Connecting wallet...\nWallet connected: 0x742d...35A3",
      "Deploying contract...\nContract deployed: 0x1234...5678\nGas used: 250,000",
      "Sending transaction...\nTx hash: 0xabcd...ef12\nStatus: Confirmed ✓",
      "Verifying on block explorer...\n✓ Transaction successful\n✓ Contract verified",
    ];

    setConsoleOutput([...consoleOutput, messages[activeStep]]);
    
    const newSteps = [...steps];
    newSteps[activeStep].completed = true;
    setSteps(newSteps);

    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setSteps(missionSteps.map(s => ({ ...s, completed: false })));
    setConsoleOutput(["Sandbox initialized", "Connected to Arbitrum Sepolia testnet"]);
  };

  const progressPercent = (steps.filter(s => s.completed).length / steps.length) * 100;

  return (
    <div className="min-h-full bg-neutral-50">
      {/* Mobile: Stack vertically */}
      <div className="lg:hidden p-4 space-y-4">
        {/* Simulation First on Mobile */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Simulation</h2>
          <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-neutral-600 mb-6">{steps[activeStep].description}</p>
              <button
                onClick={handleAction}
                disabled={activeStep >= steps.length && steps[steps.length - 1].completed}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-200 text-white disabled:text-neutral-400 rounded-xl font-medium transition-all shadow-sm disabled:shadow-none"
              >
                Execute Step
              </button>
            </div>
          </div>

          {/* Console */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden">
            <div className="px-4 py-3 bg-neutral-800 border-b border-neutral-700 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-white">Console</span>
            </div>
            <div className="p-4 font-mono text-xs h-40 overflow-y-auto space-y-1">
              {consoleOutput.map((line, index) => (
                <div
                  key={index}
                  className={
                    line.includes("✓")
                      ? "text-emerald-400"
                      : "text-neutral-400"
                  }
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Panel */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Mission Steps</h2>
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-neutral-600">Progress</span>
              <span className="font-semibold text-neutral-900">{Math.round(progressPercent)}%</span>
            </div>
            <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                  index === activeStep
                    ? "bg-blue-50 border border-blue-200"
                    : "bg-neutral-50"
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  step.completed
                    ? "bg-emerald-500"
                    : index === activeStep
                    ? "bg-blue-600"
                    : "bg-neutral-300"
                }`}>
                  {step.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : (
                    <Circle className="w-3 h-3 text-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-neutral-900 text-sm">{step.title}</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guidance Panel */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Quick Tip</h3>
              <p className="text-sm text-neutral-700">
                Follow each step in order to complete the simulation. The console output shows real-time feedback.
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-full mt-4 px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-700 rounded-lg font-medium transition-all border border-blue-200 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Simulation
          </button>
        </div>
      </div>

      {/* Desktop: 3-zone layout (20% - 60% - 20%) */}
      <div className="hidden lg:flex h-full">
        {/* Left Mission Panel (20%) */}
        <div className="w-[20%] bg-white border-r border-neutral-200 flex flex-col">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Mission Steps</h2>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-neutral-600">Progress</span>
                <span className="font-semibold text-neutral-900">{Math.round(progressPercent)}%</span>
              </div>
              <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 rounded-xl transition-all ${
                  index === activeStep
                    ? "bg-blue-50 border border-blue-200"
                    : "bg-neutral-50"
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  step.completed
                    ? "bg-emerald-500"
                    : index === activeStep
                    ? "bg-blue-600"
                    : "bg-neutral-300"
                }`}>
                  {step.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : (
                    <Circle className="w-3 h-3 text-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-neutral-900 text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central Simulation Workspace (60%) */}
        <div className="w-[60%] flex flex-col">
          <div className="flex-1 flex flex-col p-8">
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <div className="text-center px-8">
                <motion.div
                  key={activeStep}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <Code2 className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
                  {steps[activeStep].title}
                </h2>
                <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                  {steps[activeStep].description}
                </p>
                <button
                  onClick={handleAction}
                  disabled={activeStep >= steps.length && steps[steps.length - 1].completed}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-200 text-white disabled:text-neutral-400 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:shadow-none"
                >
                  Execute Step
                </button>
              </div>
            </div>

            {/* Console Output */}
            <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-md">
              <div className="px-6 py-4 bg-neutral-800 border-b border-neutral-700 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold text-white">Console Output</span>
              </div>
              <div className="p-6 font-mono text-sm h-64 overflow-y-auto space-y-1">
                {consoleOutput.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={
                      line.includes("✓")
                        ? "text-emerald-400"
                        : "text-neutral-400"
                    }
                  >
                    {line}
                  </motion.div>
                ))}
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600 animate-pulse">▊</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Guidance Panel (20%) */}
        <div className="w-[20%] bg-white border-l border-neutral-200 p-6 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Quick Tip</h3>
                <p className="text-xs text-neutral-700">
                  Follow each step in order to complete the simulation successfully.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
            <h3 className="font-semibold text-neutral-900 mb-4">Network Info</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-neutral-600 mb-1">Network</div>
                <div className="font-medium text-neutral-900">Arbitrum Sepolia</div>
              </div>
              <div>
                <div className="text-neutral-600 mb-1">Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="font-medium text-emerald-600">Connected</span>
                </div>
              </div>
              <div>
                <div className="text-neutral-600 mb-1">Gas Price</div>
                <div className="font-medium text-neutral-900">12 Gwei</div>
              </div>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full px-4 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Simulation
          </button>
        </div>
      </div>
    </div>
  );
}
