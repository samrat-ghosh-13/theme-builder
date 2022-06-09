import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "./theme/globalStyles";
import { useTheme } from "./hooks/useTheme";
import ThemeSelector from "./components/ThemeSelector";
import Dialog from "./components/Dialog";
import CreateThemeContent from "./components/CreateThemeContent";

// styles
const Container = styled.section`
  margin: 5px auto;
`;

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  const manageDialog = () => {
    setShowDialog(!showDialog);
  };

  const createTheme = (newTheme: any) => {
    setShowDialog(false);
    setNewTheme(newTheme);
  };

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <h1>Theme Builder</h1>
            <p>
              This is a theming system with a Theme Switcher and Theme Builder.
              Do you want to see the source code?{" "}
              <a
                href="https://github.com/atapas/theme-builder"
                target="_blank"
                rel="noreferrer"
              >
                Click here.
              </a>
            </p>
            <button className="btn" onClick={manageDialog}>
              Create a Theme
            </button>
            <Dialog
              header="Create a Theme"
              body={<CreateThemeContent create={createTheme} />}
              open={showDialog}
              callback={manageDialog}
            />
            <ThemeSelector setter={setSelectedTheme} newTheme={newTheme} />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
