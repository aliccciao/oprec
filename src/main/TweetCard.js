import { useState } from 'react';

const TweetCard = ({ tweet, setRefresh }) => {
    const [content, setTitle] = useState("");

    const interactModal = () => {
        document.querySelector("#edit").classList.toggle("hidden")
    }

    const deleteTweet = () => {
        fetch("http://localhost:8000/data/" + tweet.id, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        }).then(() => {
            alert("You've deleted a tweet!")
            console.log('tweet deleted.')
            window.location.reload(true)
            setRefresh(true);
        });
    }

    const editTweet = () => {
        tweet.tweet = content

        fetch('http://localhost:8000/data/' + tweet.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tweet)
        }).then(() => {
            setTitle("")
            alert("You've edited a tweet!")
            window.location.reload(true)
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <div>
            <div className="w-full md:w-6/12 p-6 md:p-10 md:mx-auto bg-purple-100 rounded-xl my-10" href="/tweet/">
                <div className="flex mb-2">
                    <p id="bold" className="text-xl pr-2">{ tweet.user.displayname }</p>
                    <p className="text-xl">@{ tweet.user.username }</p>
                </div>
                <p className="flex text-justify">{ tweet.tweet }</p>
                <hr className="h-px mt-5 bg-gray-500 border-solid border-0" />
                <p className="flex text-gray-700 my-3">{ tweet.time } • { tweet.date }</p>
                <hr className="h-px mb-3 bg-gray-500 border-solid border-0" />
                <div>
                    <a onClick={interactModal} className="cursor-pointer px-10 mx-2 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600">Edit</a>
                    <a onClick={deleteTweet} className="cursor-pointer px-10 mx-2 py-2 rounded-full border-2 box-border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">Delete</a> 
                </div>
            </div>

            <div id="edit" className="hidden w-full md:w-6/12 px-5 md:mx-auto">
                <div className="place-content-center justify-center items-center text-center mb-6">
                    <textarea onChange={(e) => setTitle(e.target.value)} className="w-full p-2.5 mb-5 text-gray-900 rounded-lg border border-gray-300">{ tweet.tweet }</textarea>
                    <br></br>
                    <div>
                        <a onClick={editTweet} className="cursor-pointer px-10 mx-2 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600">Post!</a>
                        <a onClick={interactModal} className="cursor-pointer px-10 mx-2 py-2 rounded-full border-2 box-border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">Cancel</a> 
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default TweetCard;