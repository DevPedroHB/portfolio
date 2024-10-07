"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/functions/cn";
import { useCurrentLocale } from "@/locales/client";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { enUS, ptBR } from "date-fns/locale";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	const locale = useCurrentLocale();

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			captionLayout="dropdown"
			className={cn("p-3", className)}
			classNames={{
				months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
				month: "space-y-1",
				caption: "flex gap-1 justify-between pt-1 relative items-center",
				caption_label: "text-sm font-medium text-nowrap",
				caption_dropdowns: "flex justify-center items-center gap-1",
				vhidden: "hidden",
				nav: "flex items-center gap-1",
				nav_button: cn(
					buttonVariants({ variant: "outline" }),
					"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
				),
				table: "w-fit border-collapse space-y-1 mx-auto mt-0",
				head_row: "flex",
				head_cell:
					"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
				row: "flex w-full mt-2",
				cell: cn(
					"relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
					props.mode === "range"
						? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
						: "[&:has([aria-selected])]:rounded-md",
				),
				day: cn(
					buttonVariants({ variant: "ghost" }),
					"h-8 w-8 p-0 font-normal aria-selected:opacity-100",
				),
				day_range_start: "day-range-start",
				day_range_end: "day-range-end",
				day_selected:
					"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
				day_today: "bg-accent text-accent-foreground",
				day_outside:
					"day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
				day_disabled: "text-muted-foreground opacity-50",
				day_range_middle:
					"aria-selected:bg-accent aria-selected:text-accent-foreground",
				day_hidden: "invisible",
				...classNames,
			}}
			components={{
				Dropdown: ({ value, onChange, children, ...props }) => {
					const options = React.Children.toArray(
						children,
					) as React.ReactElement<React.HTMLProps<HTMLOptionElement>>[];
					const selected = options.find((child) => child.props.value === value);
					const handleChange = (value: string) => {
						const changeEvent = {
							target: { value },
						} as React.ChangeEvent<HTMLSelectElement>;
						onChange?.(changeEvent);
					};
					return (
						<Select
							value={value?.toString()}
							onValueChange={(value) => {
								handleChange(value);
							}}
						>
							<SelectTrigger className="pr-1.5 focus:ring-0">
								<SelectValue>{selected?.props?.children}</SelectValue>
							</SelectTrigger>
							<SelectContent position="popper">
								{options.map((option, id: number) => (
									<SelectItem
										key={`${option.props.value}-${id}`}
										value={option.props.value?.toString() ?? ""}
									>
										{option.props.children}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					);
				},
				IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
				IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
			}}
			locale={locale === "pt" ? ptBR : enUS}
			{...props}
		/>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };
