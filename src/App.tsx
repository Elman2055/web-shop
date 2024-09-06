import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPageContainer from "./containers/mainPageContainer/MainPageContainer";
import ProductPageContainer from "./containers/productPageContainer/ProductPageContainer";
import ContactsContainer from "./containers/contactsContainer/ContactsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPageContainer />} />
          <Route path="product" element={<ProductPageContainer />} />
          <Route path="contacts" element={<ContactsContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
