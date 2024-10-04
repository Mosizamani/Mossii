import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from '@mui/material'
import stayled from '@emotion/styled'

const Layout = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const handleChange = (event, newValue) => {
        navigate(newValue)
    }

    const StyledNav = styled.nav`
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    `

    return (
        <main>
            <StyledNav>
                <Tabs value={location.pathname.replace(/^\/+/, '')} onChange={handleChange}>
                    <Tab value="" label="Home" />
                    <Tab value="about" label="About" />
                    <Tab value="current-projects" label="Current Projects" />
                    <Tab value="past-projects" label="Past Projects" />
                    <Tab value="careers" label="Careers" />
                    <Tab value="contact" label="Contact" />
                    <Tab value="NotFound" />
                </Tabs>
            </StyledNav>

            <Outlet />
        </main>
    )
}

export default Layout