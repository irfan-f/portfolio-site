import { FC, HTMLAttributes } from "react";
import OutlineCircle from "../..//svg/components/OutlineCircle";
import { ThemeType } from "../../helpers/useTheme";
import clsx from 'clsx';

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

type AppearanceToggleProps  = {
  theme: ThemeType;
  applyTheme: (theme: ThemeType) => void;
};

const AppearanceToggle: FC<AppearanceToggleProps & HTMLAttributes<HTMLElement>> = ({ theme, applyTheme, className}) => {
  const handleClick = () => {
    applyTheme(themeActionMapping[theme]);
  };

  return (
    <div className={clsx("appearance-toggle cursor-pointer h-12 w-12", className)} onClick={handleClick}>
      <OutlineCircle className="outline-circle h-12 w-12" svgName={themeIconMapping[theme]} height={48} width={48} />
    </div>
  );
};

export default AppearanceToggle;
