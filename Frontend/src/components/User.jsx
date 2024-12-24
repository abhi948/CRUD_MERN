import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const User = () => {

  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/userData");
        setUser(response.data);
      } catch (error) {

      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:3000/api/user/delete/${userId}`)
      .then((response) => {
        setUser((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <a href='/add' className='btn btn-primary bg-cyan-400 text-black ml-20 mt-10' >Add User</a>
      <div className="overflow-x-auto m-20 mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Sr. No.
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((user, index) => {
              return (

                <tr>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>{user.address} </td>
                  <th>
                    <Link to={`/update/` + user._id} className="btn border-cyan-500 btn-xs mr-1">Edit</Link>
                    <button onClick={() => deleteUser(user._id)} type="button" className="btn border-cyan-500 btn-xs mr-1">
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default User