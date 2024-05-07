import React from 'react';
import './App.css';
import Footer from './Footer';
import { useState } from 'react';
const CarInfo = (props) => (
<div className="card-info">
<p>This car has {props.hp} HP and Max Speed {props.max}</p>
<button className='card-button' onClick={props.onClick}>Buy Now !</button>
</div>
);

const Car = (props) => {
  const handleBuy = () => {
    alert(`You want to buy ${props.brand}`);
  };
  return (
    <div className="card">
      <img src={props.image} alt="Car" className="car-image" />
      <h1>{props.brand}</h1>
      <CarInfo max={props.max} hp={props.hp} onClick={handleBuy} />
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const cars = [
    {
      brand: "Fiat",
      max: "200",
      hp: "100",
      image: "https://www.shutterstock.com/image-photo/woburnbedsuk-august-19th-2023-2019-260nw-2351334283.jpg"
    },
    {
      brand: "BMW",
      max: "250",
      hp: "150",
      image: "https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357_640.jpg"
    },
    {
      brand: "Tesla",
      max: "250",
      hp: "180",
      image: "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-s-107-6572200e43fa1.jpg?crop=0.473xw:0.355xh;0.254xw,0.341xh&resize=1200:*"
    },
    {
      brand: "Ferrari",
      max: "280",
      hp: "190",
      image: "https://etimg.etb2bimg.com/thumb/msid-101380407,imgsize-292630,width-1200,height=765,overlay-etauto/passenger-vehicle/ferrari-launches-two-hybrid-models-in-limited-series-based-on-sf90-supercar.jpg"
    },
    {
      brand: "Porsche",
      max: "250",
      hp: "180",
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/Cayenne-2024/9903/Porsche-Cayenne-2024-/1681882894783/rear-left-view-121.jpg"
    },
    {
      brand: "Nissan",
      max: "200",
      hp: "100",
      image: "https://hips.hearstapps.com/hmg-prod/images/2024-nissan-gt-r-119-1673621285.jpg?crop=0.655xw:0.873xh;0,0.0405xh&resize=768:*"
    },
    {
      brand: "Audi",
      max: "200",
      hp: "100",
      image: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT37G9MpVr6WVAmsOCLQK_A5hfFf4goEVqIvxKpBgMQASfEuABCcnA5gEmbcJRKwH8ZnsmBkYWCuAjEgGEBDUMCASCLO7uIY4evoEAwDGbomn2QAAAA?wid=550"
    },
    {
      brand: "Toyota",
      max: "190",
      hp: "158",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLtvr6nwGlfZBFQ3NSOdGDG9euo-AAdnngnOa_kAWHg&s"
    },
  ];
  return (
    <div>
    <header className="header">
      <h1>Aziz ShowRoom</h1>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Cars</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <span>{isLoggedIn ? 'Logged in' : 'Not logged in'}</span>

      </nav>
    </header>
    <div className="container">
        {}
        {cars.map((car, index) => (
          <Car key={index} {...car} />
        ))}
      </div>
    <Footer/>
    </div>
)
}

export default App;
