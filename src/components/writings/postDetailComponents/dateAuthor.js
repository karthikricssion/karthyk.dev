import React from 'react';

const PostDateAuthor = ( props ) => {
    return (
        <aside>
            <time>{ props.date }</time>, by <a href={ props.author.url }>{ props.author.name }</a>
        </aside>
    )
}

export default PostDateAuthor