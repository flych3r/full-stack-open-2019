import React from 'react'

const BlogForm = ({ newTitle, handleTitleChange, 
                    newAuthor, handleAuthorChange, 
                    newUrl, handleUrlChange, 
                    addBlog }) => {
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        title: <input value={newTitle} onChange={handleTitleChange}/><br/>
        author: <input value={newAuthor} onChange={handleAuthorChange}/><br/>
        url: <input value={newUrl} onChange={handleUrlChange}/><br/>
        <button type="submit">create</button><br/>
      </form>
    </>
  )
}

export default BlogForm