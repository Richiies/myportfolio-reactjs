import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderNavItemsList = () => {
    const {navBarItems, activeNavBarItem, changeActiveNavBarItem} = this.props

    return navBarItems.map(navItem => {
      const onClickNavBarItem = () => changeActiveNavBarItem(navItem.name)
      const buttonClassName =
        activeNavBarItem === navItem.name ? 'active-item' : ''
      return (
        <li
          className={`nav-item ${buttonClassName}`}
          key={navItem.id}
          onClick={onClickNavBarItem}
        >
          <img
            className="item-image"
            src={navItem.iconUrl}
            alt={navItem.name}
          />
          <p className="item-name">{navItem.name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="navbar">
        <img
          className="profile-image"
          src="https://scontent.fvga1-2.fna.fbcdn.net/v/t31.18172-8/16797175_705116783001738_6794540714349704159_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YhGk8eImmCIAX-NMIfw&_nc_ht=scontent.fvga1-2.fna&oh=5fb71cfbe5d6e40cf2760c5d608de6c1&oe=611DC6A6"
          alt="profile"
        />
        <ul className="nav-items-list">{this.renderNavItemsList()}</ul>
      </nav>
    )
  }
}

export default NavBar
