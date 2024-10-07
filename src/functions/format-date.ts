import { type FormatOptions, format } from "date-fns";
import { ptBR } from "date-fns/locale";

/**
 * Formats a date according to the provided format string and options.
 *
 * @param date - The date to format. It can be a Date object, a timestamp (number), or a string that can be parsed into a date.
 * @param formatStr - The format string to use for formatting the date.
 * @param options - Additional options for formatting the date. If not provided, the default options will be used.
 *
 * @returns A string representing the formatted date.
 **/
export function formatDate(
	date: Date | number | string,
	formatStr: string,
	options?: FormatOptions,
) {
	return format(date, formatStr, {
		locale: ptBR,
		...options,
	});
}
