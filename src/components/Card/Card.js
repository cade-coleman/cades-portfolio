import "./card.css";
import React, { useState } from "react";

export default function Card() {
  return (
    <div>

         <div>
            <p class='text1'>This is where I showcase a few
             of my core compotencies through projects and games. </p>
        </div>
       
      <div class="cardHolder">
        <a className='cardText' target='_blank' href="https://safe-brushlands-76056.herokuapp.com/"><div class="card">
          <img class="photo1"></img>
          <p>Spot light is a Fullsatck MERNG application designed to help entertainment industry professionals to connect and network</p>
        </div></a>
        <a href=""><div class="card">
          <img class="photo1"></img>
        </div></a>
        <a className='cardText' target="_blank" href="https://cade-coleman.github.io/STAR-WARS-triviaGame/"><div class="card cardText">
          <img class="photo3"></img>
          <p >Put your StarWars knowledge to the test with this fun vanilla Javascript, CSS, and HTML trivia game!</p>
        </div></a>
      </div>

      <div class="cardHolder">
        <a href=""><div class="card">
          <img class="photo1"></img>
        </div></a>
        <a href=""><div class="card">
          <img class="photo1"></img>
        </div></a>
        <a href=""><div class="card">
          <img class="photo1"></img>
        </div></a>
      </div>
    </div>
  );
}
