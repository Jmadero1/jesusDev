import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({navOpen}) => {
  const lastActiveLink = useRef();
  const activeBox = useRef ();

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link',
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link',
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden',
    },
  ];

  
  return (
    <nav className={'navbar'+ (navOpen ? 'active':'')}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={(event) => handleClick(event, key)}
        >
          {label}
        </a>
      ))}

      <div className="active-box"
      ref={activeBox}></div>
    </nav>
  );
};

Navbar.PropTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar;