const Feed = () => {
    return (
        <div className="Feed">
            <a href="/create/"className="fixed bottom-10 right-10 bg-purple-500 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
            </a>

            <div className="h-full place-content-center justify-center items-center text-center m-5 md:mx-auto mb-20">
                <h1 className="mb-20">Welcome back, <span id="heading-1" className="underline decoration-purple-500 decoration-10">username</span>!</h1>

                <div className="w-full md:w-6/12 p-6 md:p-10 md:mx-auto bg-purple-100 rounded-xl" href="/tweet/">
                    <div className="flex mb-2">
                        <p id="bold" className="text-xl pr-2">Alicia Here!</p>
                        <p className="text-xl">@leeeshieu</p>
                    </div>
                    <p className="flex text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare, ligula varius dignissim fermentum, nulla quam semper velit, condimentum posuere elit tortor consequat mi. Aenean ullamcorper elit a ligula consequat mattis. Duis ullamcorper vel sem in gravida. Curabitur lobortis lectus nec mollis malesuada. In dui massa, facilisis eget turpis id, consectetur egestas eros. Phasellus dignissim, ligula nec pulvinar laoreet, diam dui facilisis justo, ut vehicula dolor quam et leo. Quisque pellentesque faucibus fringilla. Aliquam feugiat tempor ipsum, sed dapibus arcu rutrum varius. Vestibulum posuere, eros eu commodo feugiat, lectus ligula sollicitudin felis, eu hendrerit quam orci at sem. Mauris eu porttitor sem. Pellentesque risus libero, placerat in fermentum eu, pulvinar sit amet metus. Nunc lorem sem, fermentum id tempus at, congue ac risus. Nulla vulputate lectus a lobortis pretium. Mauris pellentesque lacinia orci nec pulvinar.</p>
                    <hr class="h-px mt-5 bg-gray-500 border-solid border-0" />
                    <p className="flex text-gray-700 my-3">23:59 • 29 Feb 2023</p>
                    <hr class="h-px mb-3 bg-gray-500 border-solid border-0" />
                    <div>
                        <a href="/reply/" className="px-10 mx-2 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600">Reply</a>
                        <a href="/edit/" className="px-10 mx-2 py-2 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">Edit</a>
                    </div>
                </div>
                <br></br>
                <div className="w-full md:w-6/12 p-6 md:p-10 md:mx-auto bg-purple-100 rounded-xl" href="/tweet/">
                    <div className="flex mb-2">
                        <p id="bold" className="text-xl pr-2">Alicia Here!</p>
                        <p className="text-xl">@leeeshieu</p>
                    </div>
                    <p className="flex text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare, ligula varius dignissim fermentum, nulla quam semper velit, condimentum posuere elit tortor consequat mi. Aenean ullamcorper elit a ligula consequat mattis. Duis ullamcorper vel sem in gravida. Curabitur lobortis lectus nec mollis malesuada. In dui massa, facilisis eget turpis id, consectetur egestas eros. Phasellus dignissim, ligula nec pulvinar laoreet, diam dui facilisis justo, ut vehicula dolor quam et leo. Quisque pellentesque faucibus fringilla. Aliquam feugiat tempor ipsum, sed dapibus arcu rutrum varius. Vestibulum posuere, eros eu commodo feugiat, lectus ligula sollicitudin felis, eu hendrerit quam orci at sem. Mauris eu porttitor sem. Pellentesque risus libero, placerat in fermentum eu, pulvinar sit amet metus. Nunc lorem sem, fermentum id tempus at, congue ac risus. Nulla vulputate lectus a lobortis pretium. Mauris pellentesque lacinia orci nec pulvinar.</p>
                    <hr class="h-px mt-5 bg-gray-500 border-solid border-0" />
                    <p className="flex text-gray-700 my-3">23:59 • 29 Feb 2023</p>
                    <hr class="h-px mb-3 bg-gray-500 border-solid border-0" />
                    <div>
                        <a href="/reply/" className="px-10 mx-2 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600">Reply</a>
                        <a href="/edit/" className="px-10 mx-2 py-2 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">Edit</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Feed;