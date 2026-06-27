import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { navItems } from "@/constants/navigation";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Actions from "./NavActions";
import NavLogo from "./NavLogo";
import { Separator } from "@/components/ui/separator";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon-lg">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-72">
        <SheetHeader className="space-y-2.5">
          <NavLogo />
          <div className="mx-auto">
            <Actions />
          </div>
        </SheetHeader>
        <Separator className="mb-5" />
        <nav className="space-y-5 px-5">
          {navItems.map((navItem) => {
            const isActive = pathname === navItem.path;

            return (
              <div key={navItem.path}>
                <SheetClose asChild>
                  <Button
                    className={cn(
                      "w-full rounded-md justify-start",
                      isActive && "text-white bg-primary-gradient",
                    )}
                    variant="secondary"
                    asChild
                  >
                    <Link href={navItem.path}>{navItem.label}</Link>
                  </Button>
                </SheetClose>
              </div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
