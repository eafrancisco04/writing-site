import Header from './components/Header';
import Pages from './pages/Pages';
import Footer from './components/Footer';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

function App() {
    return(
        <main className="App">
            <Router>
                <Nav>
                    <Logo to="/">
                        LOGO
                    </Logo>
                    <Header />
                </Nav>

                <Pages />

                <Footer />
            </Router>
        </main>

    )
}

const Logo = styled(Link)`
    margin: auto;
    padding: 2rem 0;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    color: #3C3431;
`

const Nav = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    svg {
        padding: 1rem;
    }
`


export default App; 