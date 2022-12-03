import React from 'react';
import "./BookList.css";
import { Link } from 'react-router-dom';



function BooksRecord() {

    const EditBook = ()=>{

    }
    
  return (
    <div className='bookListPage'>
        <button className='booklistbtn'>
        <Link to={"/booklistPage"} id="booklistbtn">Show Book List</Link>
        </button>
        <div className='addBook'>
            <h1>Book's Record</h1>
            <div className='bookRecord' >
                <h3>View Books Info</h3>
                <div className='records'>
                    <div className='bookdata'>1 Title   </div>
                    <div className='bookdata'>2 Author   </div>
                    <div className='bookdata'>3 ISBN    </div>
                    <div className='bookdata'>4 Publisher</div>
                    <div className='bookdata'>5 Published Date</div>
                    <div className='bookdata'>6 Description</div>
                </div>
                <div className='delEdibtn'>
                <button type="delete" className='deletebtn'>Delete Book</button>
                <button type="edit" className='editbtn'><Link to={"/editBookPage"} id="editbtn">Edit Book</Link></button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default BooksRecord