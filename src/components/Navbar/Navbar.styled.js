import styled from 'styled-components';

export const NavbarStyle = styled.div`
  background-color: #073b4c;
  padding: 0rem 7rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.4rem;
    margin-top: 0.2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 18px;
    font-weight: 600;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  /* Search Bar Style */
  .search {
    width: 100%;
    max-width: 300px;
    margin: 1rem 0;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
  }

  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0.6rem;
    }

    .search {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    width: 100%;
    margin: 0 auto;

    nav {
      padding: 1rem 0;
    }

    h1 {
      font-size: 3.6rem;
    }
  }
`;

export default NavbarStyle;
