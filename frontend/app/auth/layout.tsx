export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center my-12">
      {children}
    </main>
  );
}
