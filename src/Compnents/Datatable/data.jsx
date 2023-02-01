import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import avatar5 from "../../assets/me-about.jpg";
import avatar6 from "../../assets/avatar-testimonial.jpg";

export const useRows = [
  {
    id: 1,
    username: "Snow",
    img: avatar6,
    status: "active",
    age: 30,
    email: "snow4gmail.com",
  },
  {
    id: 2,
    username: "Acer",
    img: avatar6,
    status: "pending",
    age: 35,
    email: "acer4gmail.com",
  },
  {
    id: 3,
    username: "Nitro ",
    img: avatar1,
    status: "passive",
    age: 20,
    email: "nite4gmail.com",
  },
  {
    id: 4,
    username: "Programmer",
    img: avatar2,
    status: "pending",
    age: 91,
    email: "prommer4gmail.com",
  },
  {
    id: 5,
    username: "Joshua",
    img: avatar2,
    status: "active",
    age: 42,
    email: "joshuagmail.com",
  },
  {
    id: 6,
    username: "Mike",
    img: avatar3,
    status: "passive",
    age: 33,
    email: "mike4gmail.com",
  },
  {
    id: 7,
    username: "John",
    img: avatar4,
    status: "active",
    age: 50,
    email: "johna4gmail.com",
  },
  {
    id: 8,
    username: "Stanley",
    img: avatar5,
    status: "pending",
    age: 80,
    email: "Stanleya4gmail.com",
  },
  {
    id: 9,
    username: "Favour",
    img: avatar6,
    status: "active",
    age: 58,
    email: "Favoura4gmail.com",
  },
  {
    id: 10,
    username: "Mustafa",
    img: avatar1,
    status: "passive",
    age: 95,
    email: "Mustafa4gmail.com",
  },
  {
    id: 11,
    username: "David",
    img: avatar2,
    status: "pending",
    age: 38,
    email: "Davidma4gmail.com",
  },
  {
    id: 12,
    username: "Victoria",
    img: avatar3,
    status: "active",
    age: 28,
    email: "Victoria4gmail.com",
  },
  {
    id: 13,
    username: "Mathew",
    img: avatar4,
    status: "active",
    age: 84,
    email: "Mathewgmail.com",
  },
  {
    id: 14,
    username: "Andrew",
    img: avatar5,
    status: "passive",
    age: 10,
    email: "Andrew4gmail.com",
  },
  {
    id: 15,
    username: "Stepheny",
    img: avatar6,
    status: "active",
    age: 14,
    email: "buzStephenygmail.com",
  },
];

export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "username",
    headerName: "User",
    width: 270,
    renderCell: (param) => {
      return (
        <>
          <div className="cellwithimg">
            <img src={param.row.img} alt="avartar" className="cellimg" />
            {param.row.username}
            </div>
        </>
      );
    },
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 230,
  },
  {
    field: "address",
    headerName: "Age",
    width: 100,
  },
  {
    field: "country",
    headerName: "Status",
    width: 150,
    renderCell: (param)=>{
      return<>
      <div className={`cellwithstatus ${param.row.country}`}>
        {param.row.country}
      </div>
      </>
    }
  },
];
