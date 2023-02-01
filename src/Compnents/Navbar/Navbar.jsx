import React, { useContext } from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import FullscreenExitRoundedIcon from "@material-ui/icons/FullscreenExitRounded";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import ListIcon from "@material-ui/icons/List";
import avatar3 from "../../assets/avatar3.jpg";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" className="text" placeholder="Search...." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>{" "}
          <div
            className="item"
            onClick={() => {
              dispatch({ type: "TOGGLE" });
            }}
          >
            <Brightness2OutlinedIcon className="icon" />
          </div>{" "}
          <div className="item">
            <FullscreenExitRoundedIcon className="icon" />
          </div>{" "}
          <div className="item">
            <NotificationsNoneRoundedIcon className="icon" />
            <div className="counter">1</div>
          </div>{" "}
          <div className="item">
            <ChatBubbleRoundedIcon className="icon" />
            <div className="counter">2</div>
          </div>{" "}
          <div className="item">
            <ListIcon className="icon" />
          </div>{" "}
          <div className="item">
            <img src={avatar3} alt="avatar" className="avatar" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
