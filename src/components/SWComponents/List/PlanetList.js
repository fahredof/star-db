import {withData} from "../../HOCHelper";
import ItemList from "../../ItemList";
import {withChildFunction, renderName} from "./withChildFunction";
import SwapiContextDetails from "../../HOCHelper/SwapiContextDetails";

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const PlanetList = SwapiContextDetails(
    withData(withChildFunction(ItemList, renderName)),
    mapMethodsToProps
);

export default PlanetList;