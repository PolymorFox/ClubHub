import { Megaphone } from "lucide-react";

export default function Announcement({
  title,
  description,
  time,
}: {
  title: string,
  description: string,
  time: string,
}) {
  return (
    <div className="flex gap-3 px-6 py-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
        <Megaphone size={15} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-semibold">{title}</p>
          <span className="shrink-0 text-[10px] text-slate-400">
            {time}
          </span>
        </div>

        <p className="mt-1 text-[11px] leading-5 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}
