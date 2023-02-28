import { useState, useEffect } from 'react';

const Create = () => {
    const [tweet, setPosts] = useState([]);

    const today = new Date();
    let time = today.getHours + ":" + today.getMinutes();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let dataLength = 0;

    const postTweet = () => {
        fetch('http://localhost:8000/data')
            .then((response) => response.json())
            .then((data) => {
                dataLength = data.length;
        })

        fetch('http://localhost:8000/data', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'id': dataLength + 1,
                'user': {
                    'displayname': "Anonymous User",
                    'username': "mranonymous"
                },
                'tweet': document.getElementById("tweet-area").value,
                'time': time,
                'date': date
            })
        }).then(() => {
            console.log('new tweet added.')
            window.location.replace('http://localhost:3000/');
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <div className="Tweet">
            <div className="h-full py-40 place-content-center justify-center items-center text-center px-12 my-auto">
            <h1 className="mb-5">What's on your mind?</h1>
                <form>
                    <textarea id="tweet-area" className="w-full md:w-6/12 p-2.5 text-gray-900 rounded-lg border border-gray-300" placeholder="Write your thoughts here..."></textarea>
                    <br></br>
                    <button onClick={postTweet} className="px-20 py-1 rounded-full bg-purple-500 text-white">Tweet</button>
                </form>
            </div>
        </div>
    );
}
 
export default Create;