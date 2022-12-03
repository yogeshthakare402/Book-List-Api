import React from 'react';
import "./BookList.css";
import {useNavigate} from 'react-router-dom';

function BookList() {

    let nevigate = useNavigate();
    const onClick = ()=>{
        nevigate("/addBookPage")
    }
    const detailsOfBook =()=>{
        nevigate("/bookRecordPage")
    }
  return (
    <div className='bookListPage'>
        <h1>Books List</h1>
        <div className='addBookbtn'>
            <button id='addbookbtn' onClick={onClick}>+Add New Book</button>
        </div>
        <div className='mappedList'>
            <div className='list' onClick={detailsOfBook}>
            ABNshhdnsbjhjnfdjjhcdncjd <br></br> vghhbvhgycdcjndjcgyhbshbcjdnsjncjnj
            </div>
            
        </div>
    </div>
  )
}

export default BookList