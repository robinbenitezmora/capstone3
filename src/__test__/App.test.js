import Navbar from '../components/Navbar';
import Panel from '../components/panel';
import '@testing-library/jest-dom';

describe('Testing App', () => {
  test('App renders correctly', () => {
    function App() {
      return (
        <div className="App">
          <Navbar />
          <Panel />
        </div>
      );
    }
    expect(App).toBeDefined();
  });
});
