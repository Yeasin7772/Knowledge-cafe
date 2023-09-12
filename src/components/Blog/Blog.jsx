import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handelAddBookmark, handleMarkAsRead }) => {
    const { title, cover, author, posted_date, author_img, reading_time, hashtags } = blog
    //console.log(blog);
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between space-y-5'>
                <div className='flex gap-4 mb-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h1 className='text-2xl font-bold'>{author}</h1>
                        <p>{posted_date}</p>

                    </div>

                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handelAddBookmark(blog)}
                        className='ml-4 text-2xl text-red-400'
                    ><FaBookmark ></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-2xl font-bold mb-4'>{title}</h1>
            <p className='mb-4'>
                {
                    hashtags.map((hash, index) => <span className='font-semibold'
                        key={index}> <a href="">{hash}</a> </span>)
                }
            </p>
            <button
            
            onClick={() => handleMarkAsRead(reading_time)}
             className='text-xl text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelAddBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func

}

export default Blog;