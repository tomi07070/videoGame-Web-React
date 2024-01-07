import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const APIKEY = '95ed1382166a439ba58eb313fd5f066e';

export const GameDetails = () => {
    const { id } = useParams();
    const [gameDetails, setGameDetails] = useState({});
    const [achievements, setAchievements] = useState([]);
    const [screenshots, setScreenshots] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPlatformStr = (platforms) => {
        const platformStr = platforms.map((pl) => pl.platform.name).join(', ');
        if (platformStr.length > 30) {
            return platformStr.substring(0, 30) + '...';
        }
        return platformStr;
    };

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGameDetails(data);
                setLoading(false);
            } catch (error) {
                console.error('There was an error fetching the data:', error);
                setLoading(false);
            }
        };

        const fetchAchievements = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games/${id}/achievements?key=${APIKEY}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAchievements(data.results);
            } catch (error) {
                console.error('There was an error fetching the achievements:', error);
            }
        };

        const fetchScreenshots = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${APIKEY}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setScreenshots(data.results);
            } catch (error) {
                console.error('There was an error fetching the screenshots:', error);
            }
        };

        fetchGameDetails();
        fetchAchievements();
        fetchScreenshots();
    }, [id]);

    return (
        <>
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1 className='h1'>{gameDetails.name}</h1>
                    <div className='img-c'>
                        <img className='img' src={gameDetails.background_image} alt="" />
                    </div>
                    <div className='div-plat'>
                        <span className="platforms1">{getPlatformStr(gameDetails.parent_platforms)}</span>
                    </div>
                    <ul className='ul-g1'>
                        <div className='div-play'>
                            <h3 className='h3-p'>Playtime: {gameDetails.playtime}hs</h3>
                        </div>
                        <li className='li-rating'>
                            <i id='i-g' className="fa fa-star"></i> <span className="rating">{gameDetails.rating}</span>
                        </li>
                        <li>
                            <i id='i1-g' className="fa-regular fa-calendar"></i> <span className="date">{gameDetails.released}</span>
                        </li>
                    </ul>
                    <h3 className='h3'>Description: <p className='p'> {gameDetails.description_raw}</p></h3>
                    <h2 className='h2-achi'>Achievements:</h2>
                    {achievements.length > 0 ? (
                       <div>
                       <ul className='ul-achi'>
    {achievements.map((achievement, index) => (
        <li className='li-achi' key={index}>
            {achievement.name && (
                <p className='name' key={`achievement-name-${index}`}>
                    {achievement.name}
                </p>
            ) }
            {achievement.image && ( 
                <img
                    key={`achievement-image-${index}`}
                    className='img-achi'
                    src={achievement.image}
                    alt={`Achievement ${index}`}
                />
            )}
            
            {achievement.description && (
                <p className='descrip' key={`achievement-description-${index}`}>
                    {achievement.description}
                </p>
            )}

            
        </li>
    ))}
</ul>
                       
                   </div>
                   
                                            ) : (
                        <p className='p'>No achievements available for this game.</p>
                    )}
                </div>
            )}
            <div>
                {loading ? (
                    <div className='div-screen'>Loading...</div>
                ) : (
                    <div>
                        {/* ... other game details rendering ... */}
                        {screenshots.length > 0 ? (
                            <div className="screenshots-container">
                                {screenshots.map((screenshot, index) => (
                                    <img key={index} src={screenshot.image} alt={`Screenshot ${index}`} className="screenshot" />
                                ))}
                            </div>
                        ) : (
                            <p className='p-screen'>No screenshots available for this game.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
        </>
    );
};