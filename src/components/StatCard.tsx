import type {ReactNode} from "react"

export default function StatCard({
  label,
  value,
  icon: Icon,
}: {
    label: string,
    value: string,
    icon: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400">
            {label}
          </p>

          <p className="mt-2 text-2xl font-bold tracking-tight">
            {value}
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
          <Icon size={17} />
        </div>
      </div>
    </div>
  );
}
