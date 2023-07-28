import {axiosInstance} from "@/service/movie.api";
import useFetchApi from "@/composables/useFetchApi";

export default ()=>{
    const getTrendingMovie=()=>{
        return new Promise(async (resolve ,reject)=>{
            try {
                const response = await useFetchApi('/trending/movie/day')
                // console.log("this is ",response)
                resolve(response);
            }catch (error){
                reject (error)
            }
        })
    }
    const getPopularMovie =()=>{
        return new Promise(async (resolve ,reject)=>{
            try {
                const response = await useFetchApi('tv/popular')
                // console.log("this is ",response)
                resolve(response);
            }catch (error){
                reject (error)
            }
        })
    }
    return {
        getTrendingMovie,
        getPopularMovie
    }
}