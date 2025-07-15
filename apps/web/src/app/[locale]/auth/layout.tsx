import type { ReactNode } from "react";

interface IAuthLayout {
	children: ReactNode;
}

export default function AuthLayout({ children }: Readonly<IAuthLayout>) {
	return <>{children}</>;
}
