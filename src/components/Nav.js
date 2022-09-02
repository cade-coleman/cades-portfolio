import './nav.css';
import React, { useState }  from 'react';


function Nav (){

const hello = false;

const [renderHome, setHome] = useState(<p><a class='navLink' href='/'>Home</a></p>)

const homeButton = () => {
    const hello = true;
}


return (<div class="main space-around">

{renderHome}
<p><a class='navLink' href='/aboutMe'>About Me</a></p>
<p><a class='navLink' href='/portfolio'>Portfolio</a></p>
<p><a class='navLink' href='/contact'>Contact</a></p>
</div>
);
}

export default Nav;