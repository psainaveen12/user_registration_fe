import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UserCards() {
  const { id } = useParams();
  const [User, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/user_reg/allusers");
    setUsers(result.data);
  };

  const deleteUser = async (id, username) => {
    await axios.delete(`/user_reg/deleteuser/${id}`);
    loadUsers();
  };

  return (
    <Container className="clearfix">
      <Row>
        {User.map((User, k) => (
          <div className="col-md-4 animated fadeIn" key={k}>
            <div className="card">
              <div className="card-body">
                <div className="avatar">
                  <img src={User.pictureurl} className="card-img-top" alt="" />
                </div>
                <h5 className="card-title">{User.username}</h5>
                <p className="card-text">
                  {User.email}
                  <br />
                  <span className="phone">{User.phonenumber}</span>
                </p>
                <div>
                  <Link
                    className="btn btn-success mx-2"
                    to={`/edituser/${User.id}`}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Do you really want to delete this USER - " +
                          User.username +
                          " ?"
                      );
                      if (confirmBox === true) {
                        deleteUser(User.id, User.username);
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
}
