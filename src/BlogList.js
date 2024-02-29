import { Link } from 'react-router-dom'

// you must put parameters to get data porped from the parent component to child component
/*  write in the parametre {first prop, second prop, ...} */
const BlogList = ({ blogs, title }   /* props */) => {


    // const blogs = props.blogs; // props can be any name
    // const title = props.title; // props can be any name
    return (
        <div className="blog-list">

            <h2>
                {blogs.length === 0 ? "There's no blogs" : title}
            </h2>
            {/* Map Method in Js */}
            {blogs.reverse().map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={'/blogs/' + blog.id}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>

    );
}

export default BlogList;