import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Style } from "@mui/icons-material";

export default function HomeUserProfiles() {
  const { id } = useParams();
  const [User, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("allusers");
    setUsers(result.data);
  };

  const deleteUser = async (id, username) => {
    await axios.delete("deleteuser/${id}");
    loadUsers();
  };

  return (
    <Container>
      <Row>
        {User.map((User, k) => (
          <Col key={k} xs={12} md={4} className="gridrowstylepadding1">
            <Card className="border-dark">
              <Card.Body className="gridrowstyle1">
                <Card.Title>{User.name}</Card.Title>
                <Card.Title>{User.email}</Card.Title>
                <Card.Title>{User.phonenumber}</Card.Title>
                {/* </Card.Body> */}
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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
