import Nav from '../components/Nav/Nav';
import Email from '../components/emailForm/Email';
import '../styles/AppHome.css';



function Contact (){
  
  return(
    <div id='mainWrapper' className="">
        <Nav/>
      <header className="App-header">
        <h1><a id='title'>Contact</a></h1>
        <div class="grid">
      </div>
      </header> 
      <div className='flex spaceAround'>
        <Email/>
        <Email/>
        </div>
    
    
    </div>
  );
}

export default Contact;