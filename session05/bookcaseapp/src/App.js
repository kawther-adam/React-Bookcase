import React, { useState } from 'react';
import Book from './components/Book';
import Booklist from './components/Booklist'
import bookList from './models/books.json';
import Header from './components/Header';
import {BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';


const App = () => {
  console.log(bookList);
  return (
      bookList.map(bookItem => <Book key={bookItem.id} book={bookItem}/>) 
     <Router>
        <Routes>
         <Route path="/" element={<p>home</p>}></Route>
         <Route path="/components/Booklist" element={<p>Booklist</p>}></Route>
        </Routes></Router>  
);
}   
     

    //  return (
    //   <Router>
    //     <div className="container">
    //       <Route exact path="/" render={() => (
    //         <Fragment>
    //           <Header bookLength={bookcase.length} />
    //           <BookList books={books} stored="library" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
    //         </Fragment>
    //       )} />
    //       <Route path="/bookcase" render={() => (
    //         <Fragment>
    //           <Header bookLength={bookcase.length} />
    //           <BookList books={bookcase} stored="bookcase" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
    //         </Fragment>
    //       )} />
    //       <Route path="/about" component={() => <About bookLength={bookcase.length} />} />
    //     </div>
    //   </Router>
    // );
  
    
    

      
  export default App;
//      <Router>
//        <Routes>
//        <Route exact path="/" render={() => (
//          <>
//           <Header />
//            <h2>Welcome to the Bookcase App</h2>
//           <Booklist books={bookList}/>
//         </>
//        )} />
//        <Route exact path="/bookcase" render={() => {
//            return (
//              <>
//                <Header />
//                <h2>Bookcase</h2>
//                <Booklist books={bookList} />
//              </>
//            );
//          }} />
//        </Routes>
//        </Router>
       
//     )
// }



/* <Route path= "/bookcase"></Route> *//* <Router>
<div className="App">
<Route exact path="/" render={() => (
<>
<Header />
<h2>Welcome to the Bookcase App</h2>
<bookList books={Book}/></>
)} />
<Route path= "/bookcase"></Route>
</div>
</Router> */


