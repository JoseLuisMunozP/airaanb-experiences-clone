import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import Data from "./data.js" 




function App() {
  

  const cards=Data.map(item => {
    return(
      <Card 
          kei={item.id}
          item={item}

        />
    )
  })

  return(
    <div className="container">

      <Navbar />
      <Hero />
      <section className="cards-list">

      {cards}

      </section>

    </div>
  )
  
}

export default App;
