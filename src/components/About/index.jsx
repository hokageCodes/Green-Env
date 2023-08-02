import './about.css'
import AboutImg from '../../assets/images/BG.png'

export default function AboutUs() {
    return (
        <section className='about-container'>
            <div className="about-left">
                <div className="about-heading">
                    <hr />
                    <h4>Know About Us</h4>
                </div>
                <h2>We help nature smile and survive everywhere</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <a href="">Learn More</a>
            </div>
            <div className="about-right">
                <img src={AboutImg} alt='' />
            </div>
        </section>
    )
}
