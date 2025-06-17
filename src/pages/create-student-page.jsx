import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function CreateStudentPage() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <main className="flex-1 flex gap-8 justify-center bg-blue-300 p-8">
      <div className="flex flex-col gap-5 ">
        <NavLink
          to={"/create-student/"}
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 px-3 pr-8 arrow-path py-2 text-white flex flex-col text-center "
              : "bg-gray-600 px-3 pr-8 arrow-path py-2 text-white flex flex-col text-center"
          }
        >
          <p className="font-bold text-lg"> Step 1</p>{" "}
          <p className="font-medium text-xs text-left">Student Information</p>
        </NavLink>
        <NavLink
          to={"/create-student/2"}
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 px-3 pr-8 arrow-path py-2 text-white flex flex-col text-center "
              : "bg-gray-600 px-3 pr-8 arrow-path py-2 text-white flex flex-col text-center"
          }
        >
          <p className="font-bold text-lg"> Step 2</p>{" "}
          <p className="font-medium text-xs text-left">Guardian Information</p>
        </NavLink>
        <NavLink
          to={"/create-student/2/3"}
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 px-3 pr-8 arrow-path py-2 text-white flex flex-col text-center "
              : "bg-gray-600 px-3 pr-8 arrow-path py-2 text-white flex flex-col text-center"
          }
        >
          <p className="font-bold text-lg"> Step 3</p>{" "}
          <p className="font-medium text-xs text-left">
            Educational Background
          </p>
        </NavLink>
        <NavLink
          to={"/create-student/2/3/4"}
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 px-3 pr-8 arrow-path py-2 text-white flex flex-col text-center "
              : "bg-gray-600 px-3 pr-8 arrow-path py-2 text-white flex flex-col text-center"
          }
        >
          <p className="font-bold text-lg"> Step 4</p>{" "}
          <p className="font-medium text-xs text-left">
            Enrollment Information
          </p>
        </NavLink>
      </div>
      <Outlet />
    </main>
  );
}
