import allRoutes from "../../../Routes";
import {
  DashboardOutlined,
  HomeOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

const sidebarOptions = [
  {
    role: "Admin",
    routes: [
      {
        option: "My Workspace",
        icon: <HomeOutlined />,
        route: "/admin/workspace",
      },
      {
        option: "Dashboard",
        icon: <DashboardOutlined />,
        route: "/admin/dashboard",
      },
      {
        option: "Manage Employees",
        icon: <LaptopOutlined />,
        route: "/admin/manage-employees",
      },
    ],
  },
  {
    role: "HR",
    routes: [
      {
        option: "My Workspace",
        icon: <LaptopOutlined />,
        route: "/hr/workspace",
      },
      {
        option: "Dashboard",
        icon: <DashboardOutlined />,
        route: "/hr/dashboard",
      },
      {
        option: "work",
        icon: <LaptopOutlined />,
        route: "/hr/work",
      },
    ],
  },
];

export default sidebarOptions;
