import pkg from "../../package.json";

const rfc6265Regex = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

export function formatKeyStorage(key: string): string {
	const rawKey = `${pkg.name}.${pkg.version.replace(/\./g, "")}.${key}`
		.replace(/@/g, "")
		.replace(/\//g, "-");

	if (!rfc6265Regex.test(rawKey)) {
		throw new TypeError(
			`Invalid storage key. The generated key "${rawKey}" contains disallowed characters according to RFC 6265.`,
		);
	}

	return rawKey;
}
