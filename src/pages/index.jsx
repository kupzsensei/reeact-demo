import { Link, Outlet } from "react-router-dom";

export default function IndexPage() {
  return (
    <main className="w-screen h-screen flex flex-col bg-blue-300">
      <nav className="flex justify-between items-center px-5 py-2">
        <img
          src="https://png.pngtree.com/png-vector/20230306/ourmid/pngtree-scool-college-logo-victor-vector-png-image_6634445.png"
          alt=""
          className="h-[40px] drop-shadow-lg"
        />

        <input
          type="search"
          placeholder="Search..."
          className="px-3 py-1 rounded-sm shadow-md bg-white border border-gray-400"
        />
        <div className="flex gap-5 font-bold text-white drop-shadow-lg">
          <Link to={"/"}>Home</Link>
          <Link to={"/create-student/"}>Enrollment</Link>
          <Link to={"/students"}>Students</Link>
        </div>
      </nav>
      <section className="flex-1 overflow-y-auto">
        <Outlet />
      </section>
    </main>
  );
}
