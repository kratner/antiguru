import logo from '../assets/antiguru.svg';

const Header = () => {
  return (
    <header className="header">
        <img src={logo} className="logo" alt="AntiGuru" title="AntiGuru" />
        <div className='tagline'>We're taking you out of the rabbit hole.</div>
    </header>
  );
};

export default Header;
