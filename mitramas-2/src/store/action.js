import actionType from "./actionType";
import axios from "axios";

export const setData = (data) => {
  return {
    type: actionType.FETCH_DATA,
    payload: data,
  };
};

export const setLogin = (data) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://mitramas-test.herokuapp.com/auth/login",
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editUser = (data) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: "https://mitramas-test.herokuapp.com/customers",
      data,
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjQzMDEzNzQ1LCJleHAiOjE2NDMwMTczNDUsIm5iZiI6MTY0MzAxMzc0NSwianRpIjoiQUVlbmE5VjNjVXZPY2p4SyIsInN1YiI6MTIyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.H9YEBd5CmMPG7-TulRJvH41gCuqvoJeSHDhqOM_4je8",
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

export const deleteAccount = (id) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: "https://mitramas-test.herokuapp.com/customers",
      data: id,
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjQzMDEzNzQ1LCJleHAiOjE2NDMwMTczNDUsIm5iZiI6MTY0MzAxMzc0NSwianRpIjoiQUVlbmE5VjNjVXZPY2p4SyIsInN1YiI6MTIyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.H9YEBd5CmMPG7-TulRJvH41gCuqvoJeSHDhqOM_4je8",
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

export const fetchData = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "https://mitramas-test.herokuapp.com/customers",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjQzMDEzMzM5LCJleHAiOjE2NDMwMTY5MzksIm5iZiI6MTY0MzAxMzMzOSwianRpIjoiR05BVWlmT292RkY3M1hSbCIsInN1YiI6MTIyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.3Cr5WpVVtkN51_X2ud2c-iRgXLsmzgRD-yJtBCGZeNA",
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

export const addUser = (data) => {
  return (dispatch) => {
    console.log(data);
    axios({
      method: "POST",
      url: "https://mitramas-test.herokuapp.com/customers",
      data,
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjQzMDEzNzQ1LCJleHAiOjE2NDMwMTczNDUsIm5iZiI6MTY0MzAxMzc0NSwianRpIjoiQUVlbmE5VjNjVXZPY2p4SyIsInN1YiI6MTIyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.H9YEBd5CmMPG7-TulRJvH41gCuqvoJeSHDhqOM_4je8",
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
