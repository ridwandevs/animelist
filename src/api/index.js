import {api} from './helper';

export const getTopAnimeApi = () => {

    const resp = api.get('top/anime');
    return resp;

}

export const getAnimeDetail = (id) => {
    const resp = api.get('anime/'+id);
    return resp;
}