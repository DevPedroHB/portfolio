"use client";

import { languages } from "@/constants/locales";
import { usePathname, useRouter } from "@/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Languages } from "lucide-react";

export function ChangeLanguage() {
  const pathname = usePathname();
  const router = useRouter();

  function handleChangeLocale(locale: string) {
    router.push(pathname, {
      locale,
    });
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex gap-1 leading-none transition-colors hover:text-violet-9 dark:hover:text-violetdark-9">
        <Languages className="h-5 w-5" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-mauve-app z-40 grid rounded p-2 shadow-nav"
          sideOffset={5}
        >
          {languages.map((language) => {
            return (
              <DropdownMenu.Item key={language.locale} asChild>
                <button
                  onClick={() => handleChangeLocale(language.locale)}
                  className="rounded px-3 py-1 text-start text-sm font-medium outline-none transition-colors hover:bg-mauve-subtle hover:text-violet-9 dark:hover:text-violetdark-9"
                >
                  {language.label}
                </button>
              </DropdownMenu.Item>
            );
          })}
          <DropdownMenu.Arrow className="fill-mauve-1 dark:fill-mauvedark-1" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
