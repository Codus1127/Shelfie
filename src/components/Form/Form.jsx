import React, { Component } from 'react'
import noImage from './../../assets/noImage.png'
import axios from 'axios'
import {withRouter } from 'react-router-dom'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            name: '',
            price: '',
            edit: false
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        if (id) {
          axios.get(`/api/products/${id}`)
            .then(res => {
              this.setState({
                 url: res.data.image_url,
                 name: res.data.product_name,
                 price: res.data.price,
                 id: res.data.id,
                 edit: true })
            })
        }
      }

      componentDidUpdate(oldProps) {
        if (this.props.match.path !== oldProps.match.path) {
          this.setState({
            name: '',
            price: 0,
            url: '',
            edit: false
          })
        }
      }



    handleChangeImg(e) {
        this.setState({url: e.target.value})
    }
    handleChangeProduct(e) {
        this.setState({name: e.target.value})
    }
    handleChangePrice(e) {
        this.setState({price: e.target.value})
    }
    cancel() {
        this.setState({name: ''})
        this.setState({price: 0})
        this.setState({url: ''})
    }

    addToInventory() {
        axios.post('/api/products', this.state).then(result => console.log(result)).then(res => {
          this.props.history.push('/')
        })
        // this.cancel()
    }

    handleEdit() {
        let { id, name, price, url } = this.state;
        if (name) {
          let product = {
            name,
            price,
            url
          }
          axios.put(`/api/products/${id}`, product)
            .then(res => {
              this.props.history.push('/');
            })
            .catch(err => console.log('axios update erro', err))
        } else {
          console.log('you are missing a name and need to handle this user fail');
        }
      }
    

 

    render(){
        return(
            <div className='flexin'>
            <div className='form'>
                <div className='green-box'>
                <img className='no-image' src={this.state.url ? this.state.url : noImage} alt="noImage default" />
                <input className='imageURL' placeholder="Image URL" value={this.state.url} type="text" onChange={e => this.handleChangeImg(e)} />
                <input className='productName' placeholder="Product Name" value={this.state.name} type="text" onChange={e => this.handleChangeProduct(e)} />
                <input className='price' placeholder="Price" value={this.state.price} type="number" onChange={e => this.handleChangePrice(e)} />
                <button onClick={() => this.cancel()}>Cancel</button>
                {this.state.edit
                ? <button onClick={_ => this.handleEdit()}>Save Changes</button>
                : <button onClick={_ => this.addToInventory()}>Add to Inventory</button>
                }
                </div>
            </div>
            </div>
        )
    }

}

export default withRouter (Form);