import React from 'react';
import css from "./css/Content.module.css";

function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            const { name, title, description, image } = post;
            return (
                <div key={title} className={css.SearchItem}>
                    <p>Title: {title}</p>
                    <p>Artist: {name}</p>
                    <img src={image} alt=""></img>
                    <p>Description: {description}</p>
                </div>
            )
        })

    )
}

export default PostItem
