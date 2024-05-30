import { ThemeProvider } from "./contexts/ThemeContext";
import Router from "./routes";

export default function App() {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    )
}
