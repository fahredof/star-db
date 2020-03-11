import React from "react";
import Record from "../../Record";
import {withDataDetails} from "../../HOCHelper";
import ItemDetails from "../../ItemDetails";
import SwapiContextDetails from "../../HOCHelper/SwapiContextDetails";

const PlanetRecord = (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                <Record field="population" label="Population"/>
                <Record field="rotationPeriod" label="Rotation Period"/>
                <Record field="diameter" label="Diameter"/>
            </Wrapped>
        )
    }
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImage: swapiService.getPlanetImage
    }
};

const PlanetDetails = SwapiContextDetails(
    withDataDetails(PlanetRecord(ItemDetails), 6),
    mapMethodsToProps
);

export default PlanetDetails;