import React from 'react'
import shelfie from '../../assets/shelfie.png'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='header'>
                <h1>SHELFIE</h1>
                <div className='header_link_box'>
                    <Link to='/'>Dashboard</Link>
                    <Link to='/add'>Add Inventory</Link>
                </div>
            </div>
        )
    }
}

