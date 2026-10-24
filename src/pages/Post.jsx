import { useParams, Link } from "react-router";
import posts from "../data/posts.js";

function Post() {
  const { slug } = useParams();

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <h1 className="text-3xl font-bold">Post not found</h1>

        <p className="mt-4 text-slate-400">
          Sorry, we couldn't find that blog post.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block text-cyan-400 hover:text-cyan-300"
        >
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to home
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Niki's First Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 text-slate-400">{post.description}</p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-300">
          <p>The full content of this blog post will be added here soon.</p>
        </div>
      </article>
    </main>
  );
}

export default Post;
