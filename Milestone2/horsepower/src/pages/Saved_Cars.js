import React from 'react'
import logo from "../img/logo.png"
import login from "../img/Login.png"
import home from "../img/HOME.png"
import buy from "../img/buy.png"
import rent from "../img/rent.png"
import my_saved_cars from "../img/my_saved_cars.png"
import about from "../img/ABOUT.png"
import forms from "../img/FORMS.png"
import yourPurchases from "../img/yourPurchases.png"
import yourRentals from "../img/yourRentals.png"
import update from "../img/UPDATE.png"
import del from "../img/delete.png"
import {Link} from "react-router-dom"

export function MySavedCars() {
    return (
        
        <div id = 'main_body'>
            <header id='logo'>
    
                <a href = "index.html"><img src= {logo} alt = "Logo"/></a>
    
                <div id='login_button'>
                    
                        <Link to="/Login"><img src={login} alt = "login page button"/></Link>
                    
                    
                </div>

    
            </header>
            <nav>
                
                <ul>
                    <Link to="/"><li><img src={home} alt = "home page button"/></li></Link>
                    <Link to="/Buy"><li><img src = {buy} alt = "buy page button"/></li></Link>
                    <Link to="/Rent"><li><img src = {rent} alt = "rent page button"/></li></Link>
                    <Link to="/My_Saved_cars"><li><img src={my_saved_cars} alt = "todolist page button"/></li></Link>
                    <Link to="/About"><li><img src={about} alt = "about page button"/></li></Link>
                    <Link to="/Contact"><li><img src={forms} alt = "contact us page button"/></li></Link>
                </ul>
                
            </nav>
            <div class = "wrapper">
                <div id = 'content_body' class = "flex-container">
                    <div id = 'purchases' class = 'flex-child purchases'>
                        <div class = "purchaseHeader"><img src = {yourPurchases} alt = "your purchases header"/></div>
                        <img src = 'https://cdn-ds.com/blogs-media/sites/492/2017/09/06091521/2014-Ferrari-LaFerrari-Coupe-For-Sale-Miami-FL_d-1038x375.jpg' class = 'image' alt = "your car image"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                        <br/>
                        <img src = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Veyron_SS.jpg' class = 'image' alt = "your car image"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                        <br/>
                        <img src = 'https://hips.hearstapps.com/hmg-prod/images/2023-porsche-911-gt3-rs-201-1660575621.jpg?crop=0.755xw:0.567xh;0.0833xw,0.257xh&resize=1200:*' class = 'image' alt = "your car image"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                    </div>
                    <div id = 'rentals' class = 'flex-child rentals' >
                        <div class = "rentHeader"><img src = {yourRentals} alt = "your rentals header"/></div>
                        <img src = 'https://mysterio.yahoo.com/mysterio/api/D8A14E92040B4641D8EBE4765441CA2B256D658AC544EEDDD55B442C941BE372/autoblog/resizefill_w1200_h720;quality_85;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://www.blogcdn.com/www.autoblog.com/media/2008/09/lp640_abg_06_opt.jpg' class = 'image' alt = "your car image"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                        <br/>
                        <img src = 'http://cdn.carbuzz.com/gallery-images/1600/702000/700/702768.jpg' class = 'image' alt = "your car image"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                        <br/>
                        <img src = 'https://hips.hearstapps.com/hmg-prod/images/1981-deloreanscreen-shot-2022-05-21-at-8-16-00-am-1653135783.png' class = 'image' alt = "your car image"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                    </div>
                </div>
            </div>
		<p class="discription">
			In your personal page, you can view your most recent purchases, awaiting to be delivered. You have <br/>
			the choice to update your personal information, vehicle specification or shipping address. In the <br/>
			'Your Rentals' section, view your upcoming rentals, and update the where, when and how of your Horse Power <br/>
			experience. 
		</p>
		
        <footer >
            &copy; Florida Institute of Technology
        </footer>
    </div>



                    
   
    )
}