import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";


export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState(null);

    function handleResponse(response){
       console.log(response.data.meanings);
       setResult(response.data); 
    }

    function search(event){
        event.preventDefault();
        let apiKey = "fc4oab2ba1a1af54f59bdb413t0b5a71";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
         setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange}/>
        </form>
        <Result result={result}/>
    </div>
    );
}