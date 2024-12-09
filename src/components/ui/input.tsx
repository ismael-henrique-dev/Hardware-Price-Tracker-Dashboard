import { ComponentProps } from "react"
import clsx from "clsx"

type InputProps = ComponentProps<"input"> & {
  variant?: "minimalist" | "outline"
}

export function Input({ variant = "outline", ...props }: InputProps) {
  return (
    <div
      className={clsx("flex-1 rounded-3xl p-2", {
        "border border-slate-300 bg-transparent rounded-xl": variant === "outline",
        "border border-zinc-300 rounded-xl": variant === "minimalist",
      })}
    >
      <input {...props} className="flex-1 w-full outline-none" />
    </div>
  )
}
