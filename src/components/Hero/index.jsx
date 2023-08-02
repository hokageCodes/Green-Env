import './hero.css'

export default function Hero() {
    return (
        <section className='hero-container'>
            <div className="hero-content">
                <h1>Save the environment today for a better tomorrow</h1>
                <div className="hero-cta">
                    <a href="">What we do</a>
                    <div className="play-video">
                    <i className="fa-solid fa-user"></i>
                        <p>Play Video</p>
                    </div>
                </div>
            </div>
            <div className="hero-bottom">
                <p>23,800 trees planted</p>
                <hr />
                <p>5840 donations collected</p>
            </div>
        </section>
    )
}
