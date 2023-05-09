import React from 'react';
import '../../App.css';
import grains from '../../images/grains.jpeg'
import palmoil from '../../images/palmoil.jpeg'
import groundnutoil from '../../images/groundnutoil.jpeg'
import jollof from '../../images/jollof.jpeg'

function Info() {
  return (
    <main className='info'>
      <div className='info-top'>
        <h1 className='info-header color'>
          Are you new to Middlesbrough? are you having difficulties in locating stores to get your raw foods? or you have never had to cook or buy foodstuffs on your own, don't stop scrolling.
        </h1>
        <p>You have no need to look further than the guide provided on our website as we provide useful information on how to get your favourite <span className='name'>African</span> foodstuffs, recipes and step-by-step procedure for making your <span className='name'>African</span> meals</p>
      </div>

      <div className='loc'>
        <div className='loc-info'>
          <h2>Looking for the right store to get your foodstuffs?</h2>
          <p className='first'>If you are looking for the right store to get your foodstuffs, you should visit <span className='color'>Abdul Cash and Carry</span>. The store is located at 265 Linthorpe Rd, Middlesbrough TS1 4AS. The shop sells all kinds of raw <span className='name'>African</span> foodstuffs, Asian groceries and Caribbean. If you are looking for affordable foodstuffs, Abdul Cash and Carry is strongly recommended.</p>
          <p className='second'>A survey on the perception of the general public on their customer service was positive so you can expect efficiency. You can reach them on <strong>01642240662</strong></p>
          <p>Click the link below to watch a short tour of the store</p>
          <p className='link'><a href='https://youtu.be/56kVsxRILLI'>https://youtu.be/56kVsxRILLI</a></p>
          <h3 className='name'>Opening hours</h3>
          <ul>
            <li>Monday 9:00am - 8:00pm</li>
            <li>Tuesday 9:00am - 8:00pm</li>
            <li>Wednesday 9:00am - 8:00pm</li>
            <li>Thursday 9:00am - 8:00pm</li>
            <li>Friday 9:00am - 8:00pm</li>
            <li>Saturday 9:00am - 8:00pm</li>
            <li>Sunday 10:00am - 7:00pm</li>
          </ul>
        </div>

        <img src={grains} alt='store' />
      </div>

      {/* the next part discusses the importance of African foods */}

      <div className='importance'>
        <h3 className='color'>If you ever find youself asking why you should pick African meals, we are here to erase any doubt in African meals. Africa is blessed with varities of dishes and soup each presenting an entirely different experience as well as the much missed taste that takes you back to Africa.</h3>
        <p>Traditional African foods are:</p>
        <ol>
          <li>Nutritional: They have nutritional values which includes vitamins, minerals and fiber. African foods are mostly fresh and unprocessed making them nutritional.</li>
          <li>Sustainable: Most African foods are grown with natural agricultural and healthy soil which supports healthy living and the foods are easy to preserve.</li>
          <li>Cultural Identity: African foods are important part of cultural identity. When African foods are embraced the African culture is promoted</li>
          <li>Diverse and flavourful: African foods are majorly composed of herbs, spices and vegetables which makes them diverse and flavourful with a wide range of tastes. Finally, African foods contain nutrients that helps to fight chronic diseases such as diabetes and heart diseases</li>
          <li>Promotes Health: Most African foodstuffs like beans, and leafy greens have been studied to lower risk of chronic diseases; helps reduce inflamation and protect against cell damage.</li>
        </ol>
        <p className='my big'>Click on the link below for more benefits of African foods.</p>
        <p className='link'><a href='https://youtu.be/9zhCA36Zhjc'>https://youtu.be/9zhCA36Zhjc</a></p>
        <div className='dishes'>
          <p className='name'>Examples of African dishes are:</p>
          <ul>
            <li>Jollof rice</li>
            <li>Amala</li>
            <li>Eba (garri)</li>
            <li>Akara</li>
            <li>Moiomoi</li>
            <li>Tuwo</li>
            <li>Fried rice</li>
            <li>Yam porridge</li>
            <li>Potato porridge</li>
          </ul>
        </div>

        <div className='soups'>
          <p className='name'>Examples of soups are:</p>
          <ul>
            <li>Ogbono</li>
            <li>Egusi</li>
            <li>Ewedu</li>
            <li>White soup</li>
            <li>Black soup</li>
            <li>Atama soup</li>
            <li>Beans soup (Gbegiri)</li>
            <li>Bitter leaf soup</li>
          </ul>
        </div>

        <div>
          <p className='my color'>A discussion of important African foodstuffs will be incomplete without a quick look at palm oil and groundnut oil which both have a wide range of uses.</p>

          <div className='palmoil'>
            <img src={palmoil} alt='palmoil' />
            <div>
              <h3 className='name'>Palm oil</h3>
              <p>Palm oil is extracted from palm kernel with different uses</p>
              <ol>
                <li>It can be used to make different dishes like Egusi, Ogbono, bitter leaf soup and so on</li>
                <li>It is used in making cosmetics, soaps, shampoo, cleaning products</li>
                <li>It can be used in production of foods such as cake, chocolate, biscuits, margarines and frying fats.</li>
                <li>It can be used to massage to enhance skin elasticity, protects skin from harmful UV radiation, boosts circulation, soothes minor burns, slows down wrinkling of skin, lightens dark spots and blemishes</li>
              </ol>
            </div>
          </div>

          <div className='groundnutoil'>
            <div>
              <h3 className='name'>Groundnut oil</h3>
              <p>Some of the uses and importance of groundnut oil include</p>
              <ol>
                <li>It can be used to make foods such as akara, rice stew, fried rice, jollof rice and so on</li>
                <li>Keeps check on cholesterol levels.</li>
                <li>Prevents cognitive disorders.</li>
                <li>Enhances blood circulation</li>
                <li>Prevents arthritis</li>
                <li>Keeps blood pressure under control</li>
                <li>It is used as an effective remedy for numerous skin conditions such as enzema, rashes and scaly skins</li>
              </ol>
            </div>
            <img src={groundnutoil} alt='groundnutoil' />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className='name'>PROCEDURES & RECIPES</h2>
          <p>This section focuses primarily on helping in areas where you probably need a cook book by listing out the recipes for certain African meals while also providing a link to our videos if you need to see how these meals are made. Our videos provide concise and detailed steps in making the African meals listed below</p>
        </div>

        <div className='jollof'>
          <h3 className='color'>AFRICAN(NIGERIAN) JOLLOF RICE</h3>
          <div className='jollof-body'>
            <div className='j-left'>
              <p>The ingredients for jollof rice are:</p>
              <ol>
                <li>Rice (2 cups)</li>
                <li>Blended pepper (1/2 cup)</li>
                <li>Salt (1/2 spoon)</li>
                <li>Maggi (2 cubes)</li>
                <li>Onions (one full onion)</li>
                <li>Curry and tyme (1/2 spoon each)</li>
                <li>Cray fish (one spoon)</li>
                <li>Stock (meat or chicken water)</li>
                <li>fish, prawns, ponmo (any type of sea food)</li>
                <li>Soy sauce (one spoon)</li>
                <li>Tomato paste (2 spoons)</li>
              </ol>
              <div className='my'>Click on the link below to watch our instructional video on making the African(Nigerian) jollof rice.</div>
              <p className='link'><a href='https://www.youtube.com/watch?v=ODKrJ2xPjUQ'>https://www.youtube.com/watch?v=ODKrJ2xPjUQ</a></p>
            </div>

            <div className='j-right'><img src={jollof} alt='jollof' /></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Info