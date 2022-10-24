import Header from './components/header/header.component';
import Favorites from './components/favorites/favorites.component';
import CardContainer from './components/card-container/card-container.component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Favorites />
      <CardContainer />
    </div>
  );
}

export default App;
