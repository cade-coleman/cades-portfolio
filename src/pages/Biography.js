import Nav from '../components/Nav';
import '../styles/AppHome.css';


function Biography (){

return(
    <div id='mainWrapper' className="App">
        <Nav/>
      <header class="flex App-header">
        <h1><a id='title' href='https://www.yout-ube.com/watch?v=dQw4w9WgXcQ'>About me</a></h1>
      </header> 
    <div>
      <div className="flex">
        <p id='bio'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo lacus, lobortis et tempus quis, sodales id nulla. Praesent pretium purus blandit, congue quam et, luctus sapien. Integer ac quam sit amet diam accumsan accumsan ut et enim. Phasellus maximus dignissim odio lacinia fermentum. Integer dolor dolor, facilisis tristique diam ut, sollicitudin placerat mauris. Fusce euismod ullamcorper urna, rutrum dictum augue sodales at. Donec vel mauris vitae lorem ultrices efficitur at nec ante. Mauris vitae nisi vitae mauris auctor fringilla sed sit amet nunc. Quisque in molestie augue. Vestibulum maximus a mauris et sollicitudin. Quisque vitae fringilla dui, nec vestibulum odio. Proin eleifend ex arcu, at sollicitudin lacus interdum sed. Integer ac dictum massa.

Donec quam metus, faucibus pulvinar ipsum venenatis, sodales efficitur lorem. Suspendisse quis ante ornare, condimentum arcu blandit, maximus urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut venenatis sagittis elit, sit amet porta leo aliquam vitae. Fusce rhoncus nisi sed ante pulvinar commodo. Sed at eleifend quam. Duis ut nunc ut orci lacinia tempor. Sed in neque sit amet quam pulvinar eleifend sed sed metus. Sed non bibendum enim. Suspendisse non elementum ipsum. Nunc mattis, ex non posuere congue, massa eros posuere lorem, in varius sem libero sit amet dolor. Pellentesque pretium consequat dictum.
        </p>
      <img id='photo1' src={require('../images/CadeHeadshotpng.png')} />
      </div>
    </div>
    
    </div>
  );
}

export default Biography;