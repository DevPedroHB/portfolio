import type { User } from "@prisma/client";
import { User2 } from "lucide-react";
import type { ComponentProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface IUserAvatar extends ComponentProps<typeof Avatar> {
	user?: Pick<User, "image" | "name">;
}

export function UserAvatar({ user, ...rest }: IUserAvatar) {
	return (
		<Avatar {...rest}>
			<AvatarImage src={user?.image || ""} alt={user?.name || "User avatar"} />
			<AvatarFallback>
				<User2 className="size-5" />
			</AvatarFallback>
		</Avatar>
	);
}
