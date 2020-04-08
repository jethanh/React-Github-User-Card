import React from 'react';

function UserCard(props){
    return(
        <div className="container">
            <div className="card">
                <div className="pic">
                    <img src={props.userData.avatar_url} className="userpic" alt="user"/>
                </div>
                <div className="info-container">
                    <h2>{props.userData.name}</h2>
                    <div className="info">
                        <p>Username: <a href={props.userData.html_url}>{props.userData.login}</a> </p> 
                        
                        <p>Following: {props.userData.following}</p>

                        <p>Followers: {props.userData.followers}</p>

                        <p>Bio: {props.userData.bio}</p>
                        <hr/>

                        <div>
                            <h3>Followers:</h3>
                        <div className='followers'>
                            {props.followers.map(follower => {
                            return (
                            <div className="followersList">
                                <p>Username: <a href={follower.html_url}>{follower.login}</a> </p> 
                            </div>
                            )
                            })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default UserCard