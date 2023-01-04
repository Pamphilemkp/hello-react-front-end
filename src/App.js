import './App.css';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Message from './components/message';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Link to="roots/messages"> Go page details </Link>
          <Routes>
            <Route path="roots/messages" element={<Message />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
