import React, { Component } from "react";
import Card from './Card'

let arr = [
  {name: "Мужские кросовки New Balance 76", amount: 12900, img: "/catalog/item1.png"},
  {name: "Мужские кросовки New Balance 78", amount: 15900, img: "/catalog/item1.png"},
]
 
class Catalog extends Component {
  render() {
  return (

      <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="searchBlock d-flex">
            <img src="" alt="search"/>
            <input placeholder="Поиск "/>
       
          </div>
        </div>
        
        <div className="d-flex align-center justify-center">
            {arr.map((obj) => (
              <Card 
              title={obj.name}
              price={obj.amount}
              img={obj.img}/>
            ))}


            
  
        </div>


      </div>
  );}
}


 
export default Catalog;