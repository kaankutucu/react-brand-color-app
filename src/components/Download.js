import React from 'react';
import {useContext, useState} from "react";
import MainContext from "../MainContext";


function Download() {

const {selectedBrands} = useContext(MainContext)

    return (
        <div className="download">
            {selectedBrands.length} brands collected
        </div>
    );
}

export default Download;