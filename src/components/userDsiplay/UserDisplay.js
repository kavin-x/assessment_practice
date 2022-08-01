import React, { useEffect, useState } from "react";
import "./UserDisplay.css"
function UserDisplay() {
  const userDetails = localStorage.getItem("userData") || [];
  const userDataUrl = "https://randomuser.me/api/?results=10";
  const [userData, setuserData] = useState(JSON.parse(userDetails) || []);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(userDataUrl);
      let data = await response.json();
      data.results.forEach(element => {
        element.expenses="$20000"
      });
      setuserData(data.results);
      localStorage.setItem("userData", JSON.stringify(data.results));
    };
    fetchData();

    return () => {};
  }, []);

  return (
    <div>
      {userData.map((user, index) => (
        <div key={index} className="userPanel">
          <img src={user.picture.large}/>
          <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
          <span>{user.location.city}</span>
          <span>{user.email}</span>
          <span>{user.expenses}</span>
        </div>
      ))}
    </div>
  );
}

export default UserDisplay;
