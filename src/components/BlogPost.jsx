import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
export default function BlogPost({apiData}) {

console.log(useParams())

const {slug} = useParams()
console.log(slug)

const test = apiData.find( item => item.slug === slug)
console.log(test)
   
  return (
    <main>
        <h1 >{test.title}</h1> 

        <div class="main-text">
        <p>{test.description}</p>
        <img src={test.social_image}/>





        </div>
    
    
    
     <Link to={"/"} className="backCta"> <span >Back</span>

  
    </Link>
    
   





    </main>
  );
}