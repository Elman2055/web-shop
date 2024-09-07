import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./components/layout/Layout";
import MainPageContainer from "./containers/mainPageContainer/MainPageContainer";
import ProductPageContainer from "./containers/productPageContainer/ProductPageContainer";
import ContactsContainer from "./containers/contactsContainer/ContactsContainer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPageContainer />} />
            <Route path="product/:id" element={<ProductPageContainer />} />
            <Route path="contacts" element={<ContactsContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
