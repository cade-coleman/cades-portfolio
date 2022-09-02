import Nav from '../components/Nav';
import '../styles/AppHome.css';
import Card from '../components/Card'


function Portfolio (){

return(
    <div id='mainWrapper' className="App">
        <Nav/>
      <header className="App-header">
        <h1><a id='title'>Portfolio</a></h1>
      </header> 
      <Card/>
    </div>
  );
}

export default Portfolio;