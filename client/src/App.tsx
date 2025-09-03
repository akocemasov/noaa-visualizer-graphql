import { useState, useMemo, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    ThemeProvider,
    CssBaseline,
    CircularProgress,
    Box,
} from '@mui/material'
import { getTheme } from './theme'
import { ApolloProvider } from '@apollo/client/react'
import client from './graphql/client'

import NavBar from './components/NavBar'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

export default function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light')

    const toggleColorMode = () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))

    const theme = useMemo(() => getTheme(mode), [mode])

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <NavBar toggleColorMode={toggleColorMode} mode={mode} />
                    <Suspense
                        fallback={
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mt: 4,
                                }}
                            >
                                <CircularProgress />
                            </Box>
                        }
                    >
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/about' element={<AboutPage />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    )
}
