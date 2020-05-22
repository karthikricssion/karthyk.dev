import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';

const PostTagAuthor = (props) => {
    return (            
        <Link 
            className="tags__link"
            to={`/writings/category/${_.kebabCase(props.category)}`}>{props.category}
        </Link>
    )
}

export default PostTagAuthor