import { useState, useEffect } from 'react';

const Feed = () => {
    const [tweet, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="Feed">
            <a href="/create/"className="fixed bottom-10 right-10 bg-purple-500 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
            </a>

            <div className="h-full place-content-center justify-center items-center text-center m-5 md:mx-auto mb-20">
                <h1 className="mb-20">Welcome back, <span id="heading-1" className="underline decoration-purple-500 decoration-10">username</span>!</h1>

                { tweet.map((tweet) => {
                    return (
                        <div className="w-full md:w-6/12 p-6 md:p-10 md:mx-auto bg-purple-100 rounded-xl my-10" href="/tweet/">
                            <div className="flex mb-2">
                                <p id="bold" className="text-xl pr-2">{ tweet.user.displayname }</p>
                                <p className="text-xl">@{ tweet.user.username }</p>
                            </div>
                            <p className="flex text-justify">{ tweet.tweet }</p>
                            <hr class="h-px mt-5 bg-gray-500 border-solid border-0" />
                            <p className="flex text-gray-700 my-3">{ tweet.time } • { tweet.date }</p>
                            <hr class="h-px mb-3 bg-gray-500 border-solid border-0" />
                            <div>
                                <a href="/reply/" className="px-10 mx-2 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600">Reply</a>
                                <a href="/edit/" className="px-10 mx-2 py-2 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">Edit</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
 
export default Feed;