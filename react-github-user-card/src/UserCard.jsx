import React from 'react';

function UserCard(props){
    return(
        <div className="container">
            <div className="card">
                <div className="pic">
                    <img src={props.userData.avatar_url} alt="user"/>
                </div>
                <div className="info-container">
                    <h3>{props.userData.name}</h3>
                    <div className="info">
                        <p>Username: <a href={props.userData.html_url}>{props.userData.login}</a> </p> 
                        
                        <p>Following: {props.userData.following}</p>

                        <p>Followers: {props.userData.followers}</p>

                        <p>Bio: {props.userData.bio}</p>

                        <div className='card2'>
                            <h3>Followers:</h3>
                            {props.followers.map(follower => {
                            return (
                            <p>{follower.login}</p>
                    )
                })}
            </div>


                    </div>
                </div>
            </div>
        </div>
    )    
}

export default UserCard