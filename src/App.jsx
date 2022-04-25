import React, {useState} from "react"
import Main from "./components/Main"
import { CalculadoraProvider } from "./context"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme, purpleTheme} from "./style/theme/theme"
import { GlobalStyle } from "./style/GlobalStyle"

const themes = {
   light: lightTheme,
   dark: darkTheme,
   purple: purpleTheme,
}

const App = ()=>{
   const [theme, setTheme] = useState("dark")

   return (
         <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <CalculadoraProvider>
                  <Main theme={theme} setTheme={setTheme}/>
            </CalculadoraProvider>
         </ThemeProvider>
   )
}
export default App 