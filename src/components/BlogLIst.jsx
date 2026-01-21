import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
export default function BlogLIst() {


const [apiData,setApiData]=useState([])

const getData = async ()  => {
    const res = await fetch("https://dev.to/api/articles")
    const data= await res.json()
    setApiData(data)
  console.log(apiData)
}


useEffect(()=>{


    getData()
  
},[])

// const allTags = apiData.flatMap(item => item.tag_list.map(tag =>( {name:tag}) )
const allTags = apiData.flatMap(post =>
  post.tag_list.map(tag => ({ name: tag }))
);



// const test = [...new Set(apiData.flatMap(item => item.tag_list))]

// console.log(test)




  return (
    <main>

     {/* {test.map(item => (<span> #{item}</span>))}    */}
  <h2> Blog</h2>

  <div className="wrapper">
  {apiData.map((item,index)=>(
    <>
   {/* {item.tag_list.map(tag => (<span  className={`${tagColor[tag]}`}> #{tag} </span>))} */}
    

<div key={item.id} className={`${item.tag_list.map(tag => (tag))}`}>
  
    <Link to={`/${item.slug}`}> {item.title}
    <img src={item.social_image}/>
  
    </Link>
    <div>
      {item.tag_list.map(tag => (<span> #{tag} </span>))}
      </div>
</div>
</>
  )




  )}
  </div>
    </main>
  );
}