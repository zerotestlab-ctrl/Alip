import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomeDashboard } from "./components/HomeDashboard";
import { SandboxSimulator } from "./components/SandboxSimulator";
import { MissionBuilder } from "./components/MissionBuilder";
import { MissionResult } from "./components/MissionResult";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";
import { EducatorToolkit } from "./components/EducatorToolkit";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomeDashboard },
      { path: "sandbox", Component: SandboxSimulator },
      { path: "missions", Component: MissionBuilder },
      { path: "missions/result", Component: MissionResult },
      { path: "analytics", Component: AnalyticsDashboard },
      { path: "educator", Component: EducatorToolkit },
    ],
  },
]);