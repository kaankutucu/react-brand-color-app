import React, {useContext, useEffect} from 'react';
import {useParams,Link,useHistory} from 'react-router-dom';
import Search from "./Search";
import Download from "./Download";
import LazyLoad from "react-lazyload";
import Brand from "./Brand";
import MainContext from "../MainContext";
import Loader from "./Loader";

function Collection(props) {
    const {slugs} = useParams()
    console.log(slugs)
    const history = useHistory()
    const {setSelectedBrands, selectedBrands, brands} = useContext(MainContext)
    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])
    const clearSelectedBrands = () => {
        setSelectedBrands ([])
        history.push('/')
    }

    return (
        <main className="content">
            <header className="header">
                <Link to="/" onClick={clearSelectedBrands}>
                    <button className="back-btn">
                        All Brands
                    </button>
                </Link>
                {selectedBrands.length > 0 && <Download/>}
            </header>

            <section className="brands">
                {
                    selectedBrands.map(slug => {
                        let brand = brands.find (brand => brand.slug === slug )
                        return (
                            <LazyLoad key={brand.slug} overflow={true} once={true} placeholder={<Loader/>}>
                                <Brand brand={brand}/>
                            </LazyLoad>
                        )
                    })
                }
            </section>
        </main>
    );
}

export default Collection;