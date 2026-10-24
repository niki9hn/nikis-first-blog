function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Niki's First Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Learning React, one step at a time.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Welcome to my blog, where I share what I'm learning and building.
        </p>

        <button className="mt-8 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
          Tailwind is working!
        </button>
      </div>
    </main>
  );
}

export default App;

// function App () {
//   return (
//     <main>
//       <h1>Hi, This is My First Project :)</h1>
//       <p>welcome to my blog</p>
//     </main>
//   )
// }
// export default App
