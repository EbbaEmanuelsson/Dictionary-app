import React from "react";
import "./Result.css";
import Synonyms from "./Synonyms";



export default function Result(props){
    
    console.log(props)
    if (props.result){
    return (
      <div className="Result">
        <div className="row mt-5">
          <div className="col-6">
            <div className="section">
              <h2>{props.result.word}</h2>
              <p>{props.result.phonetic}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="section">
              <h2>{props.result.meanings[0].partOfSpeech}</h2>
              <p>
                {props.result.meanings[0].definition}
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-4">
          <div className="col-6">
            <div className="section">
              <h2>{props.result.meanings[1].partOfSpeech}</h2>
              <p>{props.result.meanings[1].definition}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="section">
              <h2>Synonyms</h2>
              <p>{props.result.meanings[0].synonyms}</p>
            </div>
          </div>
        </div>
      </div>
    );
    } else {
        return null;
    }
    
}
