import { Button, type buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";

interface IDownloadAppButtonProps
  extends
    React.ComponentProps<typeof Button>,
    VariantProps<typeof buttonVariants> {}

export default function DownloadAppButton({
  className,
  ...props
}: IDownloadAppButtonProps) {
  return (
    <Button className={cn(className)} {...props}>
      دانلود اپلیکیشن
    </Button>
  );
}
