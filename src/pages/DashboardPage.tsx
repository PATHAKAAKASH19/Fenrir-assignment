import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/layout/ThemeToggle";

import {
  IconLayoutDashboard,
  IconClipboardCheck,
  IconScan,
  IconCalendar,
  IconBell,
  IconSettings,
  IconHelpCircle,
  IconChevronRight,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

export default function DashboardLayout() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mainNavItems = [
    { icon: IconLayoutDashboard, label: "Dashboard", route: "dashboard" },
    { icon: IconClipboardCheck, label: "Projects", route: "dashboard" },
    { icon: IconScan, label: "Scans", route: "scans" },
    { icon: IconCalendar, label: "Schedule", route: "dashboard" },
  ];

  const secondaryNavItems = [
    { icon: IconBell, label: "Notifications", route: "dashboard" },
    { icon: IconSettings, label: "Settings", route: "dashboard" },
    { icon: IconHelpCircle, label: "Support", route: "dashboard" },
  ];

 
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && sidebarOpen) {
        const sidebar = document.getElementById("sidebar");
        if (sidebar && !sidebar.contains(e.target as Node)) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, sidebarOpen]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fb] dark:bg-gray-950">
     
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

   
      <aside
        id="sidebar"
        className={`
          fixed lg:static left-0 top-0 h-full w-70 bg-white dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-700 flex flex-col z-50
          transition-transform duration-300 ease-in-out
          ${isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"}
        `}
      >
       
        <div className="flex items-center justify-between px-4 py-5">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-teal-700 dark:bg-teal-600 flex items-center justify-center border-2 border-teal-800 dark:border-teal-500">
              <div className="w-3 h-3 rounded-full bg-white m-2 border-2"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-teal-700 dark:text-teal-400">
              aps
            </span>
          </div>
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <IconX className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          )}
        </div>

     
        <nav className="flex-1 px-5 py-2 overflow-y-auto">
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <Link
                to={`/${item.route}`}
                key={item.label}
                onClick={() => isMobile && setSidebarOpen(false)}
              >
                <button
                  onClick={() => setActiveNav(item.label)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-3 rounded-full transition-all duration-200
                    ${
                      activeNav === item.label
                        ? "bg-[#e6f7f5] dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  <item.icon
                    className={`h-5 w-5 ${
                      activeNav === item.label
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-gray-500 dark:text-gray-500"
                    }`}
                  />
                  <span className="text-sm">{item.label}</span>
                </button>
              </Link>
            ))}
          </div>

          <Separator className="my-4 dark:bg-gray-700" />

          <div className="space-y-1">
            {secondaryNavItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-500" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

       
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-green-100 dark:ring-teal-900 shrink-0">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-linear-to-br from-purple-500 to-pink-500 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                Security Lead
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                admin@edu.com
              </p>
            </div>
            <IconChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500 shrink-0" />
          </div>
        </div>
      </aside>

  
      <main className="flex-1  h-screen overflow-y-auto">
        
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
          <div className="px-4 md:px-6 pt-3 md:pt-4 pb-1">
            <div className="flex items-center justify-between mb-2 md:mb-3">
            
              {isMobile && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg mr-2"
                >
                  <IconMenu2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </button>
              )}

              <div className="flex-1 overflow-x-auto hide-scrollbar">
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm min-w-max md:min-w-0">
                  <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    Scan
                  </span>
                  <span className="text-gray-400 dark:text-gray-600 whitespace-nowrap">
                    ›
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    Private Assets
                  </span>
                  <span className="text-gray-400 dark:text-gray-600 whitespace-nowrap">
                    ›
                  </span>
                  <span className="text-teal-600 dark:text-teal-400 font-medium whitespace-nowrap">
                    New Scan
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3 shrink-0">
                <ThemeToggle />
                <Button
                  variant="outline"
                  className="hidden sm:flex border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 h-9 md:h-11 text-[11px] md:text-[13px] px-2 md:px-3"
                >
                  Export
                </Button>
                <Button className="cursor-pointer bg-[#ff6b6b]/20 dark:bg-red-900/30 hover:bg-[#ff6b6b]/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 rounded-md text-[11px] md:text-[13px] h-9 md:h-11 px-2 md:px-3 border border-red-300 dark:border-red-800 whitespace-nowrap">
                  Stop
                </Button>
              </div>
            </div>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
}
