import { useNavigate } from 'react-router-dom';
import './NavDropdown.css'

export default function NavDropdown() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(e.target.value);
  };

  return (
    <select onChange={handleChange} defaultValue="">
      <option value="" disabled>Navigate to...</option>
      <option value="/">Home</option>
      <option value="/projects">Projects</option>
      {/* <option value="/contact">Contact</option> */}
    </select>
  );
}
