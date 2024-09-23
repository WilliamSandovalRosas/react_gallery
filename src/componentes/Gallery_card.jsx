import React from 'react'
import PropTypes from 'prop-types'



export const Gallery_card = ({id, name, role,image}) => {
  return (
    <div className='card' style={{width:"20%"}}>
        
        <div className="card-body" style={{textAlign:"center"}}>
            <img className='card-img-top' src={image} alt={name} />
            <h3 className='card-title'>{name}</h3>
            <p className='card-text'>{role}</p>
        </div>

        <div className="mb-4" style={{textAlign:"center"}}>
            <button className='btn btn-primary'>Editar</button>
        </div>

    </div>
  )

  
}

Gallery_card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}


