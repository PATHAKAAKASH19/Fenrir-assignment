import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <IconMenu2 size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <Sidebar isCollapsed={false} setIsCollapsed={() => {}} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
