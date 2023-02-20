import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUrl = "https://jsonplaceholder.typicode.com/users";

  const { url } = useRouteMatch();
  const { theme } = useTheme();

  useEffect(() => {
    axios
      .get(getUrl)
      .then(function (response) {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <div className="container">
      <h1 className="display-4">Users</h1>
      <div className="row">
        {loading ? (
          <div className="display-5">Loading...</div>
        ) : (
          users.map((user) => (
            <div className="col-md-3 my-2" key={user.id}>
              <div className={`card bg-${theme}`}>
                <div className="w-100">
                  <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1642425149819-af1b803b2b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Users Photos"
                  />
                </div>

                <div className="card-body">
                  <h5 className="pl-2 card-title">{user.name}</h5>
                  <ul className="list-group my-3">
                    <li className="list-group-user">
                      <strong>Username: </strong>
                      {user.username}
                    </li>
                    <li className="list-group-user">
                      <strong>Email: </strong>
                      {user.email}
                    </li>
                    <li className="list-group-user">
                      <strong>Phone: </strong>
                      {user.phone}
                    </li>
                  </ul>
                  <Link
                    className="btn btn-outline-danger"
                    to={`${url}/${user.id}`}
                  >
                    Show more details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Users;
