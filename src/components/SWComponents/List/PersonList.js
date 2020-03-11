import {withData} from "../../HOCHelper";
import ItemList from "../../ItemList";
import {withChildFunction, renderName} from "./withChildFunction";
import SwapiContextDetails from "../../HOCHelper/SwapiContextDetails";

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const PersonList = SwapiContextDetails(
    withData(withChildFunction(ItemList, renderName)),
    mapMethodsToProps
);

export default PersonList;