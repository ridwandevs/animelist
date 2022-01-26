import react, {useState, useEffect} from 'react';
import {getTopAnimeApi} from '../api'

export const useTopAnime = () => {

    const [topAnime, setTopAnime] = useState({data:[]});

    useEffect(() => {
      getTopAnime()
    }, []);
    
    
    const getTopAnime = async () => {
        try{
            const resp = await getTopAnimeApi();
            setTopAnime(resp.data)
        }catch(e){
            console.log(e)
        }
    }

    return {
        getTopAnime,
        topAnime
    }
}