import pkg from "../../package.json";

export function formatKeyStorage(key: string) {
	const projectName = pkg.name.replace("@", "");

	return `@${projectName}:${pkg.version}:${key}`;
}
