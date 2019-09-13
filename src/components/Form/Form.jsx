import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    state = {
    //     url: '',
    //     name: '',
    //     price: 0
        

    }

    // handleChange(event) {
    //     this.setState({
    //         name : event.target.value})
    // }

    // handleFormSubmit(){
    //     axios.post('/api/product', {text: this.state.input }).then(res => {
    //         this.setState({
    //             text: ''
    //         })
    //     })

    // }

    // handleClearForm(){

    // }







    render() {
        return (
            <form 
            // className="container" 
            // onSubmit={this.handleFormSubmit}
            >
                <h3>Image URL: </h3>
                <input></input>
                {// name="image" type="url" placeholder="Image URL"
                //  value={this.state.url} onChange={this.handleChange} 
                }
                <h3>Product Name: </h3>
                <input></input> 
                {// name="name" type="name" placeholder="Name" 
                // value={this.state.name} onChange={this.handleChange}
                }
                <h3>Price: </h3>
                <input></input> 
                {// name="price" type="text" placeholder="Price" 
                // value={this.state.price} onChange={this.handleChange} 
                }
                <br></br>
                <button>Cancel</button>
                <button>Add to Inventory</button>
            </form>
        )
    }
}
export default Form