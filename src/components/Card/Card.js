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
        <a className='cardText' target='_blank' href="https://backstage-connection.herokuapp.com/"><div class="card">
          <img class="photo2"></img>
          <p>Backstage Connection is a forum website</p>
        </div></a>
        <a className='cardText' target="_blank" href="https://cade-coleman.github.io/STAR-WARS-triviaGame/"><div class="card cardText">
          <img class="photo3"></img>
          <p >Put your StarWars knowledge to the test with this fun vanilla Javascript, CSS, and HTML trivia game!</p>
        </div></a>
      </div>

      <div class="cardHolder">
        <a className='cardText' target='_blank' href="https://sergeyholin.github.io/Have-A-Laugh/"><div class="card">
          <img class="photo4"></img>
          <p>Have a Laugh is here to provide some humor to work day. Simply choose your category of jokes you want to see, then start having a laugh!</p>
        </div></a>
        <a className='cardText' target="_blank" href="https://github.com/cade-coleman/Team-Builder"><div class="card">
          <img class="photo5"></img>
          <p>This command line application helps to build</p>
        </div></a>
        <a className="cardText" target="_blank" href="https://cade-coleman.github.io/Javascript-Password-Generator/"><div class="card">
          <img class="photo6"></img>
          <p>This Password generator is ran on vailla Javascript, Htmal, and CSS.</p>
        </div></a>
      </div>
    </div>
  );
}
