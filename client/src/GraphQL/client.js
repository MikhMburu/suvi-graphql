import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    // graphqlErrors.map(({ message, location, path }) => {
    //   return alert(`GraphQL Error \n ${message}`);
    // });
    console.log("An error occured");
  }
});
const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:5000/graphql",
  }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),

  link,
});

export default client;
