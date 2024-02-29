import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(blog) })
        .then(() => {
            console.log("new blog added");
            setIsLoading(false);
            navigate('/');

        
        });

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input name="" id="" required value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label>Blog body:</label>
                <textarea name="" id="" cols="30" rows="10" required onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Blog author:</label>
                <input name="" id="" required onChange={(e) => setAuthor(e.target.value)}></input>

                

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}


            </form>
        </div>
    );
}

export default Create;