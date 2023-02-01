import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../JS/Actions/User";
import { Link, useNavigate } from "react-router-dom";
import "./Edit.css";
import { edituser } from "../../JS/Actions/listuser";
import Sidebar from "../../Fixedhash/Sidebar/Sidebar";
import Navig from "../../Fixedhash/Navigation/Navig";
const isAuth = localStorage.getItem("token");

function EditAdmin() {
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
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navig />
        <div className="chart">
          <div className="continue">
            <div className="bloclong">
              <div className="rightbloc">
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
                      placeholder="Phone"
                      className="inputname"
                      onChange={(e) => {
                        seteditpro({ ...editpro, phone: e.target.value });
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Adresse"
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
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAdmin;
