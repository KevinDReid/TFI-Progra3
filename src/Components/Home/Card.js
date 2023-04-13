import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
      id: this.props.id,
      name: this.props.name,
      img: this.props.img,
      desc: this.props.desc,
      text: "Ver mas",
      class: "hidden",
      favorite: false,
    };
  }
  componentDidMount(){
    let storage = localStorage.getItem('favorites')
    let storageArray = JSON.parse(storage)

    if(storageArray !== null){
      let inStorage = storageArray.includes(this.state.id)
      if(inStorage){
        this.setState({
          favorites: true
        })
      }
    }
  }
  addFav(id){
    let storage = localStorage.getItem('favorites')

    if(storage === null){
      let stringedArray = JSON.stringify([id])
      localStorage.setItem('favorites', stringedArray)

    } else {
      let stringToArray = JSON.parse(storage) 
      stringToArray.push(id)
      let stringedArray = JSON.stringify(stringToArray)
      localStorage.setItem('favorites', stringedArray)
    }

    this.setState({
      favorite: true
    })
  }
  

  removeFromFav(id){
    let storage = localStorage.getItem('favorites')
    let storageArray = JSON.parse(storage)
    let filter = storageArray.filter((elm)=> elm !== id)
    let filterToString = JSON.stringify(filter)
    localStorage.setItem('favorites', filterToString)

    this.setState({
      favorites: false
    })


  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id || prevProps.name !== this.props.name || prevProps.img !== this.props.img || prevProps.desc !== this.props.desc) {
      this.setState({
        key: this.props.key,
        id: this.props.id,
        name: this.props.name,
        img: this.props.img,
        desc: this.props.desc,
      });
      console.log(this.props);
    }
  }
  changeText() {
    if (this.state.text === "Ver mas") {
      this.setState({
        text: "Ver menos",
        class: "show",
      });
    } else {
      this.setState({
        text: "Ver mas",
        class: "hidden",
      });
    }
  }

  render() {
    return (
      
      <li className="movieContainer" key={this.state.key}>
        <article className="movieLink">
          <img className="movieImg" src={this.state.img ? "https://image.tmdb.org/t/p/original" +this.state.img : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="asd" />

          <div className="movieText">
            <h4 className="movieTitle">{this.state.name}</h4>
            <p className={this.state.class}>{this.state.desc}</p>
          </div>
          <div className="movieButtons">
          {
              this.state.favorite ?
               <button onClick={()=> this.removeFromFav(this.state.id)}> Remove</button>
              :
                <button onClick={()=> this.addFav(this.state.id)}>Add</button>
            }
            <button
              onClick={() =>
                (window.location.href = "detail/id/" + this.state.id)
              }
            >
              Detalle
            </button>
            <button onClick={() => this.changeText()}>{this.state.text}</button>
          </div>
        </article>
      </li>
    );
  }
}
