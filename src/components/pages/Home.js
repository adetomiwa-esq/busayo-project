import React from 'react';
import efo from '../../images/efo.jpg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className='home'>
        <section className='left'>
          <div>
          <h1>Your <span className='green'>Go-to</span> website for useful information on <span className='name'>African</span> meals</h1>
          <p>Welcome to <span className='name'>Afrifoods</span>, the home of your <span className='name'>African</span> dishes! Our website is dedicated to making your stay in Middlesbrough remain memorable by keeping you close to the <span className='name'>African</span> meals you love so much.</p>
          <Link to='/info' className='link'><button className='get-started'>Get Started</button></Link>
          </div>
        </section>
        <section className='right'>
          <img src={efo} alt='amala' />
        </section>
    </main>
  )
}

export default Home