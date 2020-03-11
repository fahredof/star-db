import {withData} from "../../HOCHelper";
import ItemList from "../../ItemList";
import {withChildFunction, renderName} from "./withChildFunction";
import SwapiContextDetails from "../../HOCHelper/SwapiContextDetails";

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const StarshipList = SwapiContextDetails(
    withData(withChildFunction(ItemList, renderName)),
    mapMethodsToProps
);

export default StarshipList;