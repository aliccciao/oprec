const Create = () => {
    return (
        <div className="Tweet">
            <div className="h-full py-40 place-content-center justify-center items-center text-center px-12 my-auto">
            <h1 className="mb-5">What's on your mind?</h1>
                <form>
                    <textarea className="w-full md:w-6/12 p-2.5 text-gray-900 rounded-lg border border-gray-300" placeholder="Write your thoughts here..."></textarea>
                    <br></br>
                    <button className="px-20 py-1 rounded-full bg-purple-500 text-white">Tweet</button>
                </form>
            </div>
        </div>
    );
}
 
export default Create;