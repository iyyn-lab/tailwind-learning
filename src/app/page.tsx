
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "₹2,499",
    stock: 45,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: "₹3,299",
    stock: 8,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "USB-C Cable",
    category: "Accessories",
    price: "₹499",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: "₹1,899",
    stock: 32,
    status: "In Stock",
  },
];

const stats = [
  { title: "Total Products", value: "1,248", icon: "📦" },
  { title: "Total Stock", value: "8,540", icon: "🏬" },
  { title: "Low Stock", value: "18", icon: "⚠️" },
  { title: "Out of Stock", value: "05", icon: "❌" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Dashboard layout */}
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 bg-slate-900 p-6 text-white md:block">
          <h1 className="mb-10 text-2xl font-bold">
            Namma Ooru
          </h1>

          <nav className="space-y-3">
            <a className="block rounded-lg bg-primary px-4 py-3" href="#">
              Dashboard
            </a>

            <a className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800" href="#">
              Products
            </a>

            <a className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800" href="#">
              Categories
            </a>

            <a className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800" href="#">
              Suppliers
            </a>

            <a className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800" href="#">
              Settings
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <section className="min-w-0 flex-1">

          {/* Navbar */}
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Inventory Dashboard
              </h2>
              <p className="text-sm text-slate-500">
                Welcome back, Admin
              </p>
            </div>

            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white">
              + Add Product
            </button>
          </header>

          <div className="space-y-6 p-4 sm:p-6 lg:p-8">

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">
                      {stat.title}
                    </p>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>

                  <h3 className="mt-4 text-3xl font-bold text-slate-800">
                    {stat.value}
                  </h3>
                </div>
              ))}
            </div>

            {/* Products table */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 p-5">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Recent Products
                  </h3>
                  <p className="text-sm text-slate-500">
                    Manage your inventory products
                  </p>
                </div>

                <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700">
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left text-sm">

                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="px-5 py-4">Product</th>
                      <th className="px-5 py-4">Category</th>
                      <th className="px-5 py-4">Price</th>
                      <th className="px-5 py-4">Stock</th>
                      <th className="px-5 py-4">Status</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-slate-50">
                        <td className="px-5 py-4 font-semibold text-slate-800">
                          {product.name}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {product.category}
                        </td>

                        <td className="px-5 py-4 text-slate-700">
                          {product.price}
                        </td>

                        <td className="px-5 py-4 text-slate-700">
                          {product.stock}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              product.status === "In Stock"
                                ? "bg-green-100 text-green-700"
                                : product.status === "Low Stock"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {product.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
