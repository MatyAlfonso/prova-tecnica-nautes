import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Incomplete } from "./pages/Incomplete";
import { Complete } from "./pages/Complete";
import { NotFound } from "./pages/NotFound";

// This is to get rid of a warning in the console
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

// Cache here is the above implementation
const client = new ApolloClient({
  uri: "https://prova-tecnica-nautes-production.up.railway.app/graphql",
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Incomplete />} />
          <Route path="/completate" element={<Complete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
