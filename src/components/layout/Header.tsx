import { Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      {/* Left: Search */}
      <div className="flex items-center gap-3 w-79.5">
        <InputGroup className=" bg-[#F5F8FA] border-[#E0E8ED]">
          <InputGroupInput id="inline-start-input" placeholder="Search" />
          <InputGroupAddon align="inline-start">
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative text-muted-foreground hover:text-foreground transition">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/40" />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>

          <span className="text-sm font-medium">Mohamed</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
