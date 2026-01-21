import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList"
import BlogPost from "./components/BlogPost";
import './App.css'

function App() {


 const [apiData,setApiData]=useState([])
    
    const getData = async ()  => {
        const res = await fetch("https://dev.to/api/articles")
        const data= await res.json()
        setApiData(data)
 
    }
    
    
    useEffect(()=>{
    
    
        getData()
    },[])

  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList apiData={apiData} />} />
        <Route path=":slug" element={<BlogPost apiData = {apiData} />}  />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
