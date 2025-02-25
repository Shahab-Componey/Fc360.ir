"use client";
export default function Button({event, children}: any) {
  return (
    <button
      className="bg-white min-w-12 py-[0.1rem] px-[0.4rem]  rounded-md self-center text-black transition-all hover:bg-slate-200 active:bg-slate-300 "
      onClick={event}
    >
      {children}
    </button>
  );
}
