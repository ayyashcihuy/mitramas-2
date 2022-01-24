import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/action";
import Card from "./Card";
import Login from "./Login";

function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return {
      users: state.users,
    };
  });

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="container mx-auto my-4">
      {users.length > 0 && users ? (
        users.map((users, index) => {
          return <Card key={index} user={users} />;
        })
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Home;
