import React from 'react';
import CollectionItem from '../colleciton-item/collection-item.component';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title && title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default CollectionPreview;
