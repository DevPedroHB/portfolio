import type { User } from "@portfolio/db";
import "next-auth";

declare module "next-auth" {
	interface Session {
		user: User;
	}
}
