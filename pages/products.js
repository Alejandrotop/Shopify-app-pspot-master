import ProductList from '../components/ProductList';
import ProductAdd from '../components/ProductAdd';
import ProductEdit from '../components/ProductEdit';

const PRODUCT_LIST_PAGE = 'PRODUCT_LIST_PAGE';
const PRODUCT_ADD_PAGE  = 'PRODUCT_ADD_PAGE';
const PRODUCT_EDIT_PAGE = 'PRODUCT_EDIT_PAGE';

class Products extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: PRODUCT_LIST_PAGE,
      product: null,
    };

    this.toList = this.toList.bind(this);
    this.toAdd = this.toAdd.bind(this);
    this.toEdit = this.toEdit.bind(this);
  }

  toList() {
    this.setState({
      page: PRODUCT_LIST_PAGE,
      product: null
    })
  }

  toAdd() {
    this.setState({
      page: PRODUCT_ADD_PAGE,
    })
  }

  toEdit(product) {
    this.setState({
      page: PRODUCT_EDIT_PAGE,
      product: product
    })
  }

  render() {
    var scope = this;
    return (
      <React.Fragment>
        <div className={this.state.page != PRODUCT_LIST_PAGE && "hidden"}>
          <ProductList toAdd={this.toAdd} toEdit={this.toEdit} />
        </div>
        <div className={this.state.page != PRODUCT_ADD_PAGE && "hidden"}>
          <ProductAdd toList={this.toList} />
        </div>
        <div className={this.state.page != PRODUCT_EDIT_PAGE && "hidden"}>
          <ProductEdit toList={this.toList} />
        </div>
        <style jsx>
          {`
            .hidden {
              display: none;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Products;
