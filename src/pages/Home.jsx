import { useState } from "react";
import { Link } from "react-router";
import posts from "../data/posts.js";

function Home() {
  const [isDark, setIsDark] = useState(true);

  const pageTheme = isDark
    ? "bg-slate-950 text-white"
    : "bg-slate-100 text-slate-900";

  const cardTheme = isDark
    ? "border-slate-800 bg-slate-900"
    : "border-slate-200 bg-white";

  const mutedText = isDark ? "text-slate-400" : "text-slate-600";

  const headingText = isDark ? "text-white" : "text-slate-900";

  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <main className={`min-h-screen px-6 py-8 sm:px-8 ${pageTheme}`}>
      <div className="mx-auto max-w-6xl">

        {/* Navbar */}
        <nav className="mb-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold tracking-tight">
            Niki's Blog
          </Link>
          
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className={`hidden text-sm transition hover:text-cyan-400 sm:block ${mutedText}`}
            >
              About
            </a>

            <a
              href="#latest-posts"
              className={`hidden text-sm transition hover:text-cyan-400 sm:block ${mutedText}`}
            >
              Blog
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
              aria-label="Toggle color theme"
            >
              {isDark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </nav>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Sidebar */}
          <aside id="about" className="space-y-6">

            <div className={`rounded-2xl border p-6 ${cardTheme}`}>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                About me
              </p>

              <h2 className={`mt-4 text-2xl font-bold ${headingText}`}>
                Hi, I'm Niki.
              </h2>

              <p className={`mt-4 text-sm leading-7 ${mutedText}`}>
                I'm learning frontend development and building my first blog.
                This is where I share my journey, ideas, and everything I learn
                along the way.``
              </p>
            </div>

            <div className={`rounded-2xl border p-6 ${cardTheme}`}>
              <h2 className={`text-lg font-bold ${headingText}`}>
                Currently learning
              </h2>

              <ul className={`mt-4 space-y-3 text-sm ${mutedText}`}>
                <li>JavaScript</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Frontend development</li>
              </ul>
            </div>

          </aside>

          {/* Main content */}
          <section className="lg:col-span-2">

            {/* Intro */}
            <header className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Welcome to my little corner
              </p>

              <h1 className={`mt-4 text-4xl font-bold tracking-tight sm:text-6xl ${headingText}`}>
                Hi, I'm Niki.
              </h1>

              <p className={`mt-6 max-w-2xl text-lg leading-8 ${mutedText}`}>
                Welcome to my little corner of the internet, where I share
                what I'm learning, building, and discovering along the way.
              </p>
            </header>

            {/* Latest posts */}
            <section id="latest-posts" aria-labelledby="posts-heading">
              <div className="mb-6 flex items-center justify-between">
                <h2
                  id="posts-heading"
                  className={`text-2xl font-bold tracking-tight ${headingText}`}
                >
                  Latest posts
                </h2>

                <span className={`text-sm ${mutedText}`}>
                  {posts.length} posts
                </span>
              </div>

              <div className="space-y-5">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className={`rounded-2xl border p-6 transition hover:border-cyan-400/60 ${cardTheme}`}
                  >
                    <p className="text-sm text-cyan-400">
                      {post.date}
                    </p>

                    <h3 className={`mt-2 text-xl font-semibold ${headingText}`}>
                      <Link
                        to={`/posts/${post.slug}`}
                        className="transition hover:text-cyan-400"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className={`mt-3 leading-7 ${mutedText}`}>
                      {post.description}
                    </p>

                    <p className={`mt-4 text-sm ${mutedText}`}>
                      {post.readTime}
                    </p>
                  </article>
                ))}
              </div>
            </section>

          </section>
        </div>

        {/* Footer */}
        <footer className={`mt-16 border-t pt-6 text-sm ${mutedText} ${
          isDark ? "border-slate-800" : "border-slate-300"
        }`}>
          Made with curiosity and a little bit of code.
        </footer>

      </div>
    </main>
  );
}

export default Home;