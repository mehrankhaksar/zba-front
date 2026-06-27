import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/">
      <div className="relative h-20 w-full shrink-0">
        <Image
          src="/logo-1.svg"
          alt="Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>
  );
}
