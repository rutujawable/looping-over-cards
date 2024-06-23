import React from 'react'
import './Home.css'
import blogs from "./../../data"
import BlogCard from '../../components/BlogCard/BlogCard';

function Home() {

  console.log({blogs});
  return (
    <>
     <div className='cardconatainer'>
    {
     

    blogs.map((blogobject,i)=>{

      const {
        id,
        title,
        content,
        author,date,
        cateogaries



      } = blogobject

      return(
       <BlogCard
          key={i}
          id={id}
          title={title}
          content={content}
          author={author}
          date={date}
          cateogaries={cateogaries}
       
       
       />
      )
        
      }





    )





    } 

</div>
    
    </>
  )
}

export default Home