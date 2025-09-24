import { Switch } from "../components/ui/switch"
import { useTheme } from "../components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <span className="text-sm">{theme === "dark" ? "Dark" : "Light"}</span>
    </div>
  )
}
