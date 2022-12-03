import React from 'react';
import { Link } from 'react-router-dom';


function EditBook() {

    const onSubmitForm = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='bookListPage'>
        <button className='booklistbtn'>
        <Link to={"/booklistPage"} id="booklistbtn">Show Book List</Link>
        </button>
        <div className='addBook'>
            <h1>Edit Book</h1>
            <form action="#" method="post" className='addBookForm' onSubmit={onSubmitForm}>
                <h3>Update Book's Info</h3>
                <div className='editingBook'>
                    <label htmlFor="title">Title</label>
                    <input className='addbookinput' type="text" name="title" id="title" placeholder='  Title of the book'/>
                </div>
                <div className='editingBook'>
                    <label htmlFor="isbn">ISBN</label>
                    <input className='addbookinput' type="text" name="isbn" id="isbn" placeholder='  ISBN'/>
                </div>
                <div className='editingBook'>
                    <label htmlFor="author">Author</label>
                    <input className='addbookinput' type="text" name="author" id="author"  placeholder='  Author'/>
                </div>
                <div className='editingBook'>
                    <label htmlFor="description">Description</label>
                    <input className='addbookinput' type="text" name="description" id="description" placeholder='Describe this book' />
                </div>
                <div className='editingBook'>
                    <label htmlFor="date">Published_date</label>
                    <input className='addbookinput' type="text" name="date" id="date" placeholder='Published_date'/>
                </div>
                <div className='editingBook'>
                    <label htmlFor="publisher">Publisher</label>
                    <input className='addbookinput' type="text" name="publisher" id="publisher" placeholder='Publisher of this book'/>
                </div>
   
                <button type="submit" className='submitbtn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default EditBook;