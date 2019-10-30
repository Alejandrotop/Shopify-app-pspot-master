import gql from 'graphql-tag';
import { Page, Card, Button, TextField, Form, FormLayout } from '@shopify/polaris';
import { Query } from 'react-apollo';
import Gql from '../graphql/ProductGql'
import ProductAddStyle from '../styles/ProductAddStyle.js'

class ProductAdd extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };

  handleSubmit = (event) => {
    // this.setState({newsletter: false, email: ''});
  };

  render() {
    return (
      <Page>
        <div className="actions">
          <Button outline onClick={() => this.props.toList()}>Back to product list</Button>
          {this.props.product == null
            ?<Button primary>Create</Button>
            :<Button primary>Save</Button>
          }
        </div>
        <div className="product-form">
          <Form onSubmit={this.handleSubmit}>
            <Card>
              <div className="p-20">
                <TextField
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  label="Product Title"
                  type="title"
                />
              </div>
            </Card>
          </Form>
        </div>
        <style jsx>
          {ProductAddStyle}
        </style>
      </Page>
    );
  }
}

export default ProductAdd;
