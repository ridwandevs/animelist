import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../../src/components/layouts/NavBar'
import { useAnimeDetail } from '../../src/hooks/useAnimeDetail'

export default function AnimeDetail () {
    const router = useRouter()
    const { id } = router.query
    const {detail} = useAnimeDetail(id)


    return (
        <div className={"bg-gray-200 px-4 py-7 min-w-full min-h-full"}>
           <Head>
               <title>{detail.title}</title>
           </Head>
           <Navbar/>
            <div>
                <div className='flex flex-row'>
                    <div className='m-8'>
                        <img src={detail.images.jpg.large_image_url}/>
                    </div>
                    <div className='flex-1 mt-8'>
                        <h1 className='font-bold text-2xl '>
                            {detail.title} 
                        </h1>
                        <div>
                            <p className='mb-4 text-xs text-neutral-500'>Episodes : {detail.episodes} , Rating : {detail.rating} , Release : {detail.year}</p>
                        </div>
                        <div>
                            <p className={"text-justify text-sm w-5/6"}>
                                {detail.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}