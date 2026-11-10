export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <h1 className="text-3xl font-bold text-blue-600">
          Hello Tailwind CSS!
        </h1>

        <p className="mt-3 text-gray-600">
          My first Tailwind CSS application.
        </p>

        <button className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>

      </div>

    </main>
  );
}