import React, { useState } from "react";

function Expenses() {
  const userDetails = JSON.parse(localStorage.getItem("userData")) || [];
  const searchedUser = JSON.parse(localStorage.getItem("searchedUser")) || [];
  const [searchUser, setsearchUser] = useState()
  const [displayUser, setdisplayUser] = useState(searchedUser);
  console.log(searchedUser);
  const getUser = (search) => {
    let user = userDetails.filter((user) => user.name.first == search);
    localStorage.setItem("searchedUser", JSON.stringify(user));
    setdisplayUser(user.name);
  };

  return (
    <div>
      <input onChange={(e) => setsearchUser(e.target.value)} />
      <button onClick={() => getUser(searchUser)}>Search User</button>
      <div>
      <img src={searchedUser[0].picture.large}/>
          <h1>{`${searchedUser[0].name.title} ${searchedUser[0].name.first} ${searchedUser[0].name.last}`}</h1>
          <span>{searchedUser[0].location.city}</span>
          <span>{searchedUser[0].email}</span>
          <span>{searchedUser[0].expenses}</span>
          </div>
    </div>
  );
}

export default Expenses;
