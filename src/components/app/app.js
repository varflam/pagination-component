import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../cards/cards';
import Pagination from '../Pagination/pagination';

import './app.css';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const getPage = (page) => {
        setPage(page);
    }

    const getPerPage = (perPage) => {
        setPerPage(perPage);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return(
        <div className="container">
            <h1 className="text-primary">Anime titles</h1>
            <Card posts={currentPosts} loading={loading}/>
            <Pagination totalCount={posts.length} getPage={getPage} getPerPage={getPerPage}/>
        </div>
    )
}

export default App;

