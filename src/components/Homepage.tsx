import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { CollectionEntry } from "astro:content";

interface HomepageProps {
  recentProjects?: { slug: string; data: CollectionEntry<'projects'>['data'] }[];
  recentBlogs?: { slug: string; data: CollectionEntry<'blogs'>['data'] }[];
}

export default function Homepage({ recentProjects = [], recentBlogs = [] }: HomepageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center pb-20 pt-8 px-6 sm:px-12 selection:bg-primary/20">
      <main className="max-w-3xl w-full flex flex-col gap-24">
        {/* Header Section */}
        <header className="flex justify-between items-center w-full animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="font-bold tracking-tight text-xl">DD.</div>
          <ThemeToggle />
        </header>

        {/* Intro Section */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Hi, I'm <span className="text-primary/90">Debiprasad Das</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer
            </h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed max-w-2xl">
            I’m a full-stack developer who enjoys solving logical and real-world problems. I build websites, APIs, command-line tools, scripts, games, and web scrapers. My primary interests lie in Linux, low-level programming, and backend development, and I actively contribute to open-source projects.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full shadow-sm hover:shadow-md transition-[background-color,box-shadow,border-color]">
              View Work
            </Button>
            <Button size="lg" variant="outline" className="rounded-full hover:bg-muted/50 transition-[background-color,box-shadow,border-color]">
              Get in touch
            </Button>
          </div>
        </section>

        {/* Tools Section */}
        <section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 fill-mode-both space-y-6">
          <h3 className="text-xl font-semibold tracking-tight">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {["Node.js", "Bun", "Python", "Rust", "TypeScript", "React", "Next.JS", "Docker", "CI/CD", "Git", "Linux", "Astro", "Tailwind CSS"].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-sm cursor-default transition-[background-color,color,box-shadow] duration-300 rounded-full text-sm font-medium border border-border/50">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Experience / Projects Section */}
        <section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 fill-mode-both space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight">Recent Projects</h3>
            <a href="/projects">
              <Button variant="link" className="text-muted-foreground hover:text-foreground gap-1.5 px-0">
                View all <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {recentProjects.length > 0 ? (
              recentProjects.map((project) => (
                <a key={project.slug} href={`/projects/${project.slug}`} className="group relative rounded-2xl border border-border/50 bg-card p-6 overflow-hidden hover:border-border/80 hover:shadow-sm transition-[background-color,box-shadow,border-color] duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg group-hover:text-primary">{project.data.title}</h4>
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">{project.data.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground/80 line-clamp-2">
                      {project.data.description}
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-muted-foreground text-sm col-span-2">No projects found.</p>
            )}
          </div>
        </section>

        {/* Blogs Section */}
        <section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-both space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight">Recent Blogs</h3>
            <a href="/blogs">
              <Button variant="link" className="text-muted-foreground hover:text-foreground gap-1.5 px-0">
                View all <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog) => (
                <a key={blog.slug} href={`/blogs/${blog.slug}`} className="group relative rounded-2xl border border-border/50 bg-card p-6 overflow-hidden hover:border-border/80 hover:shadow-sm transition-[background-color,box-shadow,border-color] duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 space-y-1">
                    <h4 className="font-semibold text-lg group-hover:text-primary">{blog.data.title}</h4>
                    <p className="text-sm text-muted-foreground/80 line-clamp-1">
                      {blog.data.description}
                    </p>
                  </div>
                  <span className="relative z-10 text-xs text-muted-foreground whitespace-nowrap">
                    {new Date(blog.data.date).toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </a>
              ))
            ) : (
              <p className="text-muted-foreground text-sm">No blogs found.</p>
            )}
          </div>
        </section>

        {/* Education & Experience Section */}
        <section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-both space-y-6 mt-12">
          <h3 className="text-2xl font-semibold tracking-tight">Experience & Education</h3>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/50 bg-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">Freelancer</h4>
                <p className="text-sm text-muted-foreground/80">Software Engineer</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">Present</span>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">Diploma in Computer Science & Technology</h4>
                <p className="text-sm text-muted-foreground/80">Global Institute of Science & Technology, Haldia</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">76%</span>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">Higher Secondary (Vocational)</h4>
                <p className="text-sm text-muted-foreground/80">Kanaidighi Deshapran Vidyapith</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">80%</span>
            </div>
          </div>
        </section>

        {/* Footer / Social Links */}
        <footer className="pt-12 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-1000 delay-300 fill-mode-both mt-12">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Debiprasad Das. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href="https://github.com/debiprasaddas" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                GitHub
              </Button>
            </a>
            <a href="mailto:debiprasaddas@proton.me">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Email
              </Button>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
