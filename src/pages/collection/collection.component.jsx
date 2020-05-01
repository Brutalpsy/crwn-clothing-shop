import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/colleciton-item/collection-item.component';
import { connect } from 'react-redux';
import { collectionSelector } from '../../redux/shop/shop.selector';

const CollectionPage = ({ colleciton }) => {
  const { title, items } = colleciton;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  colleciton: collectionSelector(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
