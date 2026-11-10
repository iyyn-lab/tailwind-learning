export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-6xl space-y-12">

        {/* PAGE HEADER */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-700">
            CSS Effects Playground
          </h1>
          <p className="mt-3 text-gray-600">
            Explore transitions, transforms and animations using Tailwind CSS.
          </p>
        </header>

        {/* 1. CSS TRANSITIONS */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">1. CSS Transitions</h2>
          <p className="mt-2 text-gray-600">
            Transitions make CSS property changes happen smoothly over time.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors duration-500 hover:bg-purple-600">
              Background Transition
            </button>

            <button className="rounded-lg bg-green-600 px-6 py-3 text-white transition-transform duration-500 hover:scale-110">
              Scale Transition
            </button>

            <button className="rounded-lg bg-orange-500 px-6 py-3 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              Multiple Transitions
            </button>
          </div>
        </section>

        {/* 2. CSS TRANSFORMS */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">2. CSS Transforms</h2>
          <p className="mt-2 text-gray-600">
            Transforms change an element's position, size or rotation.
          </p>

          <div className="mt-8 flex flex-wrap justify-around gap-10">
            <div className="text-center">
              <div className="size-24 rounded-xl bg-blue-500 transition-transform duration-300 hover:translate-x-5" />
              <p className="mt-4">Translate</p>
            </div>

            <div className="text-center">
              <div className="size-24 rounded-xl bg-green-500 transition-transform duration-300 hover:rotate-45" />
              <p className="mt-4">Rotate</p>
            </div>

            <div className="text-center">
              <div className="size-24 rounded-xl bg-purple-500 transition-transform duration-300 hover:scale-125" />
              <p className="mt-4">Scale</p>
            </div>

            <div className="text-center">
              <div className="size-24 rounded-xl bg-orange-500 transition-transform duration-300 hover:skew-x-12" />
              <p className="mt-4">Skew</p>
            </div>
          </div>
        </section>

        {/* 3. 2D AND 3D TRANSFORMS */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">3. 2D and 3D Transforms</h2>
          <p className="mt-2 text-gray-600">
            2D transforms work on the X and Y axes. 3D transforms also use the Z axis.
          </p>

          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            <div className="text-center">
              <h3 className="mb-6 font-semibold">2D Rotation</h3>
              <div className="mx-auto size-28 rounded-xl bg-blue-500 transition-transform duration-500 hover:rotate-45" />
              <p className="mt-4 text-sm text-gray-500">
                Hover to rotate on the 2D plane.
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-6 font-semibold">3D Rotation</h3>
              <div className="mx-auto [perspective:700px]">
                <div className="mx-auto size-28 rounded-xl bg-purple-500 transition-transform duration-500 hover:rotate-y-45 hover:rotate-x-12">
                  <div className="flex size-full items-center justify-center font-bold text-white">
                    3D
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Hover to rotate around 3D axes.
              </p>
            </div>
          </div>
        </section>

        {/* 4. KEYFRAMES */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">4. Keyframes</h2>
          <p className="mt-2 text-gray-600">
            Keyframes define the stages of an animation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-around gap-10">
            <div className="text-center">
              <div className="size-20 rounded-xl bg-blue-500 animate-bounce" />
              <p className="mt-4">Bounce</p>
            </div>

            <div className="text-center">
              <div className="size-20 rounded-xl bg-green-500 animate-pulse" />
              <p className="mt-4">Pulse</p>
            </div>

            <div className="text-center">
              <div className="size-20 rounded-xl bg-purple-500 animate-wiggle" />
              <p className="mt-4">Custom Wiggle</p>
            </div>
          </div>
        </section>

        {/* 5. ANIMATION PROPERTIES */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">5. Animation Properties</h2>
          <p className="mt-2 text-gray-600">
            Animation properties control duration, delay, iteration and direction.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="text-center">
              <div className="mx-auto size-16 rounded-lg bg-blue-500 animate-spin [animation-duration:3s]" />
              <p className="mt-4">Duration: 3 seconds</p>
            </div>

            <div className="text-center">
              <div className="mx-auto size-16 rounded-lg bg-green-500 animate-bounce [animation-delay:1s]" />
              <p className="mt-4">Delay: 1 second</p>
            </div>

            <div className="text-center">
              <div className="mx-auto size-16 rounded-lg bg-purple-500 animate-pulse [animation-iteration-count:3]" />
              <p className="mt-4">Iteration: 3 times</p>
            </div>

            <div className="text-center">
              <div className="mx-auto size-16 rounded-lg bg-orange-500 animate-bounce [animation-direction:alternate]" />
              <p className="mt-4">Direction: Alternate</p>
            </div>
          </div>
        </section>

        {/* 6. ANIMATION TIMING FUNCTIONS */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">6. Animation Timing Functions</h2>
          <p className="mt-2 text-gray-600">
            Timing functions control how an animation speeds up or slows down.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-2 font-medium">Linear</p>
              <div className="h-8 w-8 rounded bg-blue-500 animate-[move-right_2s_linear_infinite_alternate]" />
            </div>

            <div>
              <p className="mb-2 font-medium">Ease In</p>
              <div className="h-8 w-8 rounded bg-green-500 animate-[move-right_2s_ease-in_infinite_alternate]" />
            </div>

            <div>
              <p className="mb-2 font-medium">Ease Out</p>
              <div className="h-8 w-8 rounded bg-purple-500 animate-[move-right_2s_ease-out_infinite_alternate]" />
            </div>

            <div>
              <p className="mb-2 font-medium">Ease In Out</p>
              <div className="h-8 w-8 rounded bg-orange-500 animate-[move-right_2s_ease-in-out_infinite_alternate]" />
            </div>
          </div>
        </section>

        {/* 7. HOVER AND FOCUS EFFECTS */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">7. Hover and Focus Effects</h2>
          <p className="mt-2 text-gray-600">
            Hover applies styles when the pointer is over an element.
            Focus applies styles when an element receives keyboard or other focus.
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition duration-300 hover:bg-blue-800 hover:shadow-lg">
              Hover Me
            </button>

            <input
              type="text"
              placeholder="Click or tab into this input"
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <button className="rounded-lg border-2 border-purple-500 px-6 py-3 text-purple-600 transition duration-300 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
              Keyboard Focus
            </button>
          </div>
        </section>

        {/* 8. LOADING ANIMATIONS */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">8. Loading Animations</h2>
          <p className="mt-2 text-gray-600">
            Loading animations give users feedback while content is being processed.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-around gap-10">
            <div className="text-center">
              <div className="mx-auto size-12 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin" />
              <p className="mt-4">Spinner</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex gap-2">
                <span className="size-3 rounded-full bg-blue-600 animate-bounce" />
                <span className="size-3 rounded-full bg-blue-600 animate-bounce [animation-delay:150ms]" />
                <span className="size-3 rounded-full bg-blue-600 animate-bounce [animation-delay:300ms]" />
              </div>
              <p className="mt-4">Loading Dots</p>
            </div>

            <div className="w-48 animate-pulse space-y-3">
              <div className="h-4 rounded bg-gray-300" />
              <div className="h-4 w-3/4 rounded bg-gray-300" />
              <div className="h-20 rounded bg-gray-300" />
              <p className="text-sm text-gray-500">Skeleton Loader</p>
            </div>
          </div>
        </section>

        {/* 9. MICRO-INTERACTIONS */}
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">9. Micro-interactions</h2>
          <p className="mt-2 text-gray-600">
            Micro-interactions are small visual responses to user actions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg active:translate-y-0 active:scale-95">
              Click Interaction
            </button>

            <button className="group flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 transition-colors hover:border-green-500 hover:bg-green-50">
              <span className="transition-transform group-hover:rotate-12">
                ★
              </span>
              <span>Save to Favorites</span>
            </button>

            <button className="rounded-lg bg-purple-600 px-5 py-3 text-white transition duration-300 hover:scale-105 active:scale-95">
              Add to Cart +
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}