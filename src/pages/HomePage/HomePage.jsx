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
        <Box className="medium-box me">
          <AboutBox />
        </Box>
        <Box className="small-box links">
          <LinksBox />
        </Box>
      </div>
      <Box className="large-box">
        <SkillsBox />
      </Box>
      <Box className="large-box">
        <FavProjectsBox />
      </Box>
    </div>
  );
}