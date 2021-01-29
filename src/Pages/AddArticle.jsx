import React from 'react'
import MyEditor from '../Components/MyEditor';
import "../Styles/AddArticle.scss"

const AddArticle = () => {
  return (
    <div className="add-article">
      <div className="article-editor">
      <MyEditor/>
      </div>
    </div>
  )
}

export default AddArticle;
