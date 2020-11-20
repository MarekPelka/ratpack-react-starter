import React, {useState} from 'react';

export default function Registration() {
    const [isEntrepreneur, setIsEntrepreneur] = useState(false);

    const addressPlaceholder = isEntrepreneur ? "Siedziba Twojej firmy np. Rynek Staromiejski 1, 73-110 Stargard"
        : "Twój adres zamieszkania np. Rynek Staromiejski 1, 73-110 Stargard";

    return (
        <React.Fragment>
            <nav className="mt-5 pt-4">
                <div className="container wow fadeIn">

                    <h2 className="my-5 h2 text-center">Rejestracja</h2>

                    <div className="row">

                        <div className="col-md-12 mb-4">

                            <div className="card">
                                <div className="registration-header">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch2"
                                               checked={isEntrepreneur} onChange={() => {
                                            setIsEntrepreneur(!isEntrepreneur)
                                        }}/>
                                        <label className="custom-control-label"
                                               htmlFor="customSwitch2">Osoba fizyczna  /  Przedsiebiorca</label>
                                    </div>
                                    {isEntrepreneur &&
                                        <div className="alert alert-primary my-3" role="alert">
                                            W celu przyspieszenia rejestracji zachęcamy do skorzystania z mechanizmu autouzupełniania, który pobierze dane Twojej firmy z Centralnej Ewidencji i Informacji o Działalności Gospodarczej.
                                            Aby skorzystać z mechanizmu proszę podać numer NIP lub REGON Twojej działalności gospodarczej, a następnie naciśnij przycisk "Pobierz dane"
                                        </div>
                                    }
                                </div>
                                {/*<div className="custom-control custom-switch">*/}
                                {/*    <input type="checkbox" className="custom-control-input" id="customSwitch2"*/}
                                {/*           checked={!isEntrepreneur} onChange={() => {*/}
                                {/*        setIsEntrepreneur(!isEntrepreneur)*/}
                                {/*    }}/>*/}
                                {/*    <label className="custom-control-label" htmlFor="customSwitch2">Osoba*/}
                                {/*        fizyczna</label>*/}
                                {/*</div>*/}
                                <form className="card-body">

                                    <div className="row">

                                        <div className="col-md-6 mb-2">

                                            <div className="md-form ">
                                                <label htmlFor="firstName" className="">Imię</label>
                                                <input type="text" id="firstName" className="form-control"/>
                                            </div>

                                        </div>

                                        <div className="col-md-6 mb-2">

                                            <div className="md-form">
                                                <label htmlFor="lastName" className="">Nazwisko</label>
                                                <input type="text" id="lastName" className="form-control"/>
                                            </div>

                                        </div>

                                    </div>

                                    {isEntrepreneur &&
                                    <div className="md-form mb-3">
                                        <label htmlFor="email" className="">Numer rachunku bankowego</label>
                                        <input type="text" id="email" className="form-control"
                                               placeholder="Rachunek na który zostaną przelane pieniądze za zakupione produkty np. 61109010140000071219812874"/>
                                    </div>
                                    }

                                    <div className="md-form input-group pl-0 mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">@</span>
                                        </div>
                                        <input type="text" className="form-control py-0" placeholder="Nazwa użytkownika"
                                               aria-describedby="basic-addon1"/>
                                    </div>

                                    <hr/>

                                    <div className="md-form mb-3">
                                        <label htmlFor="email" className="">Email</label>
                                        <input type="text" id="email" className="form-control"
                                               placeholder="Twój firmowy adres email np. youremail@example.com"/>
                                    </div>

                                    <div className="md-form mb-3">
                                        <label htmlFor="number" className="">Telefon</label>
                                        <input type="text" id="phone" className="form-control"/>
                                    </div>

                                    <div className="md-form mb-3">
                                        <label htmlFor="address" className="">Adres</label>
                                        <input type="text" id="address" className="form-control"
                                               placeholder={addressPlaceholder}/>
                                    </div>

                                    {isEntrepreneur &&
                                        <div>
                                            <hr/>
                                            <div className="md-form mb-3">
                                                <label htmlFor="company" className="">Nazwa działalności gospodarczej</label>
                                                <input type="text" id="company" className="form-control"
                                                       placeholder="Wpisz tutaj nazwę Twojej firmy"/>
                                            </div>
                                            <div className="md-form mb-3">
                                                <label htmlFor="offer" className="">Oferta</label>
                                                <textarea id="offer" className="form-control" rows={3}
                                                          placeholder="Krótko podsumuj swoją ofertę np. sprzedawane produkty, oferowane usługi."/>
                                            </div>

                                            <div className="md-form mb-3">
                                                <label htmlFor="specialOffer" className="">Promocje</label>
                                                <textarea id="specialOffer" className="form-control" rows={3}
                                                          placeholder="Zachęć użytkowników do skorzystania z Towich usług. Zaproponuj zniżkę lub ofertę łączoną w atrakcyjnej cenie."/>
                                            </div>

                                            <hr/>

                                            <div className="input-group flex-column">
                                                <label>Opcje dostawy:</label>
                                                <div className="custom-control custom-checkbox mb-2">
                                                    {/*<input type="checkbox" className="custom-control-input" id="inPerson"/>*/}
                                                    <label className="custom-control-label" htmlFor="inPerson">Odbiór
                                                        osobisty</label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-2">
                                                    {/*<input type="checkbox" className="custom-control-input" id="delivery"/>*/}
                                                    <label className="custom-control-label" htmlFor="delivery">Dostawa pod
                                                        wskazany adres</label>
                                                </div>
                                                <div className="input-group flex-column ml-4">
                                                    <div className="custom-control custom-checkbox mb-2">
                                                        {/*<input type="checkbox" className="custom-control-input" id="cityDelivery"/>*/}
                                                        <label className="custom-control-label" htmlFor="cityDelivery">Dostawa na
                                                            terenie miasta</label>
                                                    </div>
                                                    <div className="md-form mb-2">
                                                        <label htmlFor="deliverySpecification" className="">Informacja o dostawie</label>
                                                        <textarea id="deliverySpecification" className="form-control" rows={3}
                                                                  placeholder="W przypadku opcji dostawy towaru przez Twoją firmę, krótko przedstaw klientowi sposób tej dostawy."/>
                                                    </div>
                                                    <div className="md-form mb-3">
                                                        <label htmlFor="range" className="">Zasięg dostawy w [km]</label>
                                                        <input type="number" id="range" className="form-control"
                                                               placeholder="Podaj zasięg Twojej dostawy np. 10 - będzie to skutkowało tym że adres dostawy nie może być dalszy niż 10 km od Twojej siedziby"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }




                                    <hr className="mb-4"/>
                                    <button className="btn btn-primary btn-lg btn-block"
                                            type="submit">Zarejestruj
                                    </button>

                                </form>

                            </div>

                        </div>
                    </div>

                </div>
            </nav>
        </React.Fragment>
    );
}