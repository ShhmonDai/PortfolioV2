import React from 'react';
import { useEffect, useState } from 'react';
import './loader.css'


const Loader = () => {

  const [show, setShow] = useState('visible');

  useEffect(() => {
    // when the component is mounted, the loader is displayed for 3 seconds
    setTimeout(() => {
      setShow('hidden');
    }, 3000);
  }, []);  



  const opacityState = {
    'visible': 'opacity-100',
    'hidden': 'opacity-0',
  };

  return (

    show &&
    <div id='loader'>
        <div className={`ipl-progress-indicator ${opacityState[show]} `} id="ipl-progress-indicator">

              <div className="ipl-progress-indicator-head">
                  <div className="first-indicator"></div>
                  <div className="second-indicator"></div>
              </div>

              <div className="insp-logo-frame">

                  <svg className="svg-icon" viewBox="0 0 20 20">
                      <path fill="none" d="M3.183,9.381H0.704v1.239h2.479V9.381z M2.989,16.135l0.876,0.877l1.752-1.754l-0.876-0.875L2.989,16.135z
                	 M17.012,3.866l-0.877-0.876l-1.752,1.752l0.875,0.876L17.012,3.866z M10.62,0.705H9.38v2.479h1.239V0.705z M5.618,4.742
                	L3.865,2.989L2.989,3.866l1.753,1.752L5.618,4.742z M14.383,15.258l1.752,1.754l0.877-0.877l-1.754-1.752L14.383,15.258z
                	M9.38,19.297h1.239v-2.48H9.38V19.297z M16.816,9.381v1.239h2.479V9.381H16.816z M10,5.042c-2.738,0-4.958,2.22-4.958,4.958
                	c0,2.738,2.22,4.959,4.958,4.959c2.738,0,4.958-2.221,4.958-4.959C14.958,7.263,12.738,5.042,10,5.042z M10,13.727
                	c-2.058,0-3.726-1.668-3.726-3.727c0-2.058,1.668-3.726,3.726-3.726c2.059,0,3.727,1.668,3.727,3.726
                	C13.727,12.059,12.059,13.727,10,13.727z"></path>
                  </svg>

                  <svg width="300" className="insp-logo-frame-svg" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 100">
                      <text fill="#f5bb96" fontSize="100" fontFamily="Verdana" x="0" y="0">Welcome</text>
                  </svg>



              </div>

          </div>

    </div> 

  )
}

export default Loader