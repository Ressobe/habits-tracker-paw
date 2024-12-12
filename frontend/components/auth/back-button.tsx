import Link from "next/link";
import { Button } from "@/components/ui/button";

type BackButtonProps = {
  label: string;
  href: string;
};

export function BackButton({ label, href }: BackButtonProps) {
  return (
    <Button
      variant="link"
      className="font-normal w-full text-slate-400"
      size="sm"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
