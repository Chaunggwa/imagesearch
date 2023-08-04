function ImageCard({image}) {
    return (
        <div className="max-w-full overflow-hidden shadow-lg rounded-lg m-2">
            <img src={image.webformatURL} alt={image.type} />
            <div className="px-6 py-4">
                <div className="font-bold text-green-400 text-xl mb-2">
                    Photo by <strong className="text-cyan-400">{image.user}</strong>
                </div>
                <ul>
                    <li><strong>Views: {image.views}</strong></li>
                    <li><strong>Downloads: {image.downloads}</strong></li>
                    <li><strong>Likes: {image.likes}</strong></li>
                </ul>
                <div className="w-full py-4">
                {image.tags.split(",").map((tag, index) => {
                            return (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 m-1">
                                    #{tag}
                                </span> 
                            )
                        })}
                    
                </div>
            </div>
        </div>
    )
}

export default ImageCard;