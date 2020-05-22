import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';

const PostTagAuthor = (props) => {
    return (
        <>
            {props.tags.map((tag, index) => (
                <span className="tags-link-holder" key={ index }>
                    <Link 
                        className="tags__link"
                        to={`/writings/tags/${_.kebabCase(tag)}`}>
                        {tag}
                    </Link>
                    { props.tags.length > index + 1 ? `, ` : ``}
                </span>
            ))}
        </>
    )
}

export default PostTagAuthor