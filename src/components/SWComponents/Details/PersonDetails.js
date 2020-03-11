import React from "react";
import Record from "../../Record";
import {withDataDetails} from "../../HOCHelper";
import ItemDetails from "../../ItemDetails";
import SwapiContextDetails from "../../HOCHelper/SwapiService";
import compose from "../../HOCHelper/compose";

const PersonRecord = (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                <Record field="gender" label="Gender"/>
                <Record field="birthYear" label="Birth Year"/>
                <Record field="eyeColor" label="Eye Color"/>
            </Wrapped>
        )
    }
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImage: swapiService.getPersonImage
    }
};

const PersonDetails = compose(
    SwapiContextDetails(mapMethodsToProps),
    withDataDetails,
    PersonRecord
)(ItemDetails);

export default PersonDetails;
