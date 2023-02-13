import { useTheme } from "next-themes";
import { HeaderContainer } from "./styles";

export function Header() {
  const { theme, setTheme } = useTheme();

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <HeaderContainer>
      <h1>Header Component</h1>
      <button onClick={handleChangeTheme}>Change Theme</button>
    </HeaderContainer>
  );
}
