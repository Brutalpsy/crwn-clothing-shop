import React from 'react';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles.jsx';
import CollectionItem from '../../components/colleciton-item/collection-item.component';
import { connect } from 'react-redux';
import { collectionSelector } from '../../redux/shop/shop.selector';

const CollectionPage = ({ colleciton }) => {
  const { title, items } = colleciton;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
const mapStateToProps = (state, ownProps) => ({
  colleciton: collectionSelector(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
