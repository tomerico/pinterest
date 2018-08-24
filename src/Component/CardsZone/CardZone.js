import React, { Component } from 'react';
import './CardZone.css';
import Card from './Card/Card';


class CardZone extends Component {

    render() {
     
      return (
        <div className="CardZone">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />            
        </div>
  
      );
    }
  }
  
  export default CardZone;
  