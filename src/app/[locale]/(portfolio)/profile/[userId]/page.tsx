import { getProfile } from "@/actions/users/get-profile";
import { auth } from "@/auth";
import { SvglIcon } from "@/components/svgl-icon";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { UserAvatar } from "@/components/user-avatar";
import type { Locales } from "@/constants/locales";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { SettingsDialog } from "./components/settings-dialog";

interface IProfile {
	params: {
		locale: Locales;
		userId: string;
	};
}

export async function generateMetadata({
	params,
}: IProfile): Promise<Metadata> {
	const code = getCurrentLocale();
	const t = await getScopedI18n("metadata");
	const user = await getProfile(params.userId, code);

	return {
		title: t("titles.profile", {
			name: user?.name,
		}),
	};
}

export default async function Profile({ params }: IProfile) {
	const code = getCurrentLocale();
	const session = await auth();
	const user = await getProfile(params.userId, code);

	if (!user) {
		return redirect("/");
	}

	const r = await getScopedI18n("roles");

	return (
		<main className="mx-auto max-w-[calc(60.5rem+3rem)] px-6 min-h-screen grid grid-cols-1 md:grid-cols-profile gap-8 pb-16 pt-8 md:pb-8 md:pt-24">
			<section>
				<Card className="relative">
					<Image
						src="/images/banner.jpg"
						alt={`Banner ${user.name}`}
						width={3893}
						height={2494}
						className="w-full h-[4.5rem] object-cover object-center"
					/>
					<div className="flex flex-col items-center p-4 pt-0 mt-[calc(-.375rem-1.5rem)]">
						<div className="border-2 border-primary rounded-full">
							<UserAvatar
								user={user}
								className="size-[calc(3rem+.75rem)] border-4 border-card"
							/>
						</div>
						<CardTitle>{user.name}</CardTitle>
						<CardDescription>{r(user.role)}</CardDescription>
					</div>
					{user.socialNetworks.length > 0 && (
						<CardFooter className="justify-center p-4 border-t border-border gap-2">
							{user.socialNetworks.map((socialNetwork) => {
								return (
									<SvglIcon
										key={socialNetwork.id}
										icon={{
											url: socialNetwork.url,
											...socialNetwork.icon,
										}}
										className="size-5"
									/>
								);
							})}
						</CardFooter>
					)}
					{session?.user.id === user.id && <SettingsDialog user={user} />}
				</Card>
			</section>
			<section>
				<Card>
					<CardHeader>
						<CardTitle>Informações</CardTitle>
						<CardDescription>Veja as informações do usuário.</CardDescription>
					</CardHeader>
					<CardContent>
						{Object.entries(user).map(
							([key, value]) =>
								value && (
									<div key={key}>
										<CardTitle>{key}</CardTitle>
										<CardDescription>{String(value)}</CardDescription>
									</div>
								),
						)}
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
