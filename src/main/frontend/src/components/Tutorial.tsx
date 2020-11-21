import React from 'react';
import ReactPlayer from "react-player";

export default function Tutorial() {
    return (
        <React.Fragment>
            <nav className="mt-5 pt-4">
                <div className="container d-flex flex-column align-items-center">

                    <h2 className="my-5 h2 text-center">Jak sprzedawać w internecie?</h2>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                    />
                </div>
            </nav>
        </React.Fragment>
    );
}
