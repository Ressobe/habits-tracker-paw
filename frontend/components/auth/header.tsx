import Link from "next/link";

type HeaderProps = {
  heading: string;
  label: string;
};

export function Header({ label, heading }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center">
      <Link href="/">
        <h1 className="text-3xl font-semibold">{heading}</h1>
      </Link>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
