import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

interface Tabela {
	tablename: string;
}

async function clearDatabase() {
	const tabelas: Tabela[] = await prismaClient.$queryRaw`
  SELECT tablename
  FROM pg_tables
  WHERE schemaname = 'public';
  `;

	for (const tabela of tabelas) {
		await prismaClient.$queryRawUnsafe(`
      TRUNCATE TABLE "${tabela.tablename}" RESTART IDENTITY CASCADE;
    `);
	}
}

async function seed() {
	await clearDatabase();

	await prismaClient.language.createMany({
		data: [
			{
				name: "Português",
				code: "pt",
			},
			{
				name: "English",
				code: "en",
			},
		],
	});
}

seed()
	.then(async () => {
		await prismaClient.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);

		await prismaClient.$disconnect();

		process.exit(1);
	});
