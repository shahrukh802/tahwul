import Image from "next/image";
import logo from "@/assets/logo.svg";
import { navItems } from "@/data/constants";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-app-primary text-white hidden md:block">
      <div className="h-16 px-6 flex ">
        <Image src={logo} alt="Tahwul Logo" height={40} />
      </div>

      <nav className="p-3 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          return (
            <div
              key={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition text-white/70 hover:bg-white/5`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
