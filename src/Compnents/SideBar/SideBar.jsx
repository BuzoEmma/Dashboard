import React, { useContext } from "react";
import "./SideBar.scss";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import ViewStreamOutlinedIcon from "@material-ui/icons/ViewStreamOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@material-ui/icons/SettingsSystemDaydreamOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const SideBar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Buzo</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardOutlinedIcon className="icon" />
            <span>Dashboard</span>
          </li>{" "}
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PermIdentityOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreMallDirectoryIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ViewStreamOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>{" "}
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>{" "}
          <p className="title">USEFUL</p>
          <li>
            <EqualizerOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>{" "}
          <li>
            <NotificationsOutlinedIcon className="icon" />
            <span>Nofications</span>
          </li>{" "}
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health </span>
          </li>{" "}
          <li>
            <SupervisedUserCircleOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>{" "}
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>{" "}
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>{" "}
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>{dispatch({type: "LIGHT"})}}></div>
        <div className="colorOption" onClick={()=>{dispatch({type: "DARK"})}}></div>
      </div>
    </div>
  );
};

export default SideBar;
