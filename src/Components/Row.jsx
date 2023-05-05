import React from 'react'
import './Row.css';
import axios from './axios';
import {imageUrl} from './constants';
import { useEffect,useState } from 'react';

export default function Row(props) {
useEffect(
  ()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network error")
    })
  },[]
)

const[movies,setMovies] = useState([]);

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>{
        return(
        <img className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/> 
        )
      })}
        </div>
    </div>
  )
}
