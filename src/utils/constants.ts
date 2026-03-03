type NavigationType = {
  name: string;
  icon:
    | "LayoutDashboard"
    | "Folder"
    | "Scan"
    | "Calendar"
    | "Bell"
    | "Settings"
    | "Lifebuoy";

  path: string;
};

export const NAVIGATION_ITEMS: NavigationType[] = [
  { name: "Dashboard", icon: "LayoutDashboard", path: "/dashboard" },
  { name: "Projects", icon: "Folder", path: "/projects" },
  { name: "Scans", icon: "Scan", path: "/scans" },
  { name: "Schedule", icon: "Calendar", path: "/schedule" },
  { name: "Notifications", icon: "Bell", path: "/notifications" },
  { name: "Settings", icon: "Settings", path: "/settings" },
  { name: "Support", icon: "Lifebuoy", path: "/support" },
];

export const SEVERITY_COLORS = {
  critical: "bg-red-500/10 text-red-500 border-red-500/20",
  high: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  low: "bg-green-500/10 text-green-500 border-green-500/20",
};

export const STATUS_COLORS = {
  completed: "bg-green-500/10 text-green-500 border-green-500/20",
  scheduled: "bg-gray-500/10 text-gray-500 border-gray-500/20",
  failed: "bg-red-500/10 text-red-500 border-red-500/20",
  in_progress: "bg-blue-500/10 text-blue-500 border-blue-500/20",
};
