"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { settingsTabs } from "@/constants/settings-tab";
import { useScopedI18n } from "@/locales/client";
import type { UserDetails } from "@/types/user-details";
import { Settings, UserPen } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import { SettingsProfile } from "./settings-profile";

interface ISettingsDialog {
	user: UserDetails;
}

export function SettingsDialog({ user }: ISettingsDialog) {
	const t = useScopedI18n("settings");
	const [setting, setSetting] = useQueryState(
		"settings",
		parseAsString.withDefault(settingsTabs[0]),
	);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					type="button"
					variant="ghost"
					size="icon"
					className="absolute top-2 right-2 text-primary-foreground hover:bg-accent/20 hover:text-primary-foreground"
				>
					<Settings className="size-5" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="flex items-center gap-1">
						<UserPen className="size-5 text-primary" />
						{t("title")}
					</DialogTitle>
					<DialogDescription>{t("description")}</DialogDescription>
				</DialogHeader>
				<Tabs value={setting} onValueChange={setSetting}>
					<TabsList>
						{settingsTabs.map((setting) => {
							return (
								<TabsTrigger key={setting} value={setting}>
									{t(`tabs.${setting}.label`)}
								</TabsTrigger>
							);
						})}
					</TabsList>
					<SettingsProfile user={user} />
				</Tabs>
			</DialogContent>
		</Dialog>
	);
}
