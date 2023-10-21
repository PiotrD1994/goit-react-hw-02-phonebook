import React from "react";
import PropTypes from 'prop-types'

function Filter ({value, onChange}) {
    return (
            <label>
 <input type="text" value={value} onChange={onChange} />
            </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default Filter