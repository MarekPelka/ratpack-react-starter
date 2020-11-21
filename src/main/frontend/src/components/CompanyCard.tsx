import { Company } from "../model";
import React from "react";

export default function CompanyCard({ company }: { company: Company }) {
    const phone = 'tel:' + company.phone;
    return (
        <div className="card productCard">
            <img className="productImg card-img-top mx-auto" src={company.image} alt="" />
            <div className="card-body d-flex flex-column">
                <p className="m-0">
                    <strong>{company.name}</strong>
                </p>
                <p className="m-0 text-muted">{company.location}</p>
                <a  className="m-0" href={phone}>Tel. {company.phone}</a>
            </div>
        </div>
    );
}