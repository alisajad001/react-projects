import Buttons from './Buttons';

function Header({ children }) {
  return (
    <header className="header">
      <h1>Select Tabs Project</h1>

      {children}
    </header>
  );
}

export default Header;
