import React from 'react';
import ContentLoader from "react-content-loader"

function Loader(props) {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="-64" y="1" rx="3" ry="3" width="166" height="11" />
            <rect x="-1" y="15" rx="0" ry="0" width="1" height="1" />
            <rect x="13" y="29" rx="0" ry="0" width="70" height="40" />
            <rect x="97" y="30" rx="0" ry="0" width="70" height="40" />
            <rect x="184" y="29" rx="0" ry="0" width="70" height="40" />
        </ContentLoader>
    );
}

export default Loader;