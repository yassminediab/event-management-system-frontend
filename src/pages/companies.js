import CompaniesList from "../components/companies/CompaniesList";
import {GetCompanyHandler} from "../components/companies/get-companies.request";
import React from "react";
import {useNavigate} from "react-router-dom";

function CompaniesPage() {

    const companiesHandler = GetCompanyHandler;
    const [companies, setCompanies] = React.useState(null);

    const navigate = useNavigate();
    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) {
            navigate('/login', {replace: true});
            window.location.reload();
        }
        if(user?.company?.id) {
            navigate('/companyEvents', {replace: true});
            window.location.reload();
        }
    }, []);

    React.useEffect(() => {
        companiesHandler(setCompanies);
    }, []);

return <CompaniesList companies={companies}/>;
}

export default CompaniesPage;
