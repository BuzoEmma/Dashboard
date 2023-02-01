import React, { useContext } from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/NewPage/NewPage";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { productInput, userInputs } from "./formSource";
import "./Style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  // const currentUser = false;
  const { currentUser } = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"Login"} />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Home />
              }
            />
          </Route>

          <Route path="users">
            <Route path="login" element={<Login />} />

            <Route
              index
              element={
                <RequiredAuth>
                  <List />
                </RequiredAuth>
              }
            />

            <Route
              path=":userId"
              element={
                <RequiredAuth>
                  <Single />
                </RequiredAuth>
              }
            />

            <Route
              path="new"
              element={
                <RequiredAuth>
                  <New inputs={userInputs} title="Add New User" />
                </RequiredAuth>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <RequiredAuth>
                  <List />
                </RequiredAuth>
              }
            />
            <Route
              path=":productId"
              element={
                <RequiredAuth>
                  <Single />
                </RequiredAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequiredAuth>
                  <New inputs={productInput} title="Add New Product" />
                </RequiredAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
