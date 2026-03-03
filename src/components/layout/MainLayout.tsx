import { useState, useEffect, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileNav from "./MobileNav";
import { cn } from "../../lib/utils";



type MainLayoutProps = {
    children: ReactNode
}

const MainLayout = ({ children }:MainLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto collapse on mobile
//   useEffect(() => {
//     if (isMobile && !isCollapsed) {
//       setIsCollapsed(true);
//     }
//   }, [isMobile, isCollapsed]);

  return (
    <div className="min-h-screen bg-background">
      {!isMobile && (
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      )}

     
      <div
        className={cn(
          "transition-all duration-300",
          !isMobile && (isCollapsed ? "ml-20" : "ml-64"),
        )}
      >
    
        <div className="lg:hidden flex items-center h-16 px-4 border-b border-border">
          <MobileNav />
          <span className="ml-4 text-xl font-bold text-primary">Fenrir</span>
          <div className="ml-auto">
            <Header />
          </div>
        </div>

     
        <div className="hidden lg:block">
          <Header />
        </div>

       
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
