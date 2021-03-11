import Empty from "./components/Empty";
import Header from "./components/Header";
import Invoice from "./components/Invoice";
import NewInvoice from "./components/NewInvoice";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Invoice /> */}
      <NewInvoice />
    </div>
  );
}

export default App;
