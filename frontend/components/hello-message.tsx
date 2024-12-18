type HelloMessageProps = {
  name: string;
};

export function HelloMessage({ name }: HelloMessageProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">Hello {name}</h1>
      <span className="text-muted-foreground text-sm">
        Checkout your todays habits
      </span>
    </div>
  );
}
