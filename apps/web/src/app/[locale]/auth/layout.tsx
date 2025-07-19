import type { ReactNode } from "react";

interface IAuthLayout {
	children: ReactNode;
}

export default function AuthLayout({ children }: Readonly<IAuthLayout>) {
	return <div className="p-6 md:p-10 min-h-screen col__center">{children}</div>;
}
