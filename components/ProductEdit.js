import gql from 'graphql-tag';
import { Page, Card, Button, TextField } from '@shopify/polaris';
import { Query } from 'react-apollo';
import Gql from '../graphql/ProductGql'
import ProductEditStyle from '../styles/ProductEditStyle.js'

class ProductEdit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };

  render() {
    return (
      <Page>
        <div className="actions">
          <Button outline onClick={() => this.props.toList()}>Back to product list</Button>
          <Button primary>Save</Button>
        </div>
        <Card>
          <TextField
            value={this.state.email}
            onChange={this.handleChange('email')}
            label="Email"
            type="email"
            helpText={
              <span>
                We’ll use this email address to inform you on future changes to
                Polaris.
              </span>
            }
          />
        </Card>
        <style jsx>
          {ProductEditStyle}
        </style>
      </Page>
    );
  }
}

export default ProductEdit;
