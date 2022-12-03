import React from 'react'
import "./BookList.css";
import { Link } from 'react-router-dom';

function AddBook() {

    const onSubmitForm = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='bookListPage'>
        <button className='booklistbtn'>
        <Link to={"/booklistPage"} id="booklistbtn">Show Book List</Link>
        </button>
        <div className='addBook'>
            <h1>Add Book</h1>
            <form action="#" method="post" className='addBookForm' onSubmit={onSubmitForm}>
                <h3>Create new book</h3>
                <input className='addbookinput' type="text" name="title" id="title" placeholder='  Title of the book'/>
                <input className='addbookinput' type="text" name="isbn" id="isbn" placeholder='  ISBN'/>
                <input className='addbookinput' type="text" name="author" id="author"  placeholder='  Author'/>
                <input className='addbookinput' type="text" name="description" id="description" placeholder='Describe this book' />
                <input className='addbookinput' type="text" name="date" id="date" placeholder='Published_date'/>
                <input className='addbookinput' type="text" name="publisher" id="publisher" placeholder='Publisher of this book'/>
                <button type="submit" className='submitbtn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddBook