import actionType from "./actionType";
import axios from "axios";

export const setData = (data) => {
  return {
    type: actionType.FETCH_DATA,
    payload: data,
  };
};

export const setLogin = (data) => {
  return {
    type: actionType.LOGIN,
    payload: data,
  };
};

export const editUser = (data, auth) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: "https://mitramas-test.herokuapp.com/customers",
      data,
      headers: {
        Authorization: auth,
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteAccount = (id, auth) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: "https://mitramas-test.herokuapp.com/customers",
      data: id,
      headers: {
        Authorization: auth,
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchData = (auth) => {
  console.log(auth, "<<<");
  return (dispatch) => {
    axios({
      method: "GET",
      url: "https://mitramas-test.herokuapp.com/customers",
      headers: {
        Authorization: auth,
      },
    })
      .then(({ data }) => {
        const result = data.data;
        dispatch(setData(result));
      })
      .catch(({ err }) => {
        console.log(err, "<<<<<");
      });
  };
};

export const addUser = (data, auth) => {
  return (dispatch) => {
    console.log(data);
    axios({
      method: "POST",
      url: "https://mitramas-test.herokuapp.com/customers",
      data,
      headers: {
        Authorization: auth,
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
