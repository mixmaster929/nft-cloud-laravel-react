import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/word/wordsLimit`).then(res => {
    //         setIsLoading(true);
    //         if (res) {
    //             setWords(res.data);
    //             setIsLoading(false);
    //         }
    //     })
    // }, [words]);
    return (
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
			<section aria-label="section">
                <div className="container">
                    <div className="row wow fadeIn">
                        <div className="col-md-6 offset-md-3">
                            <h3>Create Collectible</h3>
                            <p>Switch between options of single and multiple to choose the count of yor NFTs that has to be created and start creating your fortune</p>
                            <p>Choose "Single" if you want your collectible to be one of a kind or "Multiple" if you want to sell one collectible times</p>
                            <Link to="/create/single" className="opt-create">
                                <img src="images/misc/dark-coll-single.png" alt="" />
                                <h3>Single</h3>
                            </Link>
                            <Link to="/create/multiple" className="opt-create">
                                <img src="images/misc/dark-coll-multiple.png" alt="" />
                                <h3>Multiple</h3>
                            </Link>
                        </div>                             
                    </div>
                </div>
            </section>
            <a href="#" id="back-to-top"></a>
        </div>
    );
};

export default Create;