import { Link } from "react-router"
import { SquareArrowRightExit } from "lucide-react";
import { createPortal } from "react-dom";
import { useState } from "react";
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center bg-black/50">
      <div className="bg-white p-5 rounded-sm">
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

export default function Sidebar({ user , club , navItems }) {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <Modal isOpen={modalState} onClose={() => setModalState(false)}/>
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white md:flex md:flex-col">
        {/* Club */}
        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
            <span className="text-sm font-bold">{club.name[0].toUpperCase()}</span>
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              {club.name}
            </p>
            <p className="text-xs text-slate-400">
              {club.description}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Club
          </p>

          <nav className="space-y-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${index === 0
                      ? "bg-violet-50 font-semibold text-violet-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                    onClick={() => modalState ? setModalState(false) : setModalState(true)}
                >
                  <Icon size={17} strokeWidth={1.8} />
                  {item.label}
                </button>
              );
            })}
            <Link to="/" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition text-slate-500 hover:bg-slate-50 hover:text-slate-900">
              <SquareArrowRightExit size={17} strokeWidth={1.8} />
              Back
            </Link>
          </nav>
        </div>

        {/* Role */}
        <div className="mt-auto border-t border-slate-100 p-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Your role
            </p>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-violet-700 bg-violet-100 p-1 rounded-lg">{ user.role }</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 px-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold">
              {user.name.split(" ").reduce((acc, cur) => acc += cur[0],"")}
            </div>

            <div>
              <p className="text-xs font-semibold">{ user.name }</p>
              <p className="text-[10px] text-slate-400">
                { user.position }
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
