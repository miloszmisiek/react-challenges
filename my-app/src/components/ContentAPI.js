import React, { Component } from 'react'
import css from "./css/Content.module.css";
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets';


export class ContentAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: []
        }
    }

    componentDidMount() {
        this.fetchImage();
    }

    async fetchImage() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        const fetchedPosts = response.data.hits;
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts
        })
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter(post => post.user.toLowerCase().includes(name))
        this.setState({ posts: filteredPosts })
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                    <form>
                        <label htmlFor='searchInput'>Search:</label>
                        <input
                            type="search"
                            id='searchInput'
                            placeholder='By Author'
                            onChange={(e) => this.handleChange(e)}
                        />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? <PostItemAPI savedPosts={this.state.posts} /> : <Loader />}
                </div>
            </div>
        )
    }
}

export default ContentAPI
