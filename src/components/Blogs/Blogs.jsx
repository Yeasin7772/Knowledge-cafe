import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handelAddBookmark }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h4 className="text-4xl font-bold">Blogs: {blogs.length}</h4>
            {
                blogs.map(blog =>
                    <Blog
                        handelAddBookmark={handelAddBookmark}
                        key={blog.id}
                        blog={blog} >

                    </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handelAddBookmark: PropTypes.func
}

export default Blogs;