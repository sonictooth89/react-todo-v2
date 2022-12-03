import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {

  const headerText = 'My To Do List';
  const footerText = 'This is footer';

  return (
    <div className="App">
      <Header text = {headerText}/>
      <Main />
      <Footer text = {footerText} />
    </div>
  );
}

export default App;
