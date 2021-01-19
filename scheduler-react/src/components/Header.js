import Button from './Button.js';

const Header = (props) => {

  return (
    <header className="mainHeader">
      <h1 className="mainTitle">{props.title}</h1>
      <Button text={props.showForm ? 'Close' : 'Add'} onClick={props.onAdd}/>
    </header>
  )
}

export default Header;
