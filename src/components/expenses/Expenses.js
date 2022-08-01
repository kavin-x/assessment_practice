import React, { useState } from "react";
import "./Expenses.css";

function Expenses() {
  const userDetails = JSON.parse(localStorage.getItem("userData")) || [];
  console.log(userDetails);
  const searchedUser = JSON.parse(localStorage.getItem("searchedUser")) || [{}];
  const [searchUser, setsearchUser] = useState();
  const [displayUser, setdisplayUser] = useState(searchedUser);
  const [Expense, setExpense] = useState(0);
  const [ExpenseAmount, setExpenseAmount] = useState(0);

  const getUser = (search) => {
    let user = userDetails.filter((user) => user.name.first == search);
    localStorage.setItem("searchedUser", JSON.stringify(user));
    setsearchUser(user.name);
    setdisplayUser(user.name);
  };

  const addExpense = () => {
    getUser(searchUser);
    
    userDetails.forEach((element) => {
      if (element.name.first === searchedUser[0].name.first) {
        element.expensename = Expense;
        element.salary = element.salary - ExpenseAmount;
      }

    });

    console.log(userDetails);
    localStorage.setItem("userData", JSON.stringify(userDetails));
  };

  return (
    <div className="container_e">
      <input
        onChange={(e) => setsearchUser(e.target.value)}
        placeholder="Enter Name"
      />
      {searchedUser < null
        ? "no user"
        : searchedUser.map(() => (
            <div className="userpanel">
              <img src={searchedUser[0].picture.large}  className="user_image"/>
              <h1>{`${searchedUser[0].name.title} ${searchedUser[0].name.first} ${searchedUser[0].name.last}`}</h1>
              <span>{searchedUser[0].location.city}</span>
              <span>{searchedUser[0].email}</span>
              <span>{searchedUser[0].salary}</span>
            </div>
          ))}
          <div id="exp_div">
      <input
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Expense NOTE"
      />
      <input
        onChange={(e) => setExpenseAmount(e.target.value)}
        placeholder="Expense Amount"
      />
      <button onClick={() => addExpense()} id="add_btn">Add</button>
      </div>
    </div>
  );
}

export default Expenses;
