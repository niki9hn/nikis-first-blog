import posts from "../data/posts.js";
import { Link } from "react-router";
function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Niki&apos;s First Blog
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m Niki.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Welcome to my little corner of the internet, where I share what
            I&apos;m learning, building, and discovering along the way.
          </p>
        </header>

        <section aria-labelledby="posts-heading">
          <h2
            id="posts-heading"
            className="mb-6 text-2xl font-bold tracking-tight"
          >
            Latest posts
          </h2>

          <div className="space-y-5">
            {posts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-400/60"
              >
                <p className="text-sm text-cyan-400">{post.date}</p>

                <h3 className="mt-2 text-xl font-semibold">
                  <Link
                    to={`/posts/${post.slug}`}
                    className="transition hover:text-cyan-400"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {post.description}
                </p>

                <p className="mt-4 text-sm text-slate-400">{post.readTime}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-800 pt-6 text-sm text-slate-400">
          Made with curiosity and a little bit of code.
        </footer>
      </div>
    </main>
  );
}

export default Home;
