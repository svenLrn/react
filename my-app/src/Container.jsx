
import PropTypes from 'prop-types';
export function Container({ title, children }) {
    return (
        <div className="custom-container">
            {<h1>{title}</h1>}
            {children}
        </div>
    )
}

