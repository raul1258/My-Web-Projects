
import './App.css';
import Heading from './components/Heading';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Heading title="Text Utils" />
      <div className='container'>
      <TextForm headings="Enter the text to Analyze" />
      </div>
      
    </>
  );
}

export default App;
