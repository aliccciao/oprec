import { useState } from 'react';

const Create = () => {
    const [content, setTitle] = useState("");

    const today = new Date();
    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    let time = today.getHours() + ":" + today.getMinutes();
    
    let date = longEnUSFormatter.format(today);

    const postTweet = () => {
        fetch('http://localhost:8000/data', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'user': {
                    'displayname': "Anonymous User",
                    'username': "mranonymous"
                },
                'tweet': content,
                'time': time,
                'date': date
            })
        }).then(() => {
            setTitle("")
            alert("You've posted a new tweet!")
            window.location.replace('/')
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <div className="Tweet">
            <div className="h-full py-40 place-content-center justify-center items-center text-center px-12 my-auto">
                <h1 className="mb-5">What's on your mind?</h1>
                <form>
                    <textarea value={content} onChange={(e) => setTitle(e.target.value)} className="w-full md:w-6/12 p-2.5 text-gray-900 rounded-lg border border-gray-300" placeholder="Write your thoughts here..."></textarea>
                    <br></br>
                    <div className="mt-5">
                        <a onClick={postTweet} className="cursor-pointer px-10 mx-2 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600">Post!</a>
                        <a href="/" className="px-10 mx-2 py-2 rounded-full border-2 box-border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">Back</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Create;