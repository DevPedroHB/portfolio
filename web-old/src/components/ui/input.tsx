import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const input = tv({
  base: "w-full p-input transition-colors",
  variants: {
    variant: {
      primary: "bg-mauvea-subtle rounded-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface IInput extends ComponentProps<"input">, VariantProps<typeof input> {
  label: string;
}

export function Input({ label, variant, className, id, ...props }: IInput) {
  return (
    <div className={input({ variant, className })}>
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        id={id}
        className="text-mauve-dim w-full bg-transparent outline-none"
        {...props}
      />
    </div>
  );
}
