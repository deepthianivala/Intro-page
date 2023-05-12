import './Listings.css';
import LinkedinLogo from './Assets/LinkedinLogo.png';
import InstagramLogo from './Assets/InstagramLogo.png';

function Listings() {
  return (
    <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
        <ul>
            <li>Promt Generator</li>
            <li>Dweep Daily</li>
            <li>All Contribution</li>
            <li>Your data on Dweep.io</li>
            <li>Contribute to dweep</li>
        </ul>
        </div>
        {/* Column2 */}
        <div className="col2">
        <ul>
            <li className='unstyling'>Dweep.io</li>
            <li>Made with love in India</li>
            <img className='unstyling' alt='linkedin'src={LinkedinLogo}/>
            <img alt='insta'src={InstagramLogo}/>
            <li className='styling'>hello @dweep.io</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
);
}
export default Listings;