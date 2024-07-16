import { FC } from "react";
import OutlineCircle from "../svg/components/OutlineCircle";
import { ThemeType } from "../helpers/useTheme";

type ThemeIcon = 'moon' | 'sun' | 'cog';

type ThemeActionMapping = {
  [theme in ThemeType]: ThemeType;
}

type ThemeIconMapping = {
  [theme in ThemeType]: ThemeIcon;
}
const themeIconMapping: ThemeIconMapping = {
  dark: 'moon',
  light: 'sun',
  auto: 'cog'
};

const themeActionMapping: ThemeActionMapping = {
  dark: 'light',
  light: 'auto',
  auto: 'dark'
};

type AppearanceToggleProps = {
  theme: ThemeType;
  applyTheme: (theme: ThemeType) => void;
};

const AppearanceToggle: FC<AppearanceToggleProps> = ({ theme, applyTheme}) => {
  const handleClick = () => {
    applyTheme(themeActionMapping[theme]);
  };

  return (
    <div className="cursor-pointer absolute top-28 right-4 h-12 w-12" onClick={handleClick}>
      <OutlineCircle className="outline-circle absolute h-12 w-12" svgName={themeIconMapping[theme]} />
    </div>
  );
};

export default AppearanceToggle;
