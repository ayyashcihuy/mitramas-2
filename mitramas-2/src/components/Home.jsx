import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchData } from "../store/action";
import Card from "./Card";
import Login from "./Login";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, authorization } = useSelector((state) => {
    return {
      users: state.users,
      authorization: state.authorization,
    };
  });

  console.log(users, authorization);

  useEffect(() => {
    dispatch(fetchData(authorization.auth));
  }, [authorization]);

  return (
    <div className="container mx-auto my-4">
      {users.length > 0 && users ? (
        users.map((users, index) => {
          return <Card key={index} user={users} />;
        })
      ) : (
        <a href="/login"> Go Login!</a>
      )}
    </div>
  );
}

export default Home;
