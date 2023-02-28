import { useState, useEffect } from 'react';
import TweetCard from './TweetCard';

const Feed = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTweets(Array.from(data));
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="Feed">
            <a href="/create/"className="fixed bottom-10 right-10 bg-purple-500 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
            </a>

            <div className="h-full place-content-center justify-center items-center text-center m-5 md:mx-auto mb-20">
                <h1 className="mb-20">Welcome back, <span id="heading-1" className="underline decoration-purple-500 decoration-10">username</span>!</h1>

                { tweets.map((tweet) => (
                    <TweetCard tweet={tweet} key={tweet.id} />
                ))}
            </div>
        </div>
    );
}
 
export default Feed;