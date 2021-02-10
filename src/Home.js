import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                    <div className="home__row">
                        <Product 
                        id="12321341"
                        title="Homall Gaming Chair Racing Office Chair High Back PU Leather Computer Desk Chair Executive and Ergonomic Swivel Chair with Headrest and Lumbar Support (Black/White)"
                        price={24.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/717nldQZb8L._AC_SL1500_.jpg"
                        rating={4}
                        />
                        <Product 
                        id="49538094"
                        title="BEBONCOOL PS4 Controller Charger, Controller USB Charging Station Dock for DualShock 4, PlayStation 4 Charging Station for Sony Playstation4 / PS4 / PS4 Slim / PS4 Pro Controller-Black"
                        price={14.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81UWP87LpwL._AC_SL1500_.jpg"
                        rating={4}
                        />
                    </div>
                    <div className="home__row">
                    <Product 
                        id="11082000"
                        title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Silver (Latest Model)"
                        price={1199}
                        image="https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg"
                        rating={5}
                        />
                        <Product 
                        id="12022002"
                        title="New_Dell_Alienware_m15 R1 15.6 FHD IPS Display Gaming Laptop, i7-9750H(up to 4.5Ghz w/Turbo Boost), RTX 2070 8GB Max-Q Design, 32GB RAM, 1TB SSD, HDMI, Win 10 Home w/ Santex Accessory (1TB SSD)"
                        price={1899}
                        image="https://images-na.ssl-images-amazon.com/images/I/61IOuhRpEkL._AC_SL1000_.jpg"
                        rating={4}
                        />
                        <Product 
                        id="155258565"
                        title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
                        price={25.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg"
                        rating={4}
                        />
                    </div>
                    <div className="home__row">
                    <Product 
                        id="12321341"
                        title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4k 32Q50 Series Smart TV"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
                        rating={5}
                        />
                    </div>
                </div>
            
            </div>
    )
}

 export default Home
