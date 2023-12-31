import React from "react";

export default function Photos(props){
    if(props.photos) {
        return(
            <div className="Photos">
                <div className="row">
                    {props.photos.map(function (photo, index){
                        console.log(photo);
                        return (
                          <div className="col-4" key={index}>
                            <a
                              href={photo.src.original}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={photo.src.landscape}
                                className="img-fluid"
                                alt="here are pictures of your search"
                              />
                            </a>
                          </div>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return null;
    }
}