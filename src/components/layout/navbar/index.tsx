"use client";

import DownloadAppButton from "@/components/DownloadAppButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavActions from "./NavActions";
import NavLogo from "./NavLogo";

export default function Navbar() {
  return (
    <header className="sticky top-6 px-2.5 sm:px-0 z-50">
      <div className="container mx-auto h-24 bg-primary-gradient rounded-full p-0.5">
        <div className="relative h-full flex justify-between items-center bg-background rounded-full px-6">
          <div className="w-36">
            <NavLogo />
          </div>
          <div className="hidden xl:block">
            <DesktopNav />
          </div>
          <div className="flex items-center gap-2.5 xl:hidden">
            <DownloadAppButton />
            <MobileNav />
          </div>
          <div className="hidden xl:block">
            <NavActions />
          </div>
        </div>
      </div>
    </header>
  );
}
