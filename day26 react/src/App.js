import logo from './logo.svg';
import './App.css';
import { Test1 } from './Test1';

//component declaration
function App() {
  const data = [
    {
      name: "Raja",
      pic: "https://pbs.twimg.com/media/EjY_lxhUcAAqCde?format=jpg&name=large"
    },
    {
      name: "Selva",
      pic: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Ajith_departmental_store_Londo_1200x768.jpeg?VersionId=8RezllE_ALcqY2w70ciBep0Y1cBpoV0l&size=690:388"
    },
    {
      name: "Dhiya",
      pic: "https://static.scientificamerican.com/sciam/cache/file/ACB55B71-2661-471A-A45241D0CC7CD181_source.jpg"
    },
    {
      name: "Aara",
      pic: "https://static.scientificamerican.com/sciam/cache/file/ACB55B71-2661-471A-A45241D0CC7CD181_source.jpg"
    }]
  return (
    <div className="App">
      <h1>Hello All</h1>
      <h2>This is Rajendran Ramasamy!!</h2>
      {/* <h3>this is session workings</h3> */}
      {/* <Test1
        name="Raja"
        pic="https://pbs.twimg.com/media/EjY_lxhUcAAqCde?format=jpg&name=large" />
      <Test1
        name="Selva"
        pic="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Ajith_departmental_store_Londo_1200x768.jpeg?VersionId=8RezllE_ALcqY2w70ciBep0Y1cBpoV0l&size=690:388" />
      <Test1
        name="Dhiya"
        pic="https://static.scientificamerican.com/sciam/cache/file/ACB55B71-2661-471A-A45241D0CC7CD181_source.jpg" /> */}
      {data.map((a) => (
        <Test1 name={a.name} pic={a.pic} />
      ))}

    </div>
  );
}

export default App; //default export
