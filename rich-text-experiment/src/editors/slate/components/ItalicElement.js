import React from 'react';
import propTypes from 'prop-types';

const ItalicElement = ( { attributes, children } ) => ( <em { ...attributes }>{ children }</em> );

ItalicElement.propTypes = {
  attributes: propTypes.object,
  children: propTypes.node,
};

export default ItalicElement;
