import './HomePage.css'

import AboutBox from './AboutBox.jsx'
import FavProjectsBox from './FavProjectsBox.jsx';
import LinksBox from './LinksBox.jsx'
import SkillsBox from './SkillsBox.jsx';

import Box from '../../components/ui/Box.jsx';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="top-row">
        <Box className="medium-box">
          <AboutBox />
        </Box>
        <Box className="small-box">
          <LinksBox />
        </Box>
      </div>
      <SkillsBox />
      <FavProjectsBox />
    </div>
  );
}