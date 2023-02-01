import React, { useEffect, useState } from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import MonetizationOnSharpIcon from "@material-ui/icons/MonetizationOnSharp";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);

  // temporarily
  // const amount = 100;
  // const diff = 20;

  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        query: "users",
        link: "See All Users",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ color: "crison", backgroundColor: "rgba(225, 0, 0, 0.2)" }}
          />
        ),
      };
      break;

    case "products":
      data = {
        title: "PRODUCTS",
        query: "products",
        link: "View All Orders",
        icon: (
          <ShoppingCartSharpIcon
            className="icon"
            style={{
              color: "golden",
              backgroundColor: "rgba(185, 158, 6, 0.405)",
            }}
          />
        ),
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View Net Earning",
        icon: (
          <MonetizationOnSharpIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See Details",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128,  0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fectData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const preMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );

      const preMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", preMonth)
      );
      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(preMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };

    fectData();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "$"}
          {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon />:<KeyboardArrowUpIcon />}
          
          {diff}%
        </div>
        <div>{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
