import { LinkedIn } from "@ridemountainpig/svgl-react";
import type { ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function LinkedInIcon(props: ComponentProps<"svg">) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<LinkedIn {...props} />
			</TooltipTrigger>
			<TooltipContent>LinkedIn</TooltipContent>
		</Tooltip>
	);
}
