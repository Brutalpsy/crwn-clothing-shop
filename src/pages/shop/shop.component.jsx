import React from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
