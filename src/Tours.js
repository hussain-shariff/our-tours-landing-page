import React from 'react'
import Tour from './Tour'

export default function Tours(props){
    const tourElements = props.tours.map((item, index)=>{
        return <Tour
                key = {props.tours[index].id}
                id = {props.tours[index].id}
                name = { props.tours[index].name }
                info = { props.tours[index].info }
                image = { props.tours[index].image }
                price = { props.tours[index].price }
                removeTour = {props.removeTour}/>
    })


  return (
    <section>
        <div className='title'>
            <h2>Ours Tours</h2>
            <div className="underline"></div>
        </div>
        <div>
            { tourElements }
        </div>
    </section>
  )
}
