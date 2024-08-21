"use client";

import { themes } from "@/constants/themes";
import { SunMoon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ChangeTheme() {
  const t = useTranslations("themes");
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SunMoon className="size-5 transition-all hover:text-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((theme) => {
            return (
              <DropdownMenuRadioItem key={theme} value={theme}>
                {t(theme)}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
