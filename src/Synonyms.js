import React from "react";

export default function Synonyms(props){
    return (
      <div className="Synonyms">
        <p>{props.synonyms.meanings[0].synonyms}</p>
      </div>
    );
}