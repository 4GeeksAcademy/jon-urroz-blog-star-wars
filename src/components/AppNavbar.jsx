import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
import { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import { BsTrash } from 'react-icons/bs'; 

function AppNavbar() {
  const { store, dispatch } = useContext(StarWarsContext);

  const handleRemoveFavorite = (id, type) => {
    dispatch({ type: 'remove_favorite', payload: { id, type } });
  };

  return (
    <Navbar className='navbar-logo'variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            alt="Star Wars Logo"
            className='navbar-logo'
          />
        </Navbar.Brand>

        <Dropdown align="end">
          <Dropdown.Toggle variant="warning" id="favorites-dropdown">
            Favoritos ({store.favorites.length})
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {store.favorites.length === 0 ? (
              <Dropdown.Item disabled>No hay favoritos</Dropdown.Item>
            ) : (
              store.favorites.map((fav, index) => (
                <Dropdown.Item
                  key={index}
                  as="div"
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>{fav.name}</span>
                  <BsTrash
                    role="button"
                    className="text-danger ms-2"
                    onClick={() => handleRemoveFavorite(fav.uid, fav.type)}
                  />
                </Dropdown.Item>
              ))
            )}
          </Dropdown.Menu>
        </Dropdown>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
