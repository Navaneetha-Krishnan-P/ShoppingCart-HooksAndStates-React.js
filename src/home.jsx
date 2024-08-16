import React,{useContext,useState} from 'react'
import data from './products.json'
import { Products } from './Products'
import "./home.css"


export const Home = () => {
    const[card,setCard]=useState(data)
  return (
    <div className="cards">
    {card.map((product,key)=>(
        <Products key={key} product={product}/>
    ))}

    </div>
  )
}
