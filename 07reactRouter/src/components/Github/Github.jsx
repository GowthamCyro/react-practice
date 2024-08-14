import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(() => {
    //   fetch("https://api.github.com/users/GowthamCyro")
    //   .then((res)=>res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data)
    // })
    //   .catch("Something went wrong while fetching the data")
    // }, [])
    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}

    <img className='' src={data.avatar_url} alt="Github picture" width={300} />
    
    </div>
    
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch("https://api.github.com/users/GowthamCyro");
    return response.json()
}