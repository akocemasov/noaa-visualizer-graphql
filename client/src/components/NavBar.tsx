import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Link } from 'react-router-dom'

type NavBarProps = {
    toggleColorMode: () => void
    mode: 'light' | 'dark'
}

export default function NavBar({ toggleColorMode, mode }: NavBarProps) {
    return (
        <AppBar position='sticky' color='primary' enableColorOnDark>
            <Toolbar>
                <Typography variant='h6' sx={{ flexGrow: 1 }}>
                    🌍 NOAA Data Visualizer
                </Typography>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button color='inherit' component={Link} to='/'>
                        Home
                    </Button>
                    <Button color='inherit' component={Link} to='/about'>
                        About
                    </Button>
                </Box>

                <IconButton color='inherit' onClick={toggleColorMode} aria-label="Toggle theme">
                    {mode === 'dark' ? (
                        <Brightness7Icon />
                    ) : (
                        <Brightness4Icon />
                    )}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
