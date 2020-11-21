import React from 'react';
import ReactPlayer from "react-player";

export default function Tutorial() {
    return (
        <React.Fragment>
            <nav className="mt-5 pt-4">
                <div className="container d-flex flex-column align-items-center">

                    <h2 className="my-5 h2 text-center">Jak sprzedawać w internecie?</h2>
                    <div className="mb-5">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=1F8HZjJYnUA&t=161s"
                        />
                    </div>
                    <dl className="row">
                        <dt className="col-sm-3">Dodawanie produktow</dt>
                        <dd className="col-sm-9">Na podstawie samouczka dowiesz się na czym skupić sie podczas doddawania swoich produktów.</dd>

                        <dt className="col-sm-3">Opis produktów</dt>
                        <dd className="col-sm-9">
                            <p>Jak przykuć uwagę klienta, czy mniej znaczy lepiej?</p>
                        </dd>

                        <dt className="col-sm-3">Marketing internetowy</dt>
                        <dd className="col-sm-9">Jak pozyskać i zachęcić klientów w dobie Internetu? Jakich kanałów użyć?</dd>
                    </dl>
                </div>
            </nav>
        </React.Fragment>
    );
}
