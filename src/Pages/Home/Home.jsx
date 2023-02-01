import React from "react";
import Chart from "../../Compnents/Chart/Chart";
import Featured from "../../Compnents/Featured/Featured";
import Navbar from "../../Compnents/Navbar/Navbar";
import SideBar from "../../Compnents/SideBar/SideBar";
import Tables from "../../Compnents/Table/Table";
import Widget from "../../Compnents/Widget/Widget";
import "./home.scss";

const Home = ({setdark}) => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
           <Widget type='user'/>
           <Widget type='products'/>
           <Widget type='earning'/>
           <Widget type='balance'/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2/1} title="Last 6 Months (Revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">letest List</div>
          <Tables/> 
        </div>
      </div>
    </div>
  );
};

export default Home;
