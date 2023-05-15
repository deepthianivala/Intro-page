
import './App.css';
import Headingss from './Components/Headings.js';
import Emails from './Components/Emails.js';
import Images from './Components/Images.js';
import Listings from './Components/Listings.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headingss />
        <Emails />
        <Images />
      </header>
      <footer className="App-footer">
      <Listings />
      </footer>
    </div>
  );
}

export default App;
