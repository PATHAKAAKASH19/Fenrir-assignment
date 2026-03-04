import { Button } from "@/components/ui/button";
import useThemeStore from "../../store/useThemeStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { setTheme } = useThemeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full">
          <IconSun
            className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            size={18}
          />
          <IconMoon
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white"
            size={18}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <IconSun size={20} className="mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <IconMoon size={20} className="mr-2"/>
          Dark
        </DropdownMenuItem>
       
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
