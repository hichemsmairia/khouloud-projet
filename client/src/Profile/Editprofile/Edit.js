import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../JS/Actions/User";
import { Link, useNavigate } from "react-router-dom";
import "./Edit.css";
import { edituser } from "../../JS/Actions/listuser";
import { ToastContainer } from "react-toastify";
const isAuth = localStorage.getItem("token");

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  const [editpro, seteditpro] = useState({});
  return (
    <div className="continue">
      <div className="bloclong">
        <div className="leftbloc">
          <div class="photo-left">
            <img src={users.photo} className="imageprofile" />
          </div>
          <h4 class="name"> {users.name}</h4>
          <p class="info">{users.email}</p>
          <button
            className="logout_btn"
            type="button"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("isAdmin");
              navigate("/");
            }}
          >
            LOG OUT
          </button>
        </div>
        <div className="rightbloc">
          <div className="navprofile">
            <ul>
              <Link to="/profile/aboutme">
                {" "}
                <li>About me</li>
              </Link>
              <Link to="/profile/cours">
                {" "}
                <li>Courses</li>
              </Link>
              <Link to="/profile/edit">
                {" "}
                <li>Edit Profil</li>
              </Link>
              <Link to="/">
                {" "}
                <li>Home Page</li>
              </Link>
            </ul>
          </div>
          <div className="blocinfo">
            <div className="formedit">
              <input
                type="text"
                placeholder={users.name}
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, name: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, lastname: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder={users.email}
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, email: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder={users.phone}
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, phone: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder={users.adresse}
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, adresse: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder={users.password}
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, password: e.target.value });
                }}
              />
            </div>
            <button
              className="upload_btn"
              onClick={() => {
                dispatch(edituser({ id: users._id, user: editpro }));
                setTimeout(() => {
                  navigate("/profile/aboutme", 2000);
                });
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Edit;
