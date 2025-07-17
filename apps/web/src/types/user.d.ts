export type User = {
	id: string;
	name: string | null;
	email: string;
	passwordHash: string | null;
	avatarUrl: string | null;
	emailVerifiedAt: Date | null;
	createdAt: Date;
	updatedAt: Date | null;
};
