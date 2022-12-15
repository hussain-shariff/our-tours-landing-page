import React from 'react'

export default function Tour (props) {
    const [readMore, setReadMore] = React.useState(false)

    function handleShowMore(){
        setReadMore(prevState=> !prevState)
    }
  return (
    <article className='single-tour'>
        <img src={props.image}
            alt={props.name}/>
        <footer>
            <div className='tour-info'>
                <h4>{props.name}</h4>
                <h4 className="tour-price">$1,995</h4>
            </div>
            <p>{readMore? props.info : props.info.substring(0, 200)}...
                <button onClick={ handleShowMore }>{readMore? "show less": 'show more'}</button>
            </p>
            
            <button className="delete-btn"
                    onClick={()=>props.removeTour(props.id)}>
                Not Interested
            </button>
        </footer>
    </article>
  )
}
