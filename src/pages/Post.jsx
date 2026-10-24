function Post() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Niki's First Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Blog post title
        </h1>

        <p className="mt-4 text-slate-400">
          A little introduction to this post.
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-300">
          <p>
            This is where the content of the blog post will go. We will make
            this page display the correct post based on its URL in a later step.
          </p>

          <p>
            For now, we are setting up the structure of the page before
            connecting it to our post data.
          </p>
        </div>
      </article>
    </main>
  );
}

export default Post;
