interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="space-y-1">
      <p className="text-3xl font-bold text-white">
        {value}
      </p>

      <p className="text-sm text-zinc-400">
        {label}
      </p>
    </div>
  );
}