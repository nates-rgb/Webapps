import React, { useState, useEffect} from 'react'

import { Navigate } from "react-router-dom";
import buy_larger from "../img/buynowLarger.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {carInventory} from './dB'
const Record = (props) => (
    <tr>
      <td>{props.record.name}</td>
      <td>{props.record.position}</td>
      <td>{props.record.level}</td>
    
    </tr>
   );

export function Buy() {

    const [records, setRecords] = useState([]);
 
    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
       console.log("hey i ran");
        const response = await fetch(`http://localhost:5000/item/`);
        console.log("i got past the fetch");
        console.log(response);
        
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const records = await response.json();
        console.log(records)
        setRecords(records);
      }
    
      getRecords();
    
      return;
    }, [records.length]);

    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
        return (
            <Record
            record={record}
            key={record._id}
            />
        );
        });
    }

    
    //Car 1
    const [buy1, buyStatus1] = useState(() => {
        const storedBuyStatus1 = localStorage.getItem('buy1');
        return storedBuyStatus1 !== null ? Number(storedBuyStatus1) : 0;
    });
    const handleClick1 = () => {
        buyStatus1(buy1 + 1);
        //window.location.reload();
    }
    

    useEffect(() => {localStorage.setItem('buy1',buy1.toString());}, [buy1]);

    //Car 2
    const [buy2, buyStatus2] = useState(() => {
        const storedBuyStatus2 = localStorage.getItem('buy2');
        return storedBuyStatus2 !== null ? Number(storedBuyStatus2) : 0;
    });
    const handleClick2 = () => {
        buyStatus2(buy2 + 1);
        //window.location.reload();
    }
    

    useEffect(() => {localStorage.setItem('buy2',buy2.toString());}, [buy2]);
    if(localStorage.getItem("Authenticated")){
    return(

    //     <div id = 'main_body'>
    //         <Header />
    //         <Nav />
    //     <article>
    //         <div className = "item1">
    //             <div className = "row">
    //                 <div className = "column left">
    //                     <img src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/e1-1674140223.jpeg" alt = "Car Buy Page" className = "buyPageImage"/>
    //                 </div>
    //                 <div className = "column middle">
    //                     <h2>{carInventory[0].name}</h2>
    //                     <h4>Brand: {carInventory[0].brand} &nbsp; Model: {carInventory[0].model} &nbsp; Color: {carInventory[0].color}</h4>
    //                     <p>{carInventory[0].description}</p>
    //                 </div>
    //                 <div className = "column right">
    //                     <h2>${carInventory[0].price}</h2>
    //                     <button className = "button" onClick = {handleClick1}><img src = {buy_larger} alt ="buy now image1"/></button>
    //                 </div>
    //             </div>
    //         </div>
    //         <br/>
    //         <div className = "item2">
    //             <div className = "row">
    //                 <div className = "column left">
    //                     <img src = "https://hips.hearstapps.com/hmg-prod/images/aston-martin-valhalla-101-1626200852.jpg?crop=1.00xw:0.751xh;0,0.170xh&resize=1200:*" alt = "Car Buy Page" className = "buyPageImage"/>
    //                 </div>
    //                 <div className = "column middle">
    //                     <h2>{carInventory[1].name}</h2>
    //                     <h4>Brand: {carInventory[1].brand} &nbsp; Model: {carInventory[1].model} &nbsp; Color: {carInventory[1].color}</h4>
    //                     <p>{carInventory[1].description}</p>
    //                 </div>
    //                 <div className = "column right">
    //                     <h2>${carInventory[1].price}</h2>
    //                     <button className = "button" onClick = {handleClick2}><img src = {buy_larger} alt ="buy now image1"/></button>
    //                 </div>
    //             </div>
    //         </div>
    //     </article>
    //     <Footer />
    // </div>       
    // )
    <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
    }
    return(<><Navigate replace to="/" /></>)
}