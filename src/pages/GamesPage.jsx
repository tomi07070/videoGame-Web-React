import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const APIKEY = '95ed1382166a439ba58eb313fd5f066e';

export const GamesPage = () => {
    const [games, setGames] = useState([]);
    const [nextGameListUrl, setNextGameListUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [seenGames, setSeenGames] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState(''); 

    const getPlatformStr = (platforms) => {
        const platformStr = platforms.map((pl) => pl.platform.name).join(', ');
        if (platformStr.length > 30) {
            return platformStr.substring(0, 30) + '...';
        }
        return platformStr;
    };

    const loadGames = (url) => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setNextGameListUrl(data.next ? data.next : null);
                const uniqueGames = data.results.filter((game) => !seenGames.has(game.id));
                setGames((prevGames) => [...prevGames, ...uniqueGames]);
                uniqueGames.forEach((game) => {
                    seenGames.add(game.id);
                });
                setLoading(false);
            })
            .catch((error) => {
                console.log('An error occurred:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2022-01-01,2022-12-31&ordering=-added`;
        loadGames(url);
    }, []);

    const handleLoadMore = () => {
        if (nextGameListUrl) {
            loadGames(nextGameListUrl);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); 
    };

    const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    return (
        <> 
          <div className='input-c'>
            <input type="search" value={searchTerm} onChange={handleSearchChange} className='input' placeholder='Search'/>
            <i className="fa-solid fa-magnifying-glass" id='i-inp'></i>
          </div>
          <div className="gameList"> 
            {filteredGames.length === 0 ? (
              <p className='p-n'>No results</p>
            ) : (
              filteredGames.map((game) => (
                <NavLink key={game.id} className='ano' to={`/game-details/${game.id}`}>
                  <div id='cont' className="">
                    <div className="item">
                      <img className='img-g' src={game.background_image} alt={`${game.name} image`} />
                      <h4 className="game-name">
                        {game.name}
                        <br />
                        <span className="platforms">{getPlatformStr(game.parent_platforms)}</span>
                      </h4>
                      <ul className='ul-g'>
                        <li>
                          <i className="fa fa-star" id='i-g'></i> <span className="rating">{game.rating}</span>
                        </li>
                        <li>
                          <i className="fa-regular fa-calendar" id='i1-g'></i> <span className="date">{game.released}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavLink>
              ))
            )}
          </div>
          {loading ? (
            <div className='load-c'><div id="js-preloader">Loading...</div></div>
          ) : (
            nextGameListUrl && <div className='btn-c'><button className="main-button" onClick={handleLoadMore}>Load More</button></div>
          )}
        </>
      );
          };      