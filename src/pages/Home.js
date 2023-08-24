import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    const {id} = useParams()

    const [User,serUsers] = useState([])
    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/users");
        serUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8081/user/${id}`)
        loadUsers()
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table table-striped border shadow">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Auction</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        User.map((user, index)=>(
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phonenumber}</td>
                            <td>
                                
                                <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}><FontAwesomeIcon icon={faEye} /></Link>
                                <Link className='btn btn-success mx-2' to={`/edituser/${user.id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link>
                                <Link className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}><FontAwesomeIcon icon={faTrash} /></Link>
                            </td>
                        </tr>
                        ))
                        }
                </tbody>
            </table>
        </div>
    </div>
  )
}
