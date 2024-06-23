import React from 'react'
import "./BlogCard.css";
import {Link} from "react-router-dom";
import BlogView from "../../views/BlogView/BlogView"


function BlogCard( {id,title,content,author,date,cateogaries}) {
  return (
    <Link  className="blogcard" to={`/BlogView/${id}`}>

      <div className='blogtitle'><h1>{title}</h1></div>
      <p className='content'>{content.substring(0,80)}....</p>

      <div className="author-card">
                <img src={author.avatar} alt="img" className="author-img"/>
                <span className="author-name">{author.name}</span>
                <span className="blog-date">{date}</span>
            </div>



 </Link>
  )
}

export default BlogCard