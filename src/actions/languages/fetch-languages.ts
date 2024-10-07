"use server";

import { prisma } from "@/libs/prisma";

export async function fetchLanguages() {
	const languages = await prisma.language.findMany();

	return languages;
}
