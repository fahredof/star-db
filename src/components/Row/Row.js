import React from "react";

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

export default Row;