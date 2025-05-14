import './AboutBox.css'

import nelsonImg from '../../assets/nelson.jpg'
const nelson = {
  name: 'Nelson Mincheng Fang',
  img: nelsonImg,
}

export default function AboutBox() {
    
    return (
        <>
            <img
                className="avatar"
                src={nelson.img}
                alt={'Photo of ' + nelson.name}
            />
            <h3>Hi there, Welcome to my website!</h3>
            <p>Blah blah blah blah blah blah blah</p>
        </>
    );
}