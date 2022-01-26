import { useTopAnime } from "../../hooks/useTopAnime"
import Link from 'next/link'

export default function TopAnimeCard () {
    
    const {topAnime} = useTopAnime();

    return (
       <div>
           <h1 className="mb-4 text-lg font-light">Top Anime</h1>
            <div className="flex flex-row">
                { topAnime.data.slice(0,10).map(item => (
                    <div className="mr-4 bg-slate-400 shadow-md rounded  w-44">
                        <img src={item.images.jpg.large_image_url} className={"h-72 w-44 rounded-t"}/>
                        <h3 className="p-2 font-bold text-sm">
                            {item.title}
                        </h3>
                        <div className="p-2 rounded  mx-2 bg-orange-300">
                            <Link href={"/anime/"+item.mal_id} className=" text-xs font-bold text-orange-800">
                                View More
                            </Link>
                        </div>
                        
                        <div className="flex flex-row p-2 self-end">
                            <p className="text-xs">Episodes: {item.episodes}</p>
                        </div>
                    </div>
                ))}
            </div>
       </div>
        
    )
}