
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title="Danish" Tutorial="My Tutorial"/>
    {/* <Navbar /> */}
    <div className="container my-5">
      <TextForm heading="Enter the text to Analyze Below"/>
    </div>
    </>
  )
}

export default App;