import React from 'react';
import propTypes from 'prop-types';

const BoldElement = ( { attributes, children } ) => ( <strong { ...attributes }>{ children }</strong> );

BoldElement.propTypes = {
  attributes: propTypes.object,
  children: propTypes.node,
};

export default BoldElement;
