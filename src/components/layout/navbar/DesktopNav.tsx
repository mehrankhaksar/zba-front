import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { navItems } from "@/constants/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="absolute left-1/2 -translate-x-1/2 inset-y-0 flex items-center gap-10 whitespace-nowrap text-sm">
      {navItems.map((navItem) => {
        const isActive = pathname === navItem.path;

        return (
          <div
            key={navItem.path}
            className="relative flex flex-col justify-center items-center h-full"
          >
            <Link
              href={navItem.path}
              className={cn(
                "inline-block transition-colors font-medium",
                isActive && "text-primary-gradient",
              )}
            >
              {navItem.label}
            </Link>

            {isActive && (
              <motion.div
                layoutId="navbar-divider"
                transition={{
                  layout: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.5,
                  },
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-8"
              >
                <Image
                  src="/divider-primary.svg"
                  alt="Divider"
                  fill
                  className="object-contain"
                />
              </motion.div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
