import './App.css';
import { ContextConsumer } from './Components/Context/ContextConsumer';
import { UserContextProvider } from './Components/Context/ContextProvider';
import HomePage from './Components/HomePage';
import TopSection from './Components/TopSection';

function App() {
  return (
    <div className="App">
      <HomePage />
      <TopSection />
      <UserContextProvider>
        <ContextConsumer />
      </UserContextProvider>
    </div>
  );
}

export default App;
