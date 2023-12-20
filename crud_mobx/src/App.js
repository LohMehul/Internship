import PetOwnerStore from "./PetOwnerStore";
import PetList from "./components/PetList.jsx";
import OwnerList from "./components/OwnerList";


function App() {
  const store = new PetOwnerStore();
  return (
    <div className="App">
      <h3>Pets List</h3>
      <PetList store={store} />
      <hr />
      <h3>Owners List</h3>
      <OwnerList store={store} />
    </div>
  );
}

export default App;