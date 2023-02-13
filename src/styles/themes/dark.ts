import { createTheme } from "@/styles";
import {
  mauveDark,
  mauveDarkA,
  violetDark,
  violetDarkA,
} from "@radix-ui/colors";

export const darkTheme = createTheme({
  colors: {
    ...mauveDark,
    ...mauveDarkA,
    ...violetDark,
    ...violetDarkA,
  },
});
