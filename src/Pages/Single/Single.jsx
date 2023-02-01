import "./single.scss";
import SideBar from "../../Compnents/SideBar/SideBar";
import Navbar from "../../Compnents/Navbar/Navbar";
import avatar3 from "../../assets/avatar3.jpg";
import Chart from "../../Compnents/Chart/Chart";
import Tables from "../../Compnents/Table/Table";
const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <Navbar />
        <div className="tops">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={avatar3} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">E-mail: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>{" "}
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+1 234 567 890</span>
                </div>{" "}
                <div className="detailItem">
                  <span className="itemKey">Address </span>
                  <span className="itemValue">
                    No 1 what ever street you belong
                  </span>
                </div>{" "}
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Don'tWorry</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={4 / 1} title="Last 4 Months (Revenue)" />
          </div>
        </div>

        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;
