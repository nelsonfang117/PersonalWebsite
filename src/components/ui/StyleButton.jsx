import './StyleButton.css';

export default function StyleButton({ isDark, toggleTheme }) {
return (
    <label className="switch top-right-button">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <span className="slider" />
    </label>
  );
}
