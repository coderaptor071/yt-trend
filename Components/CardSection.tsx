import axios from "axios";
import Card from "./Card";
import React from 'react'
import {useQuery} from '@tanstack/react-query'

const CardSection = async () => {

    // const {data:trendingYt} = useQuery()

    const { data } = await axios.get("http://localhost:3000/api")

  return (
    <section className=" grid grid-cols-3 grid-flow-row max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-4 mt-12 ">
      {data.data.map((el : any) => (<Card key={el.id} title={el.snippet.title} desc={el.snippet.description} thumbnail={el.snippet.thumbnails.high.url} viewCount={el.statistics.viewCount} likeCount={el.statistics.likeCount} commentCount={el.statistics.commentCount}  />))}
      </section>
  )
}

export default CardSection