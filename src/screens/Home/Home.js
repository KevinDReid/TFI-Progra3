import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import MovieList from '../../Components/Home/MovieList'
import Footer from '../../Components/Footer/Footer'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            datos:[]
        }
    }
    componentDidMount(){
            fetch('https://api.themoviedb.org/3/trending/all/day?api_key=97652419e5f4276e5a5fa6f28df39f8c'
            )
                .then(function(response) {
                    return response.json()
                })
                .then((data)=>{
                    this.setState({datos: data.results})
                    // console.log(this.state.datos);
            }
            )
                .catch(function(error){
                console.log('Este es el error: ' + error);})
      }
  render() {
    // console.log(this.state.datos);
    return (
        <>
      <Header/>
      <main>
        <MovieList datos={this.state.datos}/>
      </main>
    <Footer/>
        </>
    )
  }
}
