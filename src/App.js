// import React from 'react'
// import './App.scss';

// const pictures = new URL('../img/bg.jpg',import.meta.url)

// function App() {
//   return (
//     <div className='App'> 
//       <p>Blogs</p> 
//       <div >
          
//         <img className='bg' alt='' src={pictures}/>
//         </div>       
//     </div>
//   );
// }

// export default App;

import './App.scss'
import {FaBehance, FaDribbble} from 'react-icons/fa'
import {IoAirplaneOutline, IoChevronForwardCircle, IoStar, IoMailOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib'

function App() {
  return(
    <>
      <header>
        <div className='logo_wrapper'>dev<span>amit</span></div>
        <div className='menu_container'>
          <span>
            <IconContext.Provider value={{color:'#000', size: '18px', className:'icon_container'}}>
              <div className='icon'><FaBehance/></div>
              <div className='icon'><FaDribbble/></div>
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider value={{ color: '#000', size: '18px' }}>
              <div className='icon'><IoMailOutline /></div>
              hello@example.co
            </IconContext.Provider>
          </span>
          <span className='menu'>
            <span></span>   
            <span></span>
            <span></span>     
          </span>
        </div>
      </header>




      <div className='content_wrapper'>
        <div className='left_content_wrapper'>
          <h2>
            <span>Design focused</span>
            <span>Startups for startups.</span>
          </h2>

          <p>kecjrnhfleghb gkrehfilwk ejhrnfjkrwkuerhfilkrdh <br/>
           gukegf kursh kjhfnvught ghguh irghfuhtuh gil rflirghkdj.</p>


           <div className='btn_group'>
             <div className='btn btn_primary'>Hire me
              <IconContext.Provider value={{ color: '#14da8f', size: '25px' }}>
                <IoChevronForwardCircle />
              </IconContext.Provider>             
             </div>
             <div className='btn btn_secondary'>
               Live Chat
             </div>
           </div>
           <div className='review_container'>
            <p className='total_reviews'>64+ reviews</p>
           </div>
        </div>


        <div className='right_content_wrapper'></div>
      </div>
    </>
  )
}

export default App;