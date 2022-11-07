import Nav from '../components/Nav/Nav';
import '../styles/AppHome.css';


function Biography (){

return(
    <div className="App mainWrapper">
        <Nav/>
      <header className="flex App-header">
        <h1><a id='title' href='https://www.yout-ube.com/watch?v=dQw4w9WgXcQ'>About me</a></h1>
      </header> 
    <div>

      {/* Biography paragraph */}
      <div className="flex mt">
        <div className='flex-column'>
          <p className='bio'>
        Hello! My name is Cade  </p>
        <p className='bioBody'>I'm currently in the process of transitioning from the service industry to software development. Although at first glance these industries may seem very different, I believe that both have serveral core similarities that have prepared me to work in tech. </p>
        <p className='bioBody'>
          In my service industry career I learned many different lessons, through bartending, serving in fine dining, or managing. First and foremost, the most valuable trait a worker can have is the desire to learn. In each job I've worked, I have found that the driving factor to success is having aspiration for furthering understanding of all tasks performed in my job.
        </p>
        <p className='bioBody'>
          Another lesson that prepared me to manage and serve customers was learning to listen deeply. When training employees I prioritized teaching that excellent service started by asking the right questions. Deep listenng ensures that all needs were addressed and met, even some unspoken ones.
        </p>
        <p className='bioBody'>
        In conclusion, I believe these principles transcend service industry and create value in me as an employee.
        </p>
        </div>
        
        {/* Biography photo */}
      <img id='photo1' src={require('../images/CadeHeadshotpng.png')} />
      </div>
    </div>
    
    </div>
  );
}

export default Biography;