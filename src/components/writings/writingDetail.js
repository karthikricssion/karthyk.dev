import React from 'react';

import DateAuther from './postDetailComponents/dateAuthor';
import Tags from './postDetailComponents/tags';

const WritingDetails = ( props ) => {
    return (
        <DateAuther 
            date={ props.post.frontmatter.date }
            author={ props.post.frontmatter.author }
        />
    )
}   

export default WritingDetails