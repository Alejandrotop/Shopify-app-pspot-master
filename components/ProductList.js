import gql from 'graphql-tag';
import { Page, Card, Spinner, Button } from '@shopify/polaris';
import { Query } from 'react-apollo';
import Gql from '../graphql/ProductGql'
import ProductListStyle from '../styles/ProductListStyle.js'

const LOAD_PRODUCT_LIST = 'LOAD_PRODUCT_LIST';
const LOAD_COMPLETE     = 'LOAD_COMPLETE';

class ProductList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: LOAD_PRODUCT_LIST,
      products: []
    };
  }

  render() {
    var scope = this;
    return (
      <Page>
        <Button onClick={() => this.props.toAdd()}>Add PSPOT product</Button>
        <div className="product-list">
          {this.state.status == LOAD_PRODUCT_LIST &&
            <Query query={Gql.GET_PRODUCTS}>
              {({ data, loading, error }) => {
                if (loading) return <Spinner size="small" color="teal" />;
                if (error) return <div>{error.message}</div>;
                setTimeout(function() {
                  scope.setState({
                    status: LOAD_COMPLETE,
                    products: data.products.edges
                  });
                }, 500);
                return <div>Refreshing ...</div>;
              }}
            </Query>
          }
          {this.state.status == LOAD_COMPLETE &&
            <div>Loaded!</div>
          }
        </div>
        <style jsx>
          {ProductListStyle}
        </style>
      </Page>
    );
  }
}

 export default ProductList;
