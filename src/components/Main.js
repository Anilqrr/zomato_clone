import React from "react";
import { Link } from "react-router-dom";
import Flag from "../images/in.png";

export default function Main(props) {
  return (<>
    <main>
      <div className="info">
        <h2>Popular locations in</h2>
        <div className="flag">
          <img src={Flag} alt="India Flag" />
        </div>
        <p className="india">India</p>
      </div>
      <div className="p-info">
        <p>
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, Zomato covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </p>
      </div>
      <div className="container">
        <div className="states">
          <Link to='/bestfoods'><div className="box">
            <p className="first">Agra
            Restaurants</p>
            <p className="gt">&gt;</p>
            {/* <p>Agra <br/>
            Restaurants</p>
            <p className="gt">&gt;</p> */}
          </div></Link>
          <Link to='/bestfoods'><div className="box">
            <p className="first">Agra
            Restaurants</p>
            <p className="gt">&gt;</p>
          </div></Link>
          <Link to='/bestfoods'><div className="box">
            <p className="first">Agra
            Restaurants</p>
            <p className="gt">&gt;</p>
          </div></Link>
          <Link to='/bestfoods'><div className="box">
            <p className="first">Agra
            Restaurants</p>
            <p className="gt">&gt;</p>
          </div></Link>
          <Link to='/bestfoods'><div className="box">
            <p className="first">Agra
            Restaurants</p>
            <p className="gt">&gt;</p>
          </div></Link>
          <Link to='/bestfoods'><div className="box">
            <p className="first">Agra
            Restaurants</p>
            <p className="gt">&gt;</p>
          </div></Link>
        </div>
      </div>
    </main>
    </>
  );
}
