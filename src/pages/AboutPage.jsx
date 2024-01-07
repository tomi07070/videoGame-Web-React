import React from 'react'
import img1 from '../images/img1.gif'
import img2 from '../images/img2.gif'


export const AboutPage = () => {
  return (
    <>
      <div className='img-a-c'>
        <img className='img-a' src={img1} alt="" />
      </div>
      <p className='p-a'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem reprehenderit nulla ipsa omnis architecto
         beatae corporis. Quasi magnam eius maxime consequatur nemo, aliquid molestias impedit saepe quod et doloribus!</p>
      <div className='cont-a'>
        <img className='img2-a' src={img2} alt="" />
        <h1 className='h1-a'>Our people</h1>
        <p className='p2-a'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium non ad adipisci ipsum vero? Ut,
           assumenda iure nesciunt explicabo reiciendis debitis qui quia dolor maxime deserunt neque, quaerat labore!</p>
      </div>
    </>
  )
}
