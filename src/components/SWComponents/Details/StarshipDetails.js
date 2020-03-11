import React from "react";
import Record from "../../Record";
import {withDataDetails} from "../../HOCHelper";
import ItemDetails from "../../ItemDetails";
import SwapiContextDetails from "../../HOCHelper/SwapiService";
import compose from "../../HOCHelper/compose";

const StarshipRecord = (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                <Record field="model" label="Model"/>
                <Record field="manufacturer" label="Manufacturer"/>
                <Record field="costInCredits" label="Cost In Credits"/>
                <Record field="length" label="Length"/>
                <Record field="crew" label="Crew"/>
                <Record field="passengers" label="Passengers"/>
                <Record field="cargoCapacity" label="Cargo Capacity"/>
            </Wrapped>
        )
    }
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImage: swapiService.getStarhipImage
    }
};

const StarshipDetails = compose(
    SwapiContextDetails(mapMethodsToProps),
    withDataDetails,
    StarshipRecord
)(ItemDetails);

export default StarshipDetails;