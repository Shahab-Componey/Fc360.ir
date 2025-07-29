"use client";

import React, {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLButtonElement> {}

export default function Button({children, ...props}: ButtonProps) {
  return (
    <button
      className={`bg-white  min-w-12 py-[0.1rem] px-[0.4rem]  rounded-md self-center text-black transition-all hover:bg-slate-200 active:bg-slate-300 `}
      {...props}
    >
      {children}
    </button>
  );
}
