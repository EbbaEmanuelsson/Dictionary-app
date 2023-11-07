import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";


export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
       setResult(response.data); 
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(event){
        event.preventDefault();
        let apiKey = "fc4oab2ba1a1af54f59bdb413t0b5a71";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey =
          "RBXfGZpnw5WLuElSUQkD3UJFAcpQriyeTZzk0qQFk4LKt3SfhWkyELYK";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event){
         setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange}/>
        </form>
        <Result result={result} />
        <Photos photos={photos} />
    </div>
    );
}