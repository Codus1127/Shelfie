import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        inventory: []

    }
}

componentDidMount() {
    this.getInventory();
  }
  getInventory() {
    axios.get('/api/products')
      .then(res => this.setState({ inventory: res.data }))
  }

    deleteProduct(id){
        axios.delete(`/api/products/${id}`)
        this.componentDidMount()
    }
    // getProduct(id){
    //     axios.put(`/api/products/${id}`)
    //     .then(res => this.history.push(`/edit/${id}`, res.data))
    // }

    render(){
        let mappedInventory = this.state.inventory.map((el, i) => {
            return (
                <div className='inventoryItems' key={i + el.product_name}>
                    <img className='image' src={el.image_url} alt={el.product_name} />
                    <h4>{el.product_name}</h4>
                    <h4>${el.price}</h4>
                    <button onClick={() => this.deleteProduct(el.id)}>Delete</button>
                    <button onClick={_ => this.props.history.push(`/edit/${el.id}`)}>Edit</button> 
                </div>
            )
        })
        return(
            <div className='dashboard'>
                <Product 
                mappedInventory = {mappedInventory}
                />
                
            </div>
        )
    }
}

export default Dashboard

