import React, { Component } from 'react'
import MovieList from '../../Components/Home/MovieList'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

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
                    console.log(data);
                this.setState({datos: data.results.filter(result=>result.id<10)})
                // console.log(this.state.datos);
            }
            )
                .catch(function(error){
                console.log('Este es el error: ' + error);})
      }
  render() {
    return (
        <>
      <Header/>
      <main>
        
      </main>
    <Footer/>
        </>
    )
  }
}
