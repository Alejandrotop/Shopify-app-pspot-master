import gql from 'graphql-tag';

export default {
  GET_PRODUCTS : gql`
    {
      products(query: "product_type:pspot-product", first:10) {
        edges {
          cursor
          node {
            title
            description
            metafields(first: 10) {
              edges {
                node {
                  key
                  value
                }
              }
            }
            images(first:1) {
              edges {
                node {
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
  `
}
