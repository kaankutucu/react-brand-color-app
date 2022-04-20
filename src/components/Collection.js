import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Search from "./Search";
import Download from "./Download";
import LazyLoad from "react-lazyload";
import Brand from "./Brand";
import MainContext from "../MainContext";

function Collection(props) {
    const {slugs} = useParams()
    console.log(slugs)

    const {setSelectedBrands, selectedBrands, brands} = useContext(MainContext)
    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])
    return (
        <main className="content">
            <header className="header">

                {selectedBrands.length > 0 && <Download/>}
            </header>

            <section className="brands">
                {
                    selectedBrands.map(slug => {
                        let brand = brands.find (brand => brand.slug === slug )
                        return (
                            <LazyLoad key={brand.slug} overflow={true} once={true} placeholder="Yükleniyor...">
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