import React from 'react'
import PropTypes from 'prop-types'



export const Gallery_card = ({id, name, role,image, handleEdit, handleDelete}) => {
  return (
    <div className='card' style={{width:"300px"}}>

        <div className="card-body" style={{textAlign:"center"}}>
            <img className='card-img-top' src={image} alt={name} />
            <h3 className='card-title'>{name}</h3>
            <p className='card-text'>{role}</p>
        </div>

        <div className="mb-4" style={{width:"100%",textAlign:"center"}}>
            <button className='btn btn-primary' style={{margin:"5px"}} onClick={handleEdit}>Editar</button>
            <button className='btn btn-secondary' onClick={()=>handleDelete(id)} data-bs-toggle="modal" data-bs-target="#deleteModal">Eliminar</button>
        </div>

    </div>
  )
}

Gallery_card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func
}


