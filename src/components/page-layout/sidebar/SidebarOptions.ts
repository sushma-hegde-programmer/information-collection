import allRoutes from "../../../Routes";

const sidebarOptions = [
  {
    role: "Admin",
    routes: [
      {
        option: "My Workspace",
        route: "/admin/workspace",
      },
      {
        option: "Dashboard",
        route: "/admin/dashboard",
      },
      {
        option: "Manage Employees",
        route: "/admin/manage-employees",
      },
    ],
  },
  {
    role: "HR",
    routes: [
      {
        option: "My Workspace",
        route: "/hr/workspace",
      },
      {
        option: "Dashboard",
        route: "/hr/dashboard",
      },
      {
        option: "work",
        route: "/hr/work",
      },
    ],
  },
];

export default sidebarOptions;
