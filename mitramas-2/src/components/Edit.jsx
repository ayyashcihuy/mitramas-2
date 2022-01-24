import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../store/action";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Edit() {
  const { id } = useParams();
  const { users, authorization } = useSelector((state) => {
    return {
      users: state.users,
      authorization: state.authorization,
    };
  });

  let data;

  const editedData = users.map((e) => {
    if (e.id == id) {
      data = e;
    }
  });

  const [name, setName] = useState(data.name);
  const [address, setAddress] = useState(data.address);
  const [country, setCountry] = useState(data.country);
  const [phone_number, setPhone_number] = useState(+data.phone_number);
  const [job_title, setJob_title] = useState(data.job_title);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitData(e) {
    e.preventDefault();
    if (name && address && country && phone_number && job_title) {
      data = {
        id: data.id,
        name,
        address,
        country,
        phone_number,
        job_title,
        status: data.status,
      };
      dispatch(editUser(data, authorization.auth));
      Swal.fire({
        title: "Success!",
        text: "You edit a user!",
        icon: "success",
        confirmButtonText: "Thank You",
      });
      navigate("/", { replace: true });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please Finish Your Form First!",
        icon: "error",
        confirmButtonText: "Try Again!",
      });
    }
  }

  return (
    <div className="container flex flex-col justify-center">
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first-name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="last-name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <input
                        value={country}
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6">
                      <label
                        for="street-address"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        type="text"
                        name="street-address"
                        id="street-address"
                        autocomplete="street-address"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        for="phone-number"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        value={phone_number}
                        onChange={(e) => {
                          setPhone_number(e.target.value);
                        }}
                        type="number"
                        name="phone-number"
                        id="phone-number"
                        autocomplete="address-level2"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="region"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Job Title
                      </label>
                      <input
                        value={job_title}
                        onChange={(e) => {
                          setJob_title(e.target.value);
                        }}
                        type="text"
                        name="region"
                        id="region"
                        autocomplete="address-level1"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={(e) => {
                      submitData(e);
                    }}
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
