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
