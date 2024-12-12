import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BackButton } from "@/components/auth/back-button";
import { Header } from "@/components/auth/header";

type CardWrapperProps = {
  children?: React.ReactNode;
  headerLabel: string;
  backButtonLabel?: string;
  backButtonHref?: string;
};

export function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) {
  return (
    <Card className="min-w-[320px]  md:min-w-[400px] shadow-md rounded">
      <CardHeader>
        <Header heading="Habit tracker" label={headerLabel} />
        {backButtonHref && backButtonLabel && (
          <BackButton label={backButtonLabel} href={backButtonHref} />
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
