import { useState } from "react";
import ImageCard from "./components/ImageCard";
import { useQuery } from "react-query";
import Loader from "./components/Loader";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState(inputValue);
  const fetchImages = async() => {
    const response = await fetch(`https://pixabay.com/api/?key=35328995-33a20d3fc254bfe80e3c301fb&q=${query}&image_type=photo&pretty=true&per_page=60`);
    return response.json();
}
  const {data, isLoading, isError} = useQuery(["images", query], fetchImages, {
    keepPreviousData: true
  });
  console.log(data);
  if(isLoading) return <Loader />;
  if(isError) return <h1 className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">Something went wrong!</h1>
  return (
    <div className="mx-auto my-3">
      <div className="w-full flex flex-row px-2 my-1">
        <input className=" sm:basis-1/4 basis-2/3 mr-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value={inputValue || ""} placeholder="Search images" onChange={(e) => setInputValue(e.target.value)} />
        <button className="sm:basis-1/6 basis-1/3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => {
          setQuery(inputValue)
          setInputValue("");
        }}>Search</button>
      </div>
      {(data.total == 0) ? <h2 className="p-4 mx-2 my-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">Noting to show.</h2> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

{
  data.hits.map((image, index) => <ImageCard image={image} key={index} />)
}
</div>}
      

    </div>
  
  )
}

export default App;