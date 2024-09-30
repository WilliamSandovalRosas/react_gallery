import React from 'react'
import PropTypes from 'prop-types'
import { Gallery_card } from './Gallery_card'
import { useState } from 'react'
export const Gallery_container = ({cards, setCards}) => {

    const [editingId,setSelectedId] = useState(null);

    const [editedCard, setEditedCard] = useState(
        {
            name: '',
            role: '',
            image: ''
        }
    );

    //constante booleana que permite determinar si un elemento se está editando, inicialmente el estado
    //está en false.
    const [isEditing,setIsEditing] = useState(false);

    //Creando variable de entorno para eliminar una tarjeta

    const [carToDelete, setCardToDelete] = useState(null);

//metodo para capturar a partir de eventos los datos del formulario

const handleChange = (e)=> {
    const { name,value } = e.target;
    setEditedCard(prevState => ({
        ...prevState,
        [name]: value
    }));
}

//Método para crear card

const handleCreate = (e)=>{

    //prevenir la recarga de la página al recibir eventos
    e.preventDefault();
    //pasamos los parametros con el método setCards
    setCards([...cards, { id : cards.length + 1, ...editedCard}]);
    //Cambiamos a un valor por defecto la variable de estado editedCard para que quede vacía
    setEditedCard({name:'', role:'', image:''});
}

//método para capturar datos a partir del id

const handleEdit = (id,e)=>{
    //prevenir la recarga de la página al recibir eventos
    //e.preventDefault();
    setSelectedId(id);
    //Activando el estado de edición
    setIsEditing(true);
    
    //buscar los datos de tarjeta a editar a partir del nombre del arreglo
    const carToEdit = cards.find(card => card.id === id );

    setEditedCard({...carToEdit});

}

//método para guardar los cambios realizados

const handleSave = (e)=>{

    //prevenir la recarga de la página
    e.preventDefault(); 

    //actualizar los datos, se debe recorrer el arreglo
    //si el id es igual agrega al elemento los cambios realizados, sino, mantiene los datos actuales
    const updateCards = cards.map(card => card.id === editingId ? editedCard : card);

    //enviando los cambios realizados al objeto

    setCards(updateCards);

    //desactivando el estado de edición
    setIsEditing(false);

    //Retornar la variable de estado editingId a null

    setSelectedId(null);

    //Resetear los valores de la variable de entorno de la tarjeta a editar editedCard

    setEditedCard({name:'',role:'',image:''})


}

//función eliminar

const handleDelete = (id,e) =>{
    setCardToDelete(id);
}

const confirmDelete = ()=>{
    setCards(cards.filter(card=>card.id != carToDelete));
    setCardToDelete(null);
    alert("tarjeta eliminada");
}

const cancelDelete = ()=> {
    setCardToDelete(null);
    alert("Acción cancelada");
}


  return (
    <div className='container'>
        <div className="row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3" style={{width:"100%",justifyContent:"space-around"}}>
        {cards.map((card)=>{
                return(
                    <div key = {card.id}>
                         <Gallery_card
                            id = {card.id}
                            name = {card.name}
                            role= {card.role}
                            image = {card.image}
                            handleEdit = {() => handleEdit(card.id)}
                            handleDelete={handleDelete}
                            />

                    </div>
                );
                
              })
            }
        </div>

        <div className="container mt-4 p-4" style={{width:"60%",textAlign:"center"}}>
            
                <form>

                    <h2>{isEditing ? "Card Update" : "Control Empleado"} </h2>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nombre</label>
                        <input type='text' name = "name" value= {editedCard.name} onChange={handleChange} className="form-control"/>
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputRol" className="form-label">Rol</label>
                        <input type="text" name = "role" value={editedCard.role} onChange={handleChange} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputImage" className="form-label">Imagen</label>
                        <input type="text" name='image' value= {editedCard.image} onChange={handleChange} className="form-control" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={isEditing ? handleSave : handleCreate}>{isEditing ? 'Actualizar' : 'Agregar'}</button>

                   
                </form>                
            
        </div>

        <div id="deleteModal" class="modal fade" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Confirmar "¡Eliminar!"</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclik={cancelDelete}>ajjajaja</button>
                    </div>
                    <div class="modal-body">
                        <p>Está seguro de eliminar a: {cards.find(card => card.id === carToDelete)?.name}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={cancelDelete}>Cancelar</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={confirmDelete}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

Gallery_container.propTypes = {
    cards: PropTypes.object,
    setCards: PropTypes.func
}
