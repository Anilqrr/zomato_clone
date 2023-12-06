import React from 'react'
import Logo from '../images/footer.avif'
import Search from '../images/search.svg'
import Location from '../images/location.svg'
import Menu1 from '../images/menu1.avif'
import Menu2 from '../images/menu2.avif'
import Menu3 from '../images/menu3.webp'
import Filter from '../images/filters.svg'
import Svg from '../images/ch2.svg'
import Pizza from '../images/pizza.avif'
import Cake from '../images/cake.avif'
import Burger from '../images/burger.avif'
import Biryani from '../images/biyani.avif'
import Chicken from '../images/chicken.webp'
import Thali from '../images/thali.avif'
import Mc from '../images/mcdonald.avif'
import Bika from '../images/bikanervala.avif'
import La from '../images/lapino.avif'
import Brijbhog from '../images/brijbhog.avif'
import Bhagat from '../images/bhagat.avif'
import P1 from '../products/p1.avif'
import P2 from '../products/p2.avif'
import P3 from '../products/p3.avif'
import P4 from '../products/p4.avif'
import P5 from '../products/p5.avif'
import P6 from '../products/p6.avif'
import P7 from '../products/p7.avif'
import P8 from '../products/p8.jpg'
import P9 from '../products/p9.avif'
import Rating from '../products/rating.svg'
import Footer from '../products/footer.webp'
import {Link} from 'react-router-dom'
export default function Foods() {

  return (<>
    <div className='nav'>
      <div className="logo">
         <Link to='/'><img src={Logo} alt="" /></Link>
      </div>
      <div className="search">
        <div className="select">
        <img src={Location} alt="" />
      <select name="" id="">
        <option>Best Food</option>
      </select>
        </div>
      <div className="middle"></div>
      <div className="input">
        <img src={Search} alt="" />
      <input type="text" placeholder="Search for restaurant, cuisine or a dish"/>
      </div>
      </div>
      <ul>
        <li>Login</li>
        <li>Signup</li>
      </ul>
      </div>
    <div className="menus">
      <div className="box">
        <div className="img">
        <img src={Menu1} alt="" />
        </div>
        <h1>Delivery</h1>
      </div>
      <div className="box">
        <div className="img">
        <img src={Menu2} alt="" />
        </div>
        <h1>Dining Out</h1>
      </div>
      <div className="box">
        <div className="img">
        <img src={Menu3} alt="" />
        </div>
        <h1>Nightlife</h1>
      </div>
    </div>
    <div className="line"></div>
    <div className="food-option">
      <div className="box">
        <img src={Filter} alt="" />
        <h4>Filters</h4>
      </div>
      <div className="box">
        {/* <img src={Filter} alt="" /> */}
        <h4>Rating: 4.0+</h4>
      </div>
      <div className="box">
        {/* <img src={Filter} alt="" /> */}
        <h4>Pure Veg</h4>
      </div>
      <div className="box">
        <h4>Cuisines</h4>
        <img src={Svg} alt="" />
      </div>
    </div>
    <div className="food-cat">
      <div className="title">
      <h1>Inspiration for your first order</h1>
      </div>
      <div className="cat">
      <div className="box">
        <img src={Pizza} alt="" />
        <p>Pizza</p>
      </div>
      <div className="box">
        <img src={Cake} alt="" />
        <p>Cake</p>
      </div>
      <div className="box">
        <img src={Burger} alt="" />
        <p>Burger</p>
      </div>
      <div className="box">
        <img src={Biryani} alt="" />
        <p>Biryani</p>
      </div>
      <div className="box">
        <img src={Chicken} alt="" />
        <p>Chicken</p>
      </div>
      <div className="box">
        <img src={Thali} alt="" />
        <p>Thali</p>
      </div>
    </div>
    </div>

    <div className="brands">
      <div className="title">
      <h1>Top brands for you</h1>
      </div>
      <div className="cat">
      <div className="box">
        <img src={Mc} alt="" />
        <p>McDonald's</p>
        <h6>20 min</h6>
      </div>
      <div className="box">
        <img src={Bika} alt="" />
        <p>Bikanervala</p>
        <h6>32 min</h6>
      </div>
      <div className="box">
        <img src={La} alt="" />
        <p>La Pino'z Pizza</p>
        <h6>21 min</h6>
      </div>
      <div className="box">
        <img src={Bhagat} alt="" />
        <p>Bhagat Halwai</p>
        <h6>22 min</h6>
      </div>
      <div className="box">
        <img src={Brijbhog} alt="" />
        <p>Brijbhog Mishthan Bhandar - Brij Rasayanam</p>
        <h6>20 min</h6>
      </div>
      </div>
      </div>
      <div className="products">
        <h1>Best Food in india</h1>
        <div className="p-wrap">
        <div className="box">
          <div className="img">
            <img src={P1} alt="" />
          </div>
          <div className="r-name flex">
            <h3>Brij</h3>
            <div className="rating"><p>4.3</p> <img src={Rating} alt="" /></div>
          </div>
          <div className="pinfo flex">
            <p>M Cafe, lo</p>
             <h4>₹150 for one</h4>
             </div>
             <div className="time"><h6>20 min</h6></div>
        <hr />
        <div className="p-footer flex">
          <img src={Footer} alt="" />
          <p>Follows all Max Safety measures to ensure your 
            food is safe</p>
        </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={P2} alt="" />
          </div>
          <div className="r-name flex">
            <h3>Brij</h3>
            <div className="rating"><p>4.3</p> <img src={Rating} alt="" /></div>
          </div>
          <div className="pinfo flex">
            <p>M Cafe, lo</p>
             <h4>₹150 for one</h4>
             </div>
             <div className="time"><h6>20 min</h6></div>
        <hr />
        <div className="p-footer flex">
          <img src={Footer} alt="" />
          <p>Follows all Max Safety measures to ensure your 
            food is safe</p>
        </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={P3} alt="" />
          </div>
          <div className="r-name flex">
            <h3>Brij</h3>
            <div className="rating"><p>4.3</p> <img src={Rating} alt="" /></div>
          </div>
          <div className="pinfo flex">
            <p>M Cafe, lo</p>
             <h4>₹150 for one</h4>
             </div>
             <div className="time"><h6>20 min</h6></div>
        <hr />
        <div className="p-footer flex">
          <img src={Footer} alt="" />
          <p>Follows all Max Safety measures to ensure your 
            food is safe</p>
        </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={P4} alt="" />
          </div>
          <div className="r-name flex">
            <h3>Brij</h3>
            <div className="rating"><p>4.3</p> <img src={Rating} alt="" /></div>
          </div>
          <div className="pinfo flex">
            <p>M Cafe, lo</p>
             <h4>₹150 for one</h4>
             </div>
             <div className="time"><h6>20 min</h6></div>
        <hr />
        <div className="p-footer flex">
          <img src={Footer} alt="" />
          <p>Follows all Max Safety measures to ensure your 
            food is safe</p>
        </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={P5} alt="" />
          </div>
          <div className="r-name flex">
            <h3>Brij</h3>
            <div className="rating"><p>4.3</p> <img src={Rating} alt="" /></div>
          </div>
          <div className="pinfo flex">
            <p>M Cafe, lo</p>
             <h4>₹150 for one</h4>
             </div>
             <div className="time"><h6>20 min</h6></div>
        <hr />
        <div className="p-footer flex">
          <img src={Footer} alt="" />
          <p>Follows all Max Safety measures to ensure your 
            food is safe</p>
        </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={P6} alt="" />
          </div>
          <div className="r-name flex">
            <h3>Brij</h3>
            <div className="rating"><p>4.3</p> <img src={Rating} alt="" /></div>
          </div>
          <div className="pinfo flex">
            <p>M Cafe, lo</p>
             <h4>₹150 for one</h4>
             </div>
             <div className="time"><h6>20 min</h6></div>
        <hr />
        <div className="p-footer flex">
          <img src={Footer} alt="" />
          <p>Follows all Max Safety measures to ensure your 
            food is safe</p>
        </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={P7} alt="" />
          </div>
          <div className="r-name flex">
            <h3>Brij</h3>
            <div className="rating"><p>4.3</p> <img src={Rating} alt="" /></div>
          </div>
          <div className="pinfo flex">
            <p>M Cafe, lo</p>
             <h4>₹150 for one</h4>
             </div>
             <div className="time"><h6>20 min</h6></div>
        <hr />
        <div className="p-footer flex">
          <img src={Footer} alt="" />
          <p>Follows all Max Safety measures to ensure your 
            food is safe</p>
        </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={P8} alt="" />
          </div>
          <div className="r-name flex">
            <h3>Brij</h3>
            <div className="rating"><p>4.3</p> <img src={Rating} alt="" /></div>
          </div>
          <div className="pinfo flex">
            <p>M Cafe, lo</p>
             <h4>₹150 for one</h4>
             </div>
             <div className="time"><h6>20 min</h6></div>
        <hr />
        <div className="p-footer flex">
          <img src={Footer} alt="" />
          <p>Follows all Max Safety measures to ensure your 
            food is safe</p>
        </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={P9} alt="" />
          </div>
          <div className="r-name flex">
            <h3>Brij</h3>
            <div className="rating"><p>4.3</p> <img src={Rating} alt="" /></div>
          </div>
          <div className="pinfo flex">
            <p>M Cafe, lo</p>
             <h4>₹150 for one</h4>
             </div>
             <div className="time"><h6>20 min</h6></div>
        <hr />
        <div className="p-footer flex">
          <img src={Footer} alt="" />
          <p>Follows all Max Safety measures to ensure your 
            food is safe</p>
        </div>
        </div>
       </div>
      </div>
    </>
  )
}
