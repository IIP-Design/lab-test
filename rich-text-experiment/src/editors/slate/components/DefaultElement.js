import React from 'react';
import propTypes from 'prop-types';

const DefaultElement = ( { attributes, children } ) => ( <p { ...attributes }>{ children }</p> );

DefaultElement.propTypes = {
  attributes: propTypes.object,
  children: propTypes.node,
};

export default DefaultElement;
