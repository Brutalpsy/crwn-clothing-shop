import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
  const menuItemsNode = sections.map(({ id, ...otherProps }) => (
    <MenuItem key={id} {...otherProps} />
  ));

  return <DirectoryMenuContainer>{menuItemsNode}</DirectoryMenuContainer>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
