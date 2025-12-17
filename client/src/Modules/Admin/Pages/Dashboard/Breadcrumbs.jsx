import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  let paths = location.pathname.split("/").filter(Boolean);

  // Remove duplicates if any (e.g. /admin/admin/license)
  paths = paths.filter((path, index) => path !== paths[index - 1]);

  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">

        {/* Home Icon */}
        <li className="inline-flex items-center">
          <Link
            to="/admin/license"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#002d4b] transition-colors duration-200"
          >
            <Home className="w-4 h-4 me-1.5 mb-0.5" />
            <span className="hidden sm:inline">Admin</span>
          </Link>
        </li>

        {paths.slice(1).map((path, index) => {
          // Construct the route for this segment
          // We add +1 because we sliced off the first 'admin' path in the map logic effectively,
          // or if you want standard behavior:
          const routeTo = "/" + paths.slice(0, index + 2).join("/");
          const isLast = index === paths.slice(1).length - 1;

          return (
            <li key={routeTo}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-300 mx-1" />

                {isLast ? (
                  <span className="ms-1 text-sm font-bold text-[#002d4b] capitalize px-2 py-0.5 bg-blue-50 rounded-md border border-blue-100">
                    {path.replace(/-/g, " ")}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="ms-1 text-sm font-medium text-slate-500 hover:text-[#f26522] md:ms-2 capitalize transition-colors duration-200"
                  >
                    {path.replace(/-/g, " ")}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
