import React from 'react';

class Search extends React.Component{
    state={
        busqueda:''
    }
    onChangeEvent(e){
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(e.target.value);
    }
    /*palabra = document.querySelector('#id');
    boton = document.querySelector('#boton');
    filtro =() =>{
        console.log(this.palabra); 
    }
    boton.addEventListener('click',filtro)*/
    render(){
        return(
        <div className="Search-person">
        <form className="d-flex">
             <input className="form-control mb-2"
              type="text" id='busqueda'
               placeholder="Search"
                aria-label="Search"
                value={this.onChangeEvent}/>
             <button className="btn btn-outline-success" id='boton'>Search</button>
        </form>
        </div>
        );
    }
}

export default Search;