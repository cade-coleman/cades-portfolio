import './nav.css';
import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

function Nav (){


const [renderHome, setHome] = useState(<p><Link className='navLink' to='/'>Home</Link></p>)

return (<div className="main space-around">

{renderHome}
<p><Link className='navLink' to='/aboutMe'>About Me</Link></p>
<p><Link className='navLink' to='/portfolio'>Portfolio</Link></p>
<p><Link className='navLink' to='/contact'>Contact</Link></p>
</div>
);
}

export default Nav;