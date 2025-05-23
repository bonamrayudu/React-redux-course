import React from 'react'
import 'bulma/css/bulma.css';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import Profile from './Components/Profile';
export default function ProfilesCard() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <Profile
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-3">
                            <Profile
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Cortana was made by Microsoft. Who knows what it does?"
                            />
                        </div>
                        <div className="column is-3">
                            <Profile
                                title="Siri"
                                handle="@siri01"
                                image={SiriImage}
                                description="Siri was made by Apple and is being phased out"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
