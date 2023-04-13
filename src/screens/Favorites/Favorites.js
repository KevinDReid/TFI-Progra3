import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/Home/Card'


class Favorites extends Component {
    constructor(props){
        super(props)
        this.state= {
            favorites: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favorites')
        if(storage !== null){
            let storageToArray = JSON.parse(storage)
            Promise.all(storageToArray.map(id => {
                    return(
                      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=97652419e5f4276e5a5fa6f28df39f8c`)
                        .then(resp => resp.json())
                        .then(data => data)
                    )
                })
            )
            .then(data => this.setState({
                favoritos: data
            }))
            .catch(err => console.log(err))


        }
    }
  render() {
    return (
      <>
      <Header/>
      <Card
            key= {this.props.key}
            id={this.props.id}
            name= {this.props.name}
            img= {this.props.img}
            desc= {this.props.desc}
            text= {"Ver mas"}
            class= {"hidden"}
      />
      <Footer/>
      </>
    )
  }
}

export default Favorites