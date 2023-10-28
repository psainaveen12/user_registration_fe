import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeFakeNames() {
  const { id } = useParams();
  const [User, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/fakenames/allusers");
    setUsers(result.data);
  };

  //   const deleteUser = async (id, username) => {
  //     await axios.delete(`/user_reg/deleteuser/${id}`);
  //     loadUsers();
  //   };

  return (
    <div>
      {/* <div>
        <div className="conntainer colo">
          <div className="row">
            <div className="col-md-6 offset-3 border rounded p-4 mt-2 shadow custom_table_style">
              <h2 className="text-center m-4">Add Query</h2>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <button className="btn btn-outline-primary mx-2">
                  Submit <FontAwesomeIcon icon={faArrowRightToBracket} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="py-2">
          <table className="table table-striped text-nowrap border shadow custom_table_style">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Givenname</th>
                <th scope="col">Surname</th>
                <th scope="col">Country</th>
                <th scope="col">Phonenumber</th>
                <th scope="col">Zodiac</th>
                <th scope="col">CCType</th>
                <th scope="col">CVV2</th>
                <th scope="col">CCExpires</th>
                <th scope="col">Color</th>
                <th scope="col">Bloodtype</th>
                <th scope="col">Kilograms</th>
                <th scope="col">Centimeters</th>
                <th scope="col">Gender</th>
                <th scope="col">Nameset</th>
                <th scope="col">Countryfull</th>
                <th scope="col">Age</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {User.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.givenname}</td>
                  <td>{user.surname}</td>
                  <td>{user.country}</td>
                  <td>{user.phonenumber}</td>
                  <td>{user.zodiac}</td>
                  <td>{user.cctype}</td>
                  <td>{user.cvv2}</td>
                  <td>{user.ccexpires}</td>
                  <td>{user.color}</td>
                  <td>{user.bloodtype}</td>
                  <td>{user.kilograms}</td>
                  <td>{user.centimeters}</td>
                  <td>{user.gender}</td>
                  <td>{user.nameset}</td>
                  <td>{user.countryfull}</td>
                  <td>{user.age}</td>

                  {/* <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                  <Link
                    className="btn btn-success mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Do you really want to delete this USER - " +
                          user.username +
                          " ?"
                      );
                      if (confirmBox === true) {
                        deleteUser(user.id, user.username);
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
