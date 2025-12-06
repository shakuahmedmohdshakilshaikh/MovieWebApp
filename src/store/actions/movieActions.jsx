export {removemovie}  from '../reducers/movieSlice';
import axios  from "../../utils/axios";
import {loadmovie}  from '../reducers/movieSlice';

export const asyncloadmovie = (id) =>  async(dispatch,getstate) => {                    

    try {
        const details = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos  = await axios.get(`/movie/${id}/videos`);
        const watchproviders  = await axios.get(`/movie/${id}/watch/providers`);
       
        let ultimatedetails = {
            details: details.data,
            externalids : externalid.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            videos : videos.data.results.find(m => m.type === "Trailer" || m.site === "YouTube"),
            watchproviders : watchproviders.data.results.IN
        }
        dispatch(loadmovie(ultimatedetails));
        console.log(ultimatedetails);
        
    } catch (error){
        console.log("error", error);
        
    }
    
}

