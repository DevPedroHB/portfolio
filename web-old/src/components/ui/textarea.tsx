import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const textarea = tv({
  base: "w-full p-input",
  variants: {
    variant: {
      primary: "bg-mauve-subtle rounded-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ITextarea
  extends ComponentProps<"textarea">,
    VariantProps<typeof textarea> {
  label: string;
}

export function Textarea({
  label,
  variant,
  className,
  id,
  ...props
}: ITextarea) {
  return (
    <div className={textarea({ variant, className })}>
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <textarea
        id={id}
        className="text-mauve-dim w-full bg-transparent outline-none"
        {...props}
      />
    </div>
  );
}
