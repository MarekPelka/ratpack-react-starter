import React, {useState} from 'react';

interface CeidgCompany {
    company: string,
    email: string,
    name: string,
    lastname: string,
    location: string,
    mainpkd: string,
    mainpkddesc: string,
    nip: string,
    regon: string
    site: string
}

export default function Registration() {
    const [isEntrepreneur, setIsEntrepreneur] = useState(false);
    const [company, setCompany] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [nip, setNip] = useState<string>("");
    const [regon, setRegon] = useState<string>("");
    const [site, setSite] = useState<string>("");
    const [delivery, setDelivery] = useState<boolean>(false);


    const addressPlaceholder = isEntrepreneur ? "Siedziba Twojej firmy np. Rynek Staromiejski 1, 73-110 Stargard"
        : "Twój adres zamieszkania np. Rynek Staromiejski 1, 73-110 Stargard";


    const submitRegistrationForm = (e: any) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        let object: any = {};
        data.forEach((value, key) => object[key] = value);

        //Add nip and regon
        object['nip'] = nip;
        object['regon'] = regon;

        console.log(JSON.stringify(object));

        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(object)
        });
    };

    const getDataFromCeidg =  (e: any) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        let object: any = {};
        data.forEach((value, key) => {
            if (value !== undefined && value.toString().length > 0) {
                console.log(value);
                object[key] = value;
            }
        });

        console.log(object);

        fetch('http://127.0.0.1:3001/ceidg?' + new URLSearchParams(object)).then(result => result.json()).then(
            (companyFromCeidgArr: Array<CeidgCompany>) => {
            if (companyFromCeidgArr.length > 0) {
                console.log(companyFromCeidgArr[0]);
                setCompany(companyFromCeidgArr[0].company);
                setEmail(companyFromCeidgArr[0].email);
                setName(companyFromCeidgArr[0].name);
                setLastname(companyFromCeidgArr[0].lastname);
                setLocation(companyFromCeidgArr[0].location);
                setNip(companyFromCeidgArr[0].nip);
                setRegon(companyFromCeidgArr[0].regon);
                setSite(companyFromCeidgArr[0].site);
            }
        });
    };

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
                                               htmlFor="customSwitch2">Osoba fizyczna / Przedsiebiorca</label>
                                    </div>
                                    {isEntrepreneur &&
                                    <div>
                                        <div className="alert alert-primary my-3" role="alert">
                                            W celu przyspieszenia rejestracji zachęcamy do skorzystania z mechanizmu
                                            autouzupełniania, który pobierze dane Twojej firmy z Centralnej Ewidencji i
                                            Informacji o Działalności Gospodarczej.
                                            Aby skorzystać z mechanizmu proszę podać numer NIP lub REGON Twojej
                                            działalności gospodarczej, a następnie naciśnij przycisk "Pobierz dane"
                                        </div>
                                        < div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link" type="button"
                                                                data-toggle="collapse" data-target="#collapseOne"
                                                                aria-expanded="true" aria-controls="collapseOne">
                                                            Opcjonalne: Autouzupełnianie danych z CEIDG
                                                        </button>
                                                    </h2>
                                                </div>

                                                <div id="collapseOne" className="collapse show"
                                                     aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <form className="card-body" onSubmit={getDataFromCeidg}>
                                                        <div className="row">

                                                            <div className="col-md-6 mb-2">

                                                                <div className="md-form ">
                                                                    <label htmlFor="name">NIP</label>
                                                                    <input type="number" id="nip" className="form-control" name="nip" value={nip} onChange={event => setNip(event.target.value)}/>
                                                                </div>

                                                            </div>

                                                            <div className="col-md-6 mb-2">

                                                                <div className="md-form">
                                                                    <label htmlFor="lastname" className="">REGON</label>
                                                                    <input type="number" id="regon" className="form-control" value={regon} onChange={event => setRegon(event.target.value)}
                                                                           name="regon"/>
                                                                </div>

                                                            </div>

                                                        </div>

                                                        <button className="btn btn-primary"
                                                                type="submit">Pobierz dane
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </div>

                                <form className="card-body" onSubmit={submitRegistrationForm}>

                                    <hr/>


                                    <div className="row">

                                        <div className="col-md-6 mb-2">

                                            <div className="md-form ">
                                                <label htmlFor="name">Imię</label>
                                                <input type="text" id="name" className="form-control" name="name" value={name}  onChange={event => setName(event.target.value)}/>
                                            </div>

                                        </div>

                                        <div className="col-md-6 mb-2">

                                            <div className="md-form">
                                                <label htmlFor="lastname" className="">Nazwisko</label>
                                                <input type="text" id="lastname" className="form-control" value={lastname}  onChange={event => setLastname(event.target.value)}
                                                       name="lastname"/>
                                            </div>

                                        </div>

                                    </div>

                                    {isEntrepreneur &&
                                    <div className="md-form mb-3">
                                        <label htmlFor="bankAccount" className="">Numer rachunku bankowego</label>
                                        <input type="text" id="bankAccount" name="bankAccount" className="form-control"
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
                                        <input type="text" id="email" name="email" className="form-control" value={email} onChange={event => setEmail(event.target.value)}
                                               placeholder="Twój firmowy adres email np. youremail@example.com"/>
                                    </div>

                                    <div className="md-form mb-3">
                                        <label htmlFor="number" className="">Telefon</label>
                                        <input type="text" id="phone" name="phone" className="form-control"/>
                                    </div>

                                    <div className="md-form mb-3">
                                        <label htmlFor="address" className="">Adres</label>
                                        <input type="text" id="address" name="address" className="form-control" value={location} onChange={event => setLocation(event.target.value)}
                                               placeholder={addressPlaceholder}/>
                                    </div>

                                    {isEntrepreneur &&
                                    <div className="md-form mb-3">
                                        <label htmlFor="address" className="">Twoja strona WWW</label>
                                        <input type="text" id="site" name="site" className="form-control" value={site}  onChange={event => setSite(event.target.value)}
                                               placeholder="Adres Twojej strony WWW jeśli ją posiadasz np. example.com"/>
                                    </div>
                                    }

                                    {isEntrepreneur &&
                                    <div>
                                        <hr/>
                                        <div className="md-form mb-3">
                                            <label htmlFor="company" className="">Nazwa działalności
                                                gospodarczej</label>
                                            <input type="text" id="company" name="company" className="form-control" value={company} onChange={event => setCompany(event.target.value)}
                                                   placeholder="Wpisz tutaj nazwę Twojej firmy"/>
                                        </div>
                                        <div className="md-form mb-3">
                                            <label htmlFor="offer" className="">Oferta</label>
                                            <textarea id="offer" name="offer" className="form-control" rows={3}
                                                      placeholder="Krótko podsumuj swoją ofertę np. sprzedawane produkty, oferowane usługi."/>
                                        </div>

                                        <div className="md-form mb-3">
                                            <label htmlFor="specialOffer" className="">Promocje</label>
                                            <textarea id="specialOffer" name="specialOffer" className="form-control" rows={3}
                                                      placeholder="Zachęć użytkowników do skorzystania z Towich usług. Zaproponuj zniżkę lub ofertę łączoną w atrakcyjnej cenie."/>
                                        </div>

                                        <hr/>

                                        <div className="input-group flex-column">
                                            <label>Opcje dostawy:</label>
                                            <div className="custom-control custom-checkbox mb-2">
                                                <input type="checkbox" className="custom-control-input" id="deliveryInPerson" name="deliveryInPerson"/>
                                                <label className="custom-control-label" htmlFor="deliveryInPerson">Odbiór
                                                    osobisty</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-2">
                                                <input type="checkbox" className="custom-control-input" id="delivery" name="delivery" checked={delivery} onChange={event => setDelivery(event.target.checked)}/>
                                                <label className="custom-control-label" htmlFor="delivery">Dostawa pod
                                                    wskazany adres</label>
                                            </div>
                                            {delivery &&
                                            <div>
                                                <div className="input-group flex-column ml-4">
                                                    <div className="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" className="custom-control-input" id="cityDelivery" name="cityDelivery"/>
                                                        <label className="custom-control-label" htmlFor="cityDelivery">Dostawa
                                                            na
                                                            terenie miasta</label>
                                                    </div>
                                                    <div className="md-form mb-2">
                                                        <label htmlFor="deliverySpecification" className="">Informacja o
                                                            dostawie</label>
                                                        <textarea id="deliverySpecification" name="deliverySpecification" className="form-control"
                                                                  rows={3}
                                                                  placeholder="W przypadku opcji dostawy towaru przez Twoją firmę, krótko przedstaw klientowi sposób tej dostawy."/>
                                                    </div>
                                                    <div className="md-form mb-3">
                                                        <label htmlFor="deliveryRange" className="">Zasięg dostawy w
                                                            [km]</label>
                                                        <input type="number" id="deliveryRange" name="deliveryRange" className="form-control"
                                                               placeholder="Podaj zasięg Twojej dostawy np. 10 - będzie to skutkowało tym że adres dostawy nie może być dalszy niż 10 km od Twojej siedziby"/>
                                                    </div>
                                                </div>
                                            </div>
                                            }
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