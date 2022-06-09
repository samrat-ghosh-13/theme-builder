import { useEffect, useState } from "react";
import { saveState, loadState } from "../utils/localstorage";
import _ from "lodash";

export const useTheme = () => {
  const themes = loadState("all-themes");
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    saveState(mode, "theme");
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, "font"));
    return allFonts;
  };

  useEffect(() => {
    const localTheme = loadState("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};
