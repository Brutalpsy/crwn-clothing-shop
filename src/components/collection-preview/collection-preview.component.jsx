import React from 'react';
import CollectionItem from '../colleciton-item/collection-item.component';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title && title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default withRouter(CollectionPreview);
