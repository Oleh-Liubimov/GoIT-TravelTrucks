import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center bg-slate-100 w-full py-6 roundedz">
      <div className="flex w-2/5">
        <Link to="/" className="text-xl font-bold px-16">
          Travel<span className="text-gray-500">Trucks</span>
        </Link>
      </div>

      <nav className="w-3/5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx("mr-6", isActive ? "text-rose-500" : "text-slate-900")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/campers"
          className={({ isActive }) =>
            clsx("mr-6", isActive ? "text-rose-500" : "text-slate-900")
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
