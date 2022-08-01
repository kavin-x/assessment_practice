import React, { useEffect, useState } from "react";
import "./UserDisplay.css"
function UserDisplay() {
  const userDetails = localStorage.getItem("userData") || '[]';
  const userDataUrl = "https://randomuser.me/api/?results=10";
  const [userData, setuserData] = useState(JSON.parse(userDetails));

  const del=()=>{
    localStorage.setItem("userData", JSON.stringify(''))
    setuserData([])
  }
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(userDataUrl);
      let data = await response.json();
      data.results.forEach(element => {
        element.salary=20000
      });
      console.log(data)
      if(userData==[]  )
      {setuserData(data.results);
      localStorage.setItem("userData", JSON.stringify(data.results));}
    };
    fetchData();

    return () => {};
  }, []);

  return (
    <div className="container">
      <div id="gallery_view">
       {userData.length>0 && userData.map((user, index) => (
        <div key={index} className="userPanel">
          <img src={user.picture.large} className="images_id"/>
          <div className="info">
          <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
          <span>{user.location.city}</span>
          <span>{user.email}</span>
          <span>{user.salary}</span>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default UserDisplay;
