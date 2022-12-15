import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [loading, setLoading] = React.useState(true)
  const [tours, setTours] = React.useState([])
  const [refresh, setRefresh] = React.useState(false)
  console.log(refresh);
  React.useEffect(()=>{
    fetch('https://course-api.com/react-tours-project')
      .then(res=> res.json())
      .then(data=> setTours(data))
    setLoading(false)
  }, [refresh])
  
  function removeTour(id){
    let newTour = tours.filter((tour)=> tour.id !== id);
    setTours(newTour)
  }

  if (loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }
  if (tours.length === 0){
    return(
      <div className="title">
        <h2>No tours left</h2>
        <button className="btn"
                onClick={ ()=> setRefresh(prevState=> !prevState) }
        >Refresh
        </button>
      </div>
    )
  }
  else{
  return (
      <main>
        <Tours tours = { tours }
              removeTour = { removeTour }/>
      </main>
    
  );}
}

export default App;
