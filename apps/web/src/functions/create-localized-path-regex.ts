export function createLocalizedPathRegex(
	locales: readonly string[],
	paths: string[],
) {
	const escapedPaths = paths.map((path) =>
		path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*"),
	);
	const pattern = `^/(?:${locales.join("|")})?(?:${escapedPaths.join("|")})?$`;

	return new RegExp(pattern);
}
