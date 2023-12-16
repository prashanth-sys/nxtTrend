// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-image"
      />
      <ul className="nav-menu">
        <li className="list-item">Home</li>
        <li className="list-item">Products</li>
        <li>Cart</li>
      </ul>
      <button className="button" type="button">
        Login
      </button>
    </div>
  </nav>
)
export default Header
