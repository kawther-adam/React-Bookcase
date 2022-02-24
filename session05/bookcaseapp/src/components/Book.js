 import React from 'react';

 function Book(props) {
   console.log(props)
 const { 
   book: {
    id,
     saleInfo: {retailPrice},
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: {
      thumbnail
      }
    }
  }
} = props;

return (
<div className="book">
  <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="thumbnail"/>
  <div>
    <h2 >{props.book.volumeInfo.title}</h2>
    <p>{props.book.saleInfo.retailPrice ? props.book.saleInfo.retailPrice.amount : "0" }</p>
    <p>{props.book.volumeInfo.description}</p>
  
  </div>
</div>
)}
export default Book;


