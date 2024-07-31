import { Provider } from 'react-redux';
import AppRoutes from './Routes/AppRoutes';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
