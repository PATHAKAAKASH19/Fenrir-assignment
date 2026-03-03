import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import ThemeToggle from "./ThemeToggle";
import {
  IconLayoutDashboard,
  IconFolder,
  IconScan,
  IconCalendar,
  IconBell,
  IconSettings,
  IconLifebuoy,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { NAVIGATION_ITEMS } from "../../utils/constants";



type SidebarProps = {
    isCollapsed: boolean,
    setIsCollapsed:(isCollapsed:boolean) => void
}

type IconName =
  | "LayoutDashboard"
  | "Folder"
  | "Scan"
  | "Calendar"
  | "Bell"
  | "Settings"
  | "Lifebuoy";

const Sidebar = ({ isCollapsed, setIsCollapsed }:SidebarProps) => {

  const getIcon = (iconName: IconName) => {
    const icons: Record<
      IconName,
      React.ComponentType<{ size?: number; className?: string }>
    > = {
      LayoutDashboard: IconLayoutDashboard,
      Folder: IconFolder,
      Scan: IconScan,
      Calendar: IconCalendar,
      Bell: IconBell,
      Settings: IconSettings,
      Lifebuoy: IconLifebuoy,
    };
    return icons[iconName];
  };

  return (
    <aside
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col",
        "bg-surface border-r border-border transition-all duration-300",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      {/* Logo Area */}
      <div
        className={cn(
          "flex items-center h-16 px-4",
          isCollapsed ? "justify-center" : "justify-between",
        )}
      >
        {!isCollapsed && (
          <span className="text-xl font-bold text-primary">Fenrir</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8"
        >
          {isCollapsed ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
        </Button>
      </div>

      <Separator className="mb-4" />

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2">
        {NAVIGATION_ITEMS.map((item) => {
          const IconComponent = getIcon(item.icon);
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center px-3 py-2 rounded-lg transition-colors",
                  "hover:bg-primary/10 hover:text-primary",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground",
                  isCollapsed ? "justify-center" : "space-x-3",
                )
              }
            >
              <IconComponent size={20} />
              {!isCollapsed && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="mt-auto p-4 border-t border-border">
        <div
          className={cn(
            "flex items-center",
            isCollapsed ? "justify-center" : "space-x-3",
          )}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">
                john@fenrir.com
              </p>
            </div>
          )}
          {!isCollapsed && <ThemeToggle />}
        </div>
        {isCollapsed && (
          <div className="mt-2 flex justify-center">
            <ThemeToggle />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
