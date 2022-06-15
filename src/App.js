
import './App.css';
import { useState } from 'react';
// import ShowData from './components/showdata';
import Pagination from './components/pagination';

function App() {

  const [data, setData] = useState([
    "item-1","item-2","item-3","item-4","item-5","item-6","item-7","item-8","item-9","item-10",
    "item-11","item-12","item-13","item-14","item-15","item-16","item-17","item-18","item-19","item-20"
  ]); 
  return (
    <div className="App">
      {data.length > 0 ? (
        <>
        <Pagination
        data={data}
        title={"items"}
        pageLimit={4}
        dataLimit={5}
        />
        </>
      ) : ( <h1>No Data to display</h1>)

      } 
    </div>
  );
}

export default App;
