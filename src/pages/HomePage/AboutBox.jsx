import './AboutBox.css'

import nelsonImg from '../../assets/nelson.jpg'
const nelson = {
  name: 'Nelson Mincheng Fang',
  img: nelsonImg,
}

export default function AboutBox() {
    return (
        <div className="about-box-content">
            <img
                className="avatar"
                src={nelson.img}
                alt={'Photo of ' + nelson.name}
            />
            <div>
                <h2>Hello, welcome to my website!</h2>
                <p>SFU CS Undergraduate: 2020 - Present <br></br> Developer <br></br> Burnaby, BC.</p>
            </div>
        </div>
    );
}