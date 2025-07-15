import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function ScrollToTop() {
	return (
		<Button
			type="button"
			size="icon"
			data-scroll={true}
			className="right-4 -bottom-1/5 data-[scroll=true]:bottom-20 z-40 fixed transition-all"
		>
			<ArrowUp strokeWidth={3} className="size-5" />
		</Button>
	);
}
