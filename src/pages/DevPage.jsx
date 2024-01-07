import React, { useState, useEffect } from 'react';

const APIKEY = '95ed1382166a439ba58eb313fd5f066e';

export const DevPage = () => {
    const [devs, setDevs] = useState([]);
    const [nextDevListUrl, setNextDevListUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [seenDevs, setSeenDevs] = useState(new Set());

    

    const loadDevs = (url) => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setNextDevListUrl(data.next ? data.next : null);
                const uniqueDevs = data.results.filter((dev) => !seenDevs.has(dev.id));
                setDevs((prevDevs) => [...prevDevs, ...uniqueDevs]);
                uniqueDevs.forEach((dev) => {
                    seenDevs.add(dev.id);
                });
                setLoading(false);
            })
            .catch((error) => {
                console.log('An error occurred:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        const url = `https://api.rawg.io/api/creators?key=${APIKEY}`;
        loadDevs(url);
    }, []);

    const handleLoadMore = () => {
        if (nextDevListUrl) {
            loadDevs(nextDevListUrl);
        }
    };

    return (
        <>
        <div className="gameList">
            {devs.map((dev) => (
                    <div id='cont' className="col-lg-3 col-md-6 col-sm-12">
                        <div className="item-dev">
                            <img className='img-dev' src={dev.image} alt={`${dev.name} image`} />
                            <h4 className="dev-name">
                                {dev.name}
                            </h4>
                        </div>
                    </div>
            ))}
            </div>
            {loading ? (
            <div className='load-c'><div id="js-preloader">Loading...</div></div>
        ) : (
            nextDevListUrl &&  <div className='btn-c'><button className="main-button" onClick={handleLoadMore}>Load More</button></div>
            )}
        </>
        
    );
};

