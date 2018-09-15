import React, { Component } from 'react';
import './CardZone.css';
import Card from './Card/Card';
import Masonry from './Masonry';
import PicsLinks from './../CardsZone/temp';

//the cardZone need to get all the pics, send it as a props to Masonry, then Masonry will transfer it to Card


class CardZone extends Component {

    constructor(props){ //must write props also in the constructor
      super(props)
      this.state = {
        ArrayPic: [] //PicsLinks
      }
    }

    componentDidMount(){
      fetch('api/cardsData')
      .then(data => data.json())
      .then(updateState => {
        this.setState({ArrayPic:updateState})
      })
      .catch(e => console.log(e.message))
    }

    render() {
      
      return (
        <div className="CardZone">
            <Masonry elements={this.state.ArrayPic}/>
         
        </div>
  
      );
    }
  }
  
  export default CardZone;
  