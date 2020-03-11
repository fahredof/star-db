import {withDataList} from "../../HOCHelper";
import ItemList from "../../ItemList";
import {withChildFunction, renderName} from "./withChildFunction";
import SwapiContextDetails from "../../HOCHelper/SwapiService";
import compose from "../../HOCHelper/compose";

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const StarshipList = compose(
    SwapiContextDetails(mapMethodsToProps),
    withDataList,
    withChildFunction(renderName)
)(ItemList);

export default StarshipList;