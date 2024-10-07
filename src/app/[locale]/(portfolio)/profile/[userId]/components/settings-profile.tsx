import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";
import type { UserDetails } from "@/types/user-details";
import { SettingsUserAboutForm } from "./settings-user-about-form";
import { SettingsUserForm } from "./settings-user-form";

interface ISettingsProfile {
	user: UserDetails;
}

export function SettingsProfile({ user }: ISettingsProfile) {
	return (
		<TabsContent value="profile">
			<SettingsUserForm user={user} />
			<Separator />
			<SettingsUserAboutForm />
		</TabsContent>
	);
}
