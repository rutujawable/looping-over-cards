import { useParams } from "react-router-dom"
import "./BlogView.css"
import blogs from "../../data"
import React from 'react'


function BlogView ()
    {
        const {id} = useParams()

        const select = blogs.find((blogObject) =>{
            if (blogObject.id == id)
                {
                    return true
                }

                else{
                   return false
                }
            })

            console.log(select)

        return(
            <>
            
            <div className="blogs-container">
            <h1>{select.title} </h1>
            <p className="blog-date-author">
                {select.author.name} | {select.date}
            </p>
            <p  className="blog-content">
                {select.content}
            </p>
          
            </div>
           
            </>
           
        )
    }
  
    export default BlogView