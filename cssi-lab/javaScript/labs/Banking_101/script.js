// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let customer_name;
let balance;
let password;
let logged_in;

function openAccount(name,pass,startingBalance){
  if (name === undefined || pass === undefined) {
    return "You must enter a username and password when opening an account."
  }
  else {
    if (startingBalance != undefined){
      balance = startingBalance;
    } else {
      balance = 0;
    }
    customer_name = `${name}`;
    password = `${pass}`;
    return `${customer_name} has opened a new account with a balance of $${balance}`
  }
}

function deposit(value){
  if (logged_in != true){
    return "User must log in."
  }
  else {
    balance += value;
    return `${customer_name} has deposited ${value}. ${customer_name}'s total balance is ${balance}'`
  }
}

function withdraw(value){
  if (logged_in != true){
    return "User must log in."
  }
  else {
    if (balance < value) {
      return `Sorry ${customer_name}, you do not have enough money in your account. You need ${Math.abs(balance - value)} more dollars.`
    }
    else {
      balance -= value;
      return `${customer_name} has withdrawn ${value}. ${customer_name} has ${balance} remaining.'`
    }
  }
}

function logIn(username, pass){
  if (username === customer_name && pass === password) {
    logged_in = true;
    return `${customer_name} has logged in.`
  } else {
    return "Incorrect log in information."
  }
}

function logOut(){
  logged_in = false;
  return `${customer_name} has logged out.`
}

// Write your script below
console.log("script is running...");
console.log(openAccount("Pseudonym McFakename","realName123", 300));
console.log(logIn("Pseudonym McFakename","realName123"));
console.log(deposit(50));
console.log(logOut());
console.log(withdraw(500));
console.log(logIn("Pseudonym McFakename","realName123"));
console.log(withdraw(500));
