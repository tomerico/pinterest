import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    
    return (
      <div className="Card">
        <div className="CardWrapper"> 
           <img src={require('./../../../Media/Images/5a822714ef48e.jpg')}/>  
        </div>
      </div>
    );
  }
}

export default Card;