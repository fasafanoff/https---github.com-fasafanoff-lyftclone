import React from 'react';
import './H3.css';
const H3 = ({children,className,...props}) => {
    return (
        <h3 className={`H3 ${className}`} {...props}>{children}</h3>
    );
}

export default H3;
