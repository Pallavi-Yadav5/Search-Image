import axios from 'axios';
import { useState,useEffect } from 'react';

const count = 1;
function LoadImages(){
    const [state,setState] = useState([]);
    useEffect(() => {
    axios
    .get("https://api.unsplash.com/photos/?client_id=ekGO8KT9U5w8Yer6sSJOkG5b0KmstW-mqTwMKoZEAC4")
    .then((data)=>{
        setState(data.data)
       })
    },[count])
    return state;
}
function SearchImages(query){
    const [state,setState] = useState([]);
    useEffect(() => {
    axios
    .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=ekGO8KT9U5w8Yer6sSJOkG5b0KmstW-mqTwMKoZEAC4")
    .then((data)=>{
        setState(data.data.results)
       })
    },[query])
    return state;
}
export {LoadImages,SearchImages}