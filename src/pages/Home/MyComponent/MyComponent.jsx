import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MyComponent.css';

const MyComponent = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  
    return (
      <div>
        <div className='box' data-aos="flip-left" data-aos-duration="3000">
            <h1>Hello brother!!!</h1>
        </div> <br></br> <br></br>
        <div className='box' data-aos="flip-left" data-aos-duration="3000">
            <h1>Hello brother!!!</h1>
        </div> <br></br> <br></br>
        <div className='box' data-aos="flip-left" data-aos-duration="3000">
            <h1>Hello brother!!!</h1>
        </div> <br></br> <br></br>
        <div className='box' data-aos="flip-left" data-aos-duration="3000">
            <h1>Hello brother!!!</h1>
        </div> <br></br> <br></br>
        <div className='box' data-aos="flip-left" data-aos-duration="3000">
            <h1>Hello brother!!!</h1>
        </div> <br></br> <br></br>
        <div className='box' data-aos="flip-left" data-aos-duration="3000">
            <h1>Hello brother!!!</h1>
        </div> <br></br> <br></br>
        <div className='box' data-aos="flip-left" data-aos-duration="3000">
            <h1>Hello brother!!!</h1>
        </div> <br></br> <br></br>
        
      </div>
    );
  };
  
  export default MyComponent;
  