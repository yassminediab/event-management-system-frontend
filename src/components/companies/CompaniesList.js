import CompanyItem from "./CompanyItem";
import React from "react";

function CompaniesList(props) {
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                     data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Companies</h6>
                </div>
                <div className="row g-4">
                    {props.companies?.map((company) => (
                        <CompanyItem
                            key={company.id}
                            id={company.id}
                            title={company.title}
                            numberOfFollowers={company.numberOfFollowers}
                            userName={company.user?.name}
                            isFollowed={company?.isFollowed}
                        />
                    ))}
                    {props.companies?.length === 0 && <h2 className="mt-2">No Companies Found</h2>}

                </div>
            </div>
        </div>
    );
}

export default CompaniesList;
