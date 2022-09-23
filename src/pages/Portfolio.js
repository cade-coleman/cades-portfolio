import Nav from '../components/Nav/Nav';
import '../styles/AppHome.css';
import Card from '../components/Card/Card'


function Portfolio (){

return(
    <div id='mainWrapper' className="App">
        <Nav/>
      <header className="App-header">
        <h1 id='title'>Portfolio</h1>
      </header> 
      <Card/>
    </div>
  );
}

export default Portfolio;