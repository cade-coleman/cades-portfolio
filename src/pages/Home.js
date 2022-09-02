import '../styles/AppHome.css';
import Nav from '../components/Nav';


function Home (){
return(
    <div id='mainWrapper' className="App">
        <Nav/>
        <br></br>
        <br></br>
      <header className="App-header">
        <h1><a id='title' href='https://www.yout-ube.com/watch?v=dQw4w9WgXcQ'>Cade Coleman</a></h1>
      </header> 
      <div class='typewriter' >
        <h1>Welcome to my react portfolio, I hope you enjoy! </h1>
      </div>
    </div>
  );
}

export default Home;