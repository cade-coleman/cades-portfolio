import Nav from '../components/Nav/Nav';
import Email from '../components/emailForm/Email';
import '../styles/AppHome.css';



function Contact (){
  
  return(
    <div id='mainWrapper' className="">
        <Nav/>
      <header className="App-header">
        <h1 id='title'>Contact</h1>
        <div class="grid">
      </div>
      </header> 
      <div className='flex spaceAround'>
        
        <Email/>
        </div>
    
    
    </div>
  );
}

export default Contact;