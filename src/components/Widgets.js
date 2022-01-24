import React from 'react'
import styled from 'styled-components';
import { Tweet, Timeline, Share } from 'react-twitter-widgets'


const Widg = styled.div`
.widgets {
    flex: 0.3;
}

.widgets_input {
    display: flex;
    align-items: center;
    background-color: rgb(245, 245, 245);
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 20px;
}

.widgets_input input {
    border: none;
    background-color: rgb(245, 245, 245);
}

.widgets_widgetContainer {
    margin-top: 15px;
    margin-left: 10px;
    padding: 20px;
    background-color: rgb(245, 245, 245);
    border-radius: 20px;
}

.widgets_widgetContainer h2 {
    font-size: 18px;
    font-weight: 800;
}
`

const Widgets = () => {
    return (
        <Widg>
            <div className="widgets">
                <div className="widgets_input">
                    <i class="bi bi-search"></i>
                    <input placeholder="Search Twitter" type="text" />
                </div>

                <div className="widgets_widgetContainer">
                    <h2>Trends for you</h2>

                    {/*PACKAGE TWITTER WIDGETS*/}
                    < Tweet  tweetId = "1483143154744315908"/>
                    < Timeline 
                        dataSource = { { 
                        sourceType : 'profile' , 
                        screenName : 'realmadrid' 
                        } } 
                        options = { { 
                        height : '400' 
                        } }
                    />

                    <Share url="https://www.lequipe.fr/Football/ligue-des-champions/page-calendrier-resultats"
                        options={{ text: "Comme Hanaa & Kévin suivez la ligue des champions"}} 
                    />
                </div>
            </div>
        </Widg>
    )
}

export default Widgets
