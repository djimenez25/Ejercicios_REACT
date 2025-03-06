import { useTheme } from "../hooks/useTheme";

export function HookPersonalizado6() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Oscuro" : "Claro"}
      </button>
    </>
  );
}
