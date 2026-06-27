import DownloadAppButton from "@/components/DownloadAppButton";
import { Button } from "@/components/ui/button";
import { Phone, Search } from "lucide-react";

export default function NavActions() {
  return (
    <div className="flex items-center gap-4">
      <DownloadAppButton />
      <Button variant="secondary" size="icon-lg">
        <Phone />
      </Button>
      <Button variant="secondary" size="icon-lg">
        <Search />
      </Button>
    </div>
  );
}
