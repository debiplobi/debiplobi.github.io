import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Moon02Icon,
	Sun01Icon,
	LaptopProgrammingIcon,
} from "@hugeicons/core-free-icons";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>("system");

	useEffect(() => {
		// Sync with the inline script in Layout.astro
		const savedTheme =
			typeof localStorage !== "undefined"
				? (localStorage.getItem("theme") as Theme | null)
				: null;
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		if (theme === "system") {
			localStorage.removeItem("theme");
			const isSystemDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			document.documentElement.classList[isSystemDark ? "add" : "remove"](
				"dark",
			);
		} else {
			localStorage.setItem("theme", theme);
			document.documentElement.classList[theme === "dark" ? "add" : "remove"](
				"dark",
			);
		}
	}, [theme]);

	return (
		<div className="flex items-center gap-1 border border-border/50 rounded-full p-1 bg-card/50 backdrop-blur-md shadow-sm">
			<button
				onClick={() => setTheme("light")}
				className={`p-2 rounded-full transition-[background-color,box-shadow] duration-300 ${
					theme === "light"
						? "bg-background shadow-sm text-primary"
						: "text-muted-foreground hover:text-foreground hover:bg-muted/50"
				}`}
				aria-label="Light theme"
			>
				<HugeiconsIcon icon={Sun01Icon} className="w-4 h-4" />
			</button>
			<button
				onClick={() => setTheme("system")}
				className={`p-2 rounded-full transition-[background-color,box-shadow] duration-300 ${
					theme === "system"
						? "bg-background shadow-sm text-primary"
						: "text-muted-foreground hover:text-foreground hover:bg-muted/50"
				}`}
				aria-label="System theme"
			>
				<HugeiconsIcon icon={LaptopProgrammingIcon} className="w-4 h-4" />
			</button>
			<button
				onClick={() => setTheme("dark")}
				className={`p-2 rounded-full transition-[background-color,box-shadow] duration-300 ${
					theme === "dark"
						? "bg-background shadow-sm text-primary"
						: "text-muted-foreground hover:text-foreground hover:bg-muted/50"
				}`}
				aria-label="Dark theme"
			>
				<HugeiconsIcon icon={Moon02Icon} className="w-4 h-4" />
			</button>
		</div>
	);
}
