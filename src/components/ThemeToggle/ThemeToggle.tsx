import { useGlobalContext } from '../../context/GlobalContext';
import { SwitchButton } from './ThemeToggle.styles';

const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useGlobalContext();

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <SwitchButton>
      <input type='checkbox' onChange={() => toggleTheme()} />
      <span></span>
    </SwitchButton>
  );
};

export default ThemeToggle;
