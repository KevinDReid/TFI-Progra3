import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import Movie from '../../Components/Detail/Movie'
import Footer from '../../Components/Footer/Footer'
import Movie from '../../Components/Detail/Movie'
export default class Detail extends Component {
  constructor(props){
      super(props)
      this.state={
          id:this.props.match.params.id,
          movie:''
      }
  }

  componentDidMount(){
      fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=97652419e5f4276e5a5fa6f28df39f8c`)

      .then(resp => resp.json())
      .then(data => this.setState({
          movie:data
      }))
  }

  render() {
    console.log(this.state.movie)
    return (
        <>
        <Header/>
      <main>
          
          <Movie use={this.state.movie}/>
          
      </main>
      
      <Footer/>
      </>
    )
  }
}
