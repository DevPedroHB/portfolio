import { cn } from "@/functions/cn";
import Image from "next/image";
import type { ComponentProps } from "react";

interface IAuthBanner extends ComponentProps<typeof Image> {}

export function AuthBanner({ className, ...props }: IAuthBanner) {
	return (
		<div className="hidden md:block relative bg-muted">
			<Image
				className={cn(
					"absolute inset-0 dark:brightness-[0.2] dark:grayscale w-full h-full object-cover",
					className,
				)}
				{...props}
			/>
		</div>
	);
}
