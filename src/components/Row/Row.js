import React from "react";
import PropTypes from "prop-types";

const Row = ({LeftRow, RightRow}) => {
    return (
        <div className="row mb-2">
            <div className="col-xl-6">
                {LeftRow}
            </div>

            <div className="col-xl-6">
                {RightRow}
            </div>
        </div>
    );
};

Row.propTypes = {
    LeftRow: PropTypes.node,
    RightRow: PropTypes.node
};


export default Row;