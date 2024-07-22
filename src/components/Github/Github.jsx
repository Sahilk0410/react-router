import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    //   useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    //   })
  return (
    <div>Github Followers : {data.followers}
    <img src="data.avatar_url" alt="" /></div>
    
  )
}

export default Github


export const githubInfoLoader = async () => {
      const respone = await fetch("https://api.github.com/users/hiteshchoudhary")
      return Response.json()
}