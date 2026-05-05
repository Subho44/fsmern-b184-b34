import React from 'react'

const About = () => {
//basic variables
let productname = "Iphone";
let price = 560000;
const category = "mobile";

//condition
let productprice = 1000;
let res = "";

if(productprice >= 500) {
  res = "product good";
} else {
  res = "product bad";
}
//function
function add(x,y) {
  return x+y ;
}
//arrow function
const multi = (a,b)=>  a*b;
//arrow fun singel
const msg = m=> "welcome to india ";
//array
const players = ["Virat kohli","rohit","msd","rahul"];
const player = [
  {name:"virat kohli", team:"india", rank:1},
  {name:"virat kohli", team:"india", rank:1},
  {name:"virat kohli", team:"india", rank:1},
  {name:"virat kohli", team:"india", rank:1},
  {name:"virat kohli", team:"india", rank:1},
  {name:"virat kohli", team:"india", rank:1},
  {name:"virat kohli", team:"india", rank:1},

];
//spread operator
const a = [1,2];
const b = [...a,7,8];

//template literal
let name = "vk";
const login = false;

const message = `player name is ${name}`;
  return <>

  <div>
    <h1>Productname:{productname}</h1>
    <p>{price}</p>
    <p>{category}</p>
  </div>
  <div>
    product price: {res}
  </div>
  <div>
    <p>{add(5,9)}</p>
    <p>{multi(7,8)}</p>
    <p>{msg()}</p>
  </div>
  <div>

    {players.map(x=>(
      <li>{x}</li>
    ))}
  </div>
  <div>
    {player.map(x=>(
      <div>
      <p>{x.name}</p>
      <p>{x.team}</p>
      <p>{x.rank}</p>
      </div>

    ))}
  </div>
  <div>
    {b}
  </div>
  <div>
    {message}
  </div>
  <div>
    {login ? "user is login" : "user is not login"};
  </div>
  
  </>
}

export default About