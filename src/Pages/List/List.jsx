import React from "react";
import DataTable from "../../Compnents/Datatable/DataTable";
import Navbar from "../../Compnents/Navbar/Navbar";
import SideBar from "../../Compnents/SideBar/SideBar";
import "./list.scss"
const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Navbar />
        
        <DataTable />
      </div>
    </div>
  );
};

export default List;
