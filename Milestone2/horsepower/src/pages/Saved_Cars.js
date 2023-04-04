import React from 'react'

import yourPurchases from "../img/yourPurchases.png"
import yourRentals from "../img/yourRentals.png"
import update from "../img/UPDATE.png"
import del from "../img/delete.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
export function MySavedCars() {
    return (

        <div id = 'main_body'>
            <Header />
            <Nav />
            <div class = "wrapper">
                <div id = 'content_body' class = "flex-container">
                    <div id = 'purchases' class = 'flex-child purchases'>
                        <div class = "purchaseHeader"><img src = {yourPurchases} alt = "your purchases header"/></div>
                        <img src = 'https://cdn-ds.com/blogs-media/sites/492/2017/09/06091521/2014-Ferrari-LaFerrari-Coupe-For-Sale-Miami-FL_d-1038x375.jpg' class = 'image' alt = "your car image1"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                        <br/>
                        <img src = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Veyron_SS.jpg' class = 'image' alt = "your car image5"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                        <br/>
                        <img src = 'https://hips.hearstapps.com/hmg-prod/images/2023-porsche-911-gt3-rs-201-1660575621.jpg?crop=0.755xw:0.567xh;0.0833xw,0.257xh&resize=1200:*' class = 'image' alt = "your car image2"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                    </div>
                    <div id = 'rentals' class = 'flex-child rentals' >
                        <div class = "rentHeader"><img src = {yourRentals} alt = "your rentals header"/></div>
                        <img src = 'https://mysterio.yahoo.com/mysterio/api/D8A14E92040B4641D8EBE4765441CA2B256D658AC544EEDDD55B442C941BE372/autoblog/resizefill_w1200_h720;quality_85;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://www.blogcdn.com/www.autoblog.com/media/2008/09/lp640_abg_06_opt.jpg' class = 'image' alt = "your car image3"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                        <br/>
                        <img src = 'http://cdn.carbuzz.com/gallery-images/1600/702000/700/702768.jpg' class = 'image' alt = "your car image3"/>
                        <button type = 'button' class = 'ud'> <img src = {update} alt = "update tab"/> </button> <button type = 'button' class = 'ud'> <img src={del} alt = "delete button"/></button>
                        <br/>
                        <img src = 'https://hips.hearstapps.com/hmg-prod/images/1981-deloreanscreen-shot-2022-05-21-at-8-16-00-am-1653135783.png' class = 'image' alt = "your car image6"/>
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
		
        <Footer />


        </div>
                    
   
    )
}