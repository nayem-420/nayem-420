import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    const {title, cover_img, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mt-20 space-y-4'>
            <img className='w-full mb-8' src={cover_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-4 mt-4'>
                    <img className='w-14 mb-4' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} mins read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2'><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span 
                        key={idx}>
                            <a href="" className='mr-4'>
                                #{hash}
                            </a>
                    </span>)
                }
            </p>
            <button
                onClick={()=>handleMarkAsRead(reading_time)}
                className='text-purple-600 underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blog;