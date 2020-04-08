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
                        <p>Username:</p>
                        <a href={props.userData.html_url}>{props.userData.login}</a>
                        <p>Following:</p>

                        <p>Followers:</p>

                        <p>Bio:</p>


                    </div>
                </div>
            </div>
        </div>
    )    
}

export default UserCard