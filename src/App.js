
import './App.css';
import Headingss from './Components/Headings.js';
import Emails from './Components/Emails.js';
import SubBtn from './Components/SubBtn.js';
import Images from './Components/Images.js';
import Listings from './Components/Listings.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headingss />
        <Emails />
        <SubBtn />
        <Images />
      </header>
      <footer className="App-footer">
      <Listings />
      </footer>
    </div>
  );
}

export default App;
