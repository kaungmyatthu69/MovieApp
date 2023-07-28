import {axiosInstance} from "@/service/movie.api";
export default ((url)=>{
    return axiosInstance.get(url)
})