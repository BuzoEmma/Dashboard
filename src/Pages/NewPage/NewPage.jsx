import React, { useEffect, useState } from "react";
import "./newPage.scss";
import Sidebar from "../../Compnents/SideBar/SideBar";
import Navbar from "../../Compnents/Navbar/Navbar";
import NoImage from "../../assets/NoImage.png";
import FolderSpecialOutlinedIcon from "@material-ui/icons/FolderSpecialOutlined";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NewPage = ({ title, inputs }) => {
  const [file, setfile] = useState();
  const [data, setdata] = useState({});
  const [percentage, setPercentage] = useState("")

  const navigate = useNavigate();
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      setdata('');
      navigate(-1)
      console.log(res.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setdata({ ...data, [id]: value });
    console.log(data);
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      // console.log(file.name)
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setdata((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  return (
    <div className="newbar">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : NoImage}
              alt="NoImage"
            />{" "}
          </div>
          <div className="right">
            <form action="form" onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <FolderSpecialOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {
                    setfile(e.target.files[0]);
                  }}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label htmlFor="">{input.label}</label>
                    <input
                      type={input.type}
                      id={input.id}
                      placeholder={input.placeholder}
                      onChange={handleInput}
                    />
                  </div>
                );
              })}

              <button
                type="submit"
                disabled={percentage !== null && percentage < 100}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      --
    </div>
  );
};

export default NewPage;
