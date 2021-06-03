<<<<<<< HEAD
import { Component } from "react";
import { Layout, Breadcrumb, Row, Card } from "antd";
import DashboardContent from "../components/DashboardContent";

export default class dashboard extends Component {
  render() {
    return (
      <>
        <div className="style"></div>
        <DashboardContent />
      </>
    );
  }
}
=======
import  { Component } from "react";
import { Layout, Breadcrumb, Row, Card } from "antd";
import "../Styles/style.css";
import DashboardContent from "../Components/DashboardContent";
import Topnav from "../Components/Topnav";



export default class dashboard extends Component {
    render() {
        return (
            <>
                <div className="style"></div>
                <DashboardContent/>
                <Topnav/>
            </>
        );
    }
}
>>>>>>> 4692081473fc8481a927df6c200e3fa74f99b5bd
