import React,{useState, useEffect} from 'react'

const Api = () => {
    const [data, setData]= useState(null)
    useEffect (()=>{
       async function fetchAPI(){
        const baseurl= "https://reqres.in/api/users"
        const response = await fetch(baseurl)
        .then ((res)=>res.json ())
        const newData = await response.data 
        setData(newData)
        console.log(newData);
       }
       fetchAPI()
    },[])
    
  return (
    <>
    <div className='flex flex-col w-full items-center h-[100vh] justify-center gap-5'>
    <h1>User Data</h1>
     <div className='grid md:grid-cols-3 grid-cols-1 items-center gap-10'>
     {
        data && data.map((n)=>(
            <div key={n.id}>
                <h1>first name:{n.first_name} </h1>
                <h1>last name:{n.last_name} </h1>
                <img src={n.avatar} alt="" />
            </div>
            
        ))
     }
     </div>
    </div>
    </>
  )
}

export default Api