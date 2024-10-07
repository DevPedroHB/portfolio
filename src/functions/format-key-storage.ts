import packageJson from "../../package.json";

/**
 * Formats a key for storage by prepending the package name and version.
 *
 * @param key - The key to be formatted.
 *
 * @returns A string in the format '@<package_name>:<package_version>:<key>'.
 **/
export function formatKeyStorage(key: string) {
	return `@${packageJson.name}:${packageJson.version}:${key}`;
}
