import './App.css';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import MainContext from "./MainContext";
import BrandsData from "./brands.json";
import {useState} from 'react';
import './App.css';


function App() {


    const brandsArray = []
    Object.keys(BrandsData).map(key => {
        brandsArray.push(BrandsData[key])
    })

    const [brands, setBrands] = useState(brandsArray)
    const [selectedBrands, setSelectedBrands] = useState([])

    const data = {
        brands,
        setSelectedBrands,
        selectedBrands
    }
    return (
        <>
            <MainContext.Provider value={data}>
                <Sidebar/>
                <Content/>
            </MainContext.Provider>
        </>
    );
}

export default App;
