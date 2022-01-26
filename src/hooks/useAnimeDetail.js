import react, {useState, useEffect} from 'react';
import { getAnimeDetail } from '../api';

export const useAnimeDetail = (id) => {

    const [detail, setDetail] = useState({ })

    useEffect(() => {
      getDetail();
    }, []);
    

    const getDetail = async () => {
        try{
            const resp = await getAnimeDetail(id);
            setDetail(resp.data.data)
        }catch(e){
            console.log(e)
        }
    }

    return {
        detail
    }
}