import { useState } from 'react'
import { Gallery_card } from './componentes/Gallery_card'
//import './App.css'


function App() {
  const [ cards, setCards ] = useState([

    {
        id:1,
        name:"card1",
        role:"Frontend Developer",
        image:"https://bootdey.com/img/Content/avatar/avatar6.png"
    },
    {
        id:2,
        name:"card2",
        role:"Frontend Developer",
        image:"https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
        id:3,
        name:"card3",
        role:"Frontend Developer",
        image:"https://bootdey.com/img/Content/avatar/avatar2.png"
    },
    {
        id:4,
        name:"card4",
        role:"Frontend Developer",
        image:"https://bootdey.com/img/Content/avatar/avatar3.png"
    }
]);

  return (
    
      <div className='container'>

        
          <div className="row" style={{width:"100%",justifyContent:"space-around"}}>
            
            {cards.map((card)=>{
                return(
                  <Gallery_card
                  key = {card.id}
                  name = {card.name}
                  role= {card.role}
                  image = {card.image}
                  />
                );
                
              })
            }
            
          </div>
               
      </div>
     
    
  )
}

export default App
