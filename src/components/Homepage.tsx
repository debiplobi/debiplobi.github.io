import type { CollectionEntry } from "astro:content";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

interface HomepageProps {
	recentProjects?: {
		slug: string;
		data: CollectionEntry<"projects">["data"];
	}[];
	recentBlogs?: { slug: string; data: CollectionEntry<"blogs">["data"] }[];
}

const experience = [
	{
		title: "Freelancer",
		subtitle: "Software Engineer",
		meta: "Present",
		current: true,
	},
];

const education = [
	{
		title: "Diploma in Computer Science & Technology",
		subtitle: "Global Institute of Science & Technology, Haldia",
		meta: "76%",
	},
	{
		title: "Higher Secondary (Vocational)",
		subtitle: "Kanaidighi Deshapran Vidyapith",
		meta: "80%",
	},
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
	<p className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-muted-foreground/60 mb-6">
		{children}
	</p>
);

export default function Homepage({
	recentProjects = [],
	recentBlogs = [],
}: HomepageProps) {
	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col items-center pb-24 pt-12 px-6 sm:px-12 selection:bg-primary/20">
			<main className="max-w-3xl w-full flex flex-col gap-28">
				{/* ── Header ─────────────────────────────────────────── */}
				<header className="flex justify-between items-center w-full animate-in fade-in slide-in-from-top-4 duration-700">
					<div className="font-bold tracking-tighter text-2xl">DD.</div>
					<ThemeToggle />
				</header>

				{/* ── Intro ──────────────────────────────────────────── */}
				<section className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
					<div className="space-y-3">
						<h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
							Hi, I'm <span className="text-primary/90">Debiprasad Das</span>
						</h1>
						<h2 className="text-2xl sm:text-3xl text-muted-foreground font-medium">
							Full-Stack Developer
						</h2>
					</div>
					<p className="text-lg sm:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl">
						I'm a full-stack developer who enjoys solving logical and real-world
						problems. I build websites, APIs, command-line tools, scripts, CLI
						games, and web scrapers. My primary interests lie in Linux,
						low-level programming, and backend development, and I actively
						contribute to open-source projects.
					</p>
					{/* CTA buttons — clearly pressable with active scale feedback */}
					<div className="flex flex-wrap gap-3 pt-2">
						<a href="/projects">
							<Button
								size="lg"
								className="rounded-full cursor-pointer shadow-sm hover:shadow-md active:scale-95 transition-all"
							>
								View Work
							</Button>
						</a>
						<a href="mailto:debiprasaddas@proton.me">
							<Button
								size="lg"
								variant="outline"
								className="rounded-full cursor-pointer hover:bg-muted/60 active:scale-95 transition-all"
							>
								Get in touch
							</Button>
						</a>
					</div>
				</section>

				{/* ── Tools ──────────────────────────────────────────── */}
				{/* Static display — cursor:default, no hover, clearly informational */}
				<section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 fill-mode-both">
					<SectionLabel>Stack</SectionLabel>
					<div className="flex flex-wrap gap-2 sm:gap-3">
						{[
							"Node.js",
							"Bun",
							"Python",
							"Rust",
							"TypeScript",
							"React",
							"Next.JS",
							"Docker",
							"CI/CD",
							"Git",
							"Linux",
							"Hono",
							"Flask",
						].map((tool) => (
							<span
								key={tool}
								className="px-4 py-2 bg-muted/60 text-muted-foreground cursor-default rounded-md text-base font-medium border border-border/40 select-none"
							>
								{tool}
							</span>
						))}
					</div>
				</section>

				{/* ── Recent Blogs ───────────────────────────────────── */}
				{/* Style: editorial numbered list — each row is a navigable link */}
				<section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 fill-mode-both">
					<div className="flex items-end justify-between mb-6">
						<div>
							<SectionLabel>Writing</SectionLabel>
							<h3 className="text-3xl font-semibold tracking-tight leading-none">
								Recent Blogs
							</h3>
						</div>
						<a
							href="/blogs"
							className="inline-flex items-center gap-1.5 text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer pb-0.5"
						>
							All posts
							<HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
						</a>
					</div>

					<div className="rounded-xl border border-border/50 overflow-hidden divide-y divide-border/40">
						{recentBlogs.length > 0 ? (
							recentBlogs.map((blog, i) => (
								<a
									key={blog.slug}
									href={`/blogs/${blog.slug}`}
									className="group flex items-center gap-5 px-6 py-5 bg-card hover:bg-accent/50 active:bg-accent transition-colors duration-150 cursor-pointer"
								>
									<span className="text-sm font-bold font-mono text-muted-foreground/40 w-6 shrink-0 select-none">
										{String(i + 1).padStart(2, "0")}
									</span>
									<div className="flex-1 min-w-0 space-y-1">
										<h4 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors duration-150 truncate">
											{blog.data.title}
										</h4>
										<p className="text-sm text-muted-foreground/70 truncate">
											{blog.data.description}
										</p>
									</div>
									<div className="flex items-center gap-4 shrink-0">
										<time className="text-sm text-muted-foreground/60 hidden sm:block">
											{new Date(blog.data.date).toLocaleDateString("en-us", {
												year: "numeric",
												month: "short",
												day: "numeric",
											})}
										</time>
										<HugeiconsIcon
											icon={ArrowRight01Icon}
											className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-150"
										/>
									</div>
								</a>
							))
						) : (
							<p className="text-muted-foreground text-base px-6 py-5">
								No blogs yet.
							</p>
						)}
					</div>
				</section>

				{/* ── Recent Projects ────────────────────────────────── */}
				{/* Style: 2-col cards with lift shadow on hover — clearly clickable */}
				<section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both">
					<div className="flex items-end justify-between mb-6">
						<div>
							<SectionLabel>Work</SectionLabel>
							<h3 className="text-3xl font-semibold tracking-tight leading-none">
								Recent Projects
							</h3>
						</div>
						<a
							href="/projects"
							className="inline-flex items-center gap-1.5 text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer pb-0.5"
						>
							All projects
							<HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
						</a>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{recentProjects.length > 0 ? (
							recentProjects.map((project) => (
								<a
									key={project.slug}
									href={`/projects/${project.slug}`}
									className="group flex flex-col gap-4 rounded-xl border border-border/50 bg-card p-6 cursor-pointer hover:border-border hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.07)] active:scale-[0.99] transition-all duration-200"
								>
									<div className="flex items-start justify-between gap-3">
										<h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-150 leading-snug">
											{project.data.title}
										</h4>
										<span className="text-xs font-mono font-bold text-muted-foreground/80 bg-muted px-2 py-0.5 rounded shrink-0">
											{project.data.year}
										</span>
									</div>
									<p className="text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed">
										{project.data.description}
									</p>
									<span className="mt-auto inline-flex items-center gap-1.5 text-sm text-muted-foreground/50 group-hover:text-primary transition-colors duration-150">
										View project
										<HugeiconsIcon
											icon={ArrowRight01Icon}
											className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150"
										/>
									</span>
								</a>
							))
						) : (
							<p className="text-muted-foreground text-base col-span-2">
								No projects found.
							</p>
						)}
					</div>
				</section>

				{/* ── Experience & Education ─────────────────────────── */}
				{/* Style: flat muted rows — cursor:default, not interactive */}
				<section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-both">
					<SectionLabel>Background</SectionLabel>
					<h3 className="text-3xl font-semibold tracking-tight mb-10">
						Experience & Education
					</h3>

					<div className="space-y-12">
						<div>
							<p className="text-sm font-mono font-bold text-muted-foreground/40 uppercase tracking-[0.2em] mb-4">
								Work
							</p>
							<div className="space-y-3">
								{experience.map((item) => (
									<div
										key={item.title}
										className="flex items-center justify-between rounded-xl bg-muted/40 border border-border/30 px-5 py-4 cursor-default select-none"
									>
										<div className="space-y-1">
											<div className="flex items-center gap-3">
												<span className="font-semibold text-base">
													{item.title}
												</span>
												{item.current && (
													<span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
														<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
														Active
													</span>
												)}
											</div>
											<p className="text-sm text-muted-foreground/80">
												{item.subtitle}
											</p>
										</div>
										<span className="text-xs font-mono font-bold text-muted-foreground/50 shrink-0">
											{item.meta}
										</span>
									</div>
								))}
							</div>
						</div>

						<div>
							<p className="text-sm font-mono font-bold text-muted-foreground/40 uppercase tracking-[0.2em] mb-4">
								Education
							</p>
							<div className="space-y-3">
								{education.map((item) => (
									<div
										key={item.title}
										className="flex items-center justify-between rounded-xl bg-muted/40 border border-border/30 px-5 py-4 cursor-default select-none"
									>
										<div className="space-y-1 min-w-0 pr-6">
											<span className="font-semibold text-base block">
												{item.title}
											</span>
											<p className="text-sm text-muted-foreground/80 truncate">
												{item.subtitle}
											</p>
										</div>
										<span className="text-xs font-mono font-bold text-muted-foreground/50 shrink-0">
											{item.meta}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ── Footer ─────────────────────────────────────────── */}
				<footer className="pt-12 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-6 animate-in fade-in duration-1000 delay-300 fill-mode-both">
					<p className="text-sm font-medium text-muted-foreground/60">
						&copy; {new Date().getFullYear()} Debiprasad Das
					</p>
					<div className="flex items-center gap-2">
						{[
							{ label: "GitHub", href: "https://github.com/debiplobi" },
							{
								label: "LinkedIn",
								href: "https://www.linkedin.com/in/debiprasaddasxyz",
							},
							{ label: "Email", href: "mailto:debiprasaddas@proton.me" },
						].map(({ label, href }) => (
							<a
								key={label}
								href={href}
								target={href.startsWith("http") ? "_blank" : undefined}
								rel={
									href.startsWith("http") ? "noopener noreferrer" : undefined
								}
								className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 active:bg-muted transition-colors cursor-pointer"
							>
								{label}
							</a>
						))}
					</div>
				</footer>
			</main>
		</div>
	);
}
