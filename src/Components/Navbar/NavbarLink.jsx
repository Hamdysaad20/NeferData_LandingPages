import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const NavbarLink = ({ links, main, hasDropDown }) => {
  const location = useLocation();

  return (
    <div className='relative flex items-center justify-center cursor-pointer max-lg:py-5 h-6 max-lg:w-full text-center' role="menu">
      {/* Display the main link */}
      <Link 
        to={main.link}
        aria-label={main.title}
        className={location.pathname === main.link ? ' text-sky-500 duration-700 ' : ''}
      >
        {main.title}
      </Link>
     
    </div>
  );
};

NavbarLink.propTypes = {
  links: PropTypes.array.isRequired,
  main: PropTypes.object.isRequired,
  hasDropDown: PropTypes.bool.isRequired
};

export default NavbarLink;