import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    const {data: blogs, isLoading, isError} = useFetch('http://localhost:8000/blogs');

    
    // this function or hook fires in evrey render
    // Dependencies array is used to keep track of dependencies
    // Dependencies:-
    // [] => runs the function after first initialization render 
    // [name] => if name changes then runs the function or the useEffect(()=>{}, []) hook

    return (
        <div className="home">
            {/* This is prop and u need to recive it inside the component */}
            
            {/* if the left is false, never bites with the right */}
            {/* so both will output if the left && is true "not null" */}
            {isError && <div>{isError}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

        </div>
    );
}

export default Home;

// using state (usingState hook) => to handle state changes and update template
// hook in react is a cert a type of function that do a certain job and starts with useX
// useState hook function get two things its first const and it's second to update the first one
// 1st import the hook in react


// Props & Reuseble Components
// Props to transfer data from Parent Component to child Component and its children

// useEffect Hook fires on evrey render