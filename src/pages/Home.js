import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { id } = useParams();
  const [User, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/allusers");
    setUsers(result.data);
  };

  const deleteUser = async (id, username) => {
    await axios.delete("deleteuser/${id}");
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-2">
        <table className="table table-striped text-nowrap border shadow custom_table_style">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {User.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phonenumber}</td>
                <td>{user.date}</td>
                <td>{user.time}</td>
                <td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
