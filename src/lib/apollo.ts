import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pxxgof2jsf01xsfy5x9zzi/master',
  cache: new InMemoryCache(),
});
