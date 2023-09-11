import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3  bg-gray-100 mt-2 pt-4 ml-4">
            <h1 className="text-xl text-center font-bold">Bookmarks :{bookmarks.length} </h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;