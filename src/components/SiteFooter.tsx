export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif">© {new Date().getFullYear()} Jean-Christophe Raymond-Bertrand</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a className="hover:text-foreground" href="mailto:jcrb@vt.edu">jcrb@vt.edu</a>
            <a className="hover:text-foreground" href="https://www.linkedin.com/in/jcrayb" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-foreground" href="https://github.com/jcrayb" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-foreground" href="https://scholar.google.com/" target="_blank" rel="noreferrer">Google Scholar</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
