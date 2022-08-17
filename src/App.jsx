import Header from './components/Header';
import Pages from './pages/Pages';
import Footer from './components/Footer';
import Category from './components/Category';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import { SiCodechef } from 'react-icons/si';

function App() {
    return(
        <main className="App">
            <Router>
                <Nav>
                    <Header />
                </Nav>

                <Category />
                <Pages />

                <Footer />
            </Router>
        </main>

    )
}

const Logo = styled(Link)`
    margin: auto;
    padding: 0;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    color: #3C3431;
`

const Nav = styled.div`
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        padding: 1rem;
    }
`


export default App; 