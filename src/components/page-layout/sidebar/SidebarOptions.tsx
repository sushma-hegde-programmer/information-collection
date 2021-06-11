import {
  DashboardOutlined,
  HomeOutlined,
  LaptopOutlined,
  ClockCircleOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import {
  admin_routes,
  recruiter_routes,
  hr_routes,
  account_manager_routes,
  leader_routes,
  candidate_routes,
} from "../../../Routes";
import { SidebarOptionsType } from "../../../types";

console.log(admin_routes);
const sidebarOptions: SidebarOptionsType[] = [
  {
    role: "Admin",
    routes: [
      {
        option: "My Workspace",
        icon: <LaptopOutlined />,
        route: admin_routes[0],
      },
      {
        option: "Dashboard",
        icon: <DashboardOutlined />,
        route: admin_routes[1],
      },
      {
        option: "Manage Employees",
        icon: <LaptopOutlined />,
        route: admin_routes[2],
      },
    ],
  },
  {
    role: "Recruiter",
    routes: [
      {
        option: "My Workspace",
        icon: <LaptopOutlined />,
        route: recruiter_routes[0],
      },
      {
        option: "Dashboard",
        icon: <DashboardOutlined />,
        route: recruiter_routes[1],
      },
      {
        option: "Manage Clients",
        icon: <ClockCircleOutlined />,
        route: recruiter_routes[2],
      },
      {
        option: "Manage Candidates",
        icon: <UsergroupDeleteOutlined />,
        route: recruiter_routes[3],
      },
    ],
  },
  {
    role: "HR",
    routes: [
      {
        option: "My Workspace",
        icon: <LaptopOutlined />,
        route: hr_routes[0],
      },      
      {
        option: "HR Submenu 1",
        icon: <LaptopOutlined />,
        route: hr_routes[1],
      },
      {
        option: "HR Submenu 2",
        icon: <LaptopOutlined />,
        route: hr_routes[2],
      },
    ],
  },
  {
    role: "BDM",
    routes: [
      {
        option: "My Workspace",
        icon: <LaptopOutlined />,
        route: account_manager_routes[0],
      },
      {
        option: "AM Sub 1",
        icon: <LaptopOutlined />,
        route: account_manager_routes[1],
      },
      {
        option: "AM Sub 2",
        icon: <LaptopOutlined />,
        route: account_manager_routes[2],
      },
    ],
  },
  {
    role: "Leader",
    routes: [
      {
        option: "My Workspace",
        icon: <LaptopOutlined />,
        route: leader_routes[0],
      },
      {
        option: "Leader Sub 1",
        icon: <DashboardOutlined />,
        route: leader_routes[1],
      },
      {
        option: "Leader Sub 2",
        icon: <LaptopOutlined />,
        route: leader_routes[2],
      },
    ],
  },
  {
    role: "Candidate",
    routes: [
      {
        option: "My Workspace",
        icon: <LaptopOutlined />,
        route: candidate_routes[0],
      },
      {
        option: "Candidate Sub 1",
        icon: <DashboardOutlined />,
        route: candidate_routes[1],
      },
      {
        option: "Candidate Sub 2",
        icon: <LaptopOutlined />,
        route: candidate_routes[2],
      },
    ],
  },
];

export default sidebarOptions;
