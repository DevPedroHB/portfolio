import { cn } from "@/functions/cn";
import Image from "next/image";
import type { ComponentProps } from "react";

interface IAuthBanner extends ComponentProps<typeof Image> {}

export function AuthBanner({ className, ...props }: IAuthBanner) {
	return (
		<div className="hidden md:block relative bg-muted">
			<Image
				className={cn("absolute inset-0 w-full h-full object-cover", className)}
				{...props}
			/>
		</div>
	);
}
