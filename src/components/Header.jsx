import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiChickenOven, GiNoodles, GiTacos, GiSushis, GiHamburger } from 'react-icons/gi';


function Menu() {
    return(
        <List>
            <NLink to="/about">
                <h4>About</h4>
            </NLink>

            <NLink to="/about">
                <h4>Stories</h4>
            </NLink>

            <NLink to="/about">
                <h4>Issues</h4>
            </NLink>

            <NLink to="/about">
                <h4>Submissions</h4>
            </NLink>

            <NLink to="/about">
                <h4>Contact</h4>
            </NLink>
        </List>
    )
}

const List =  styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    background-image: url("../img/bg-food.jpg");
    border-top: solid 3px #3C3431;
    border-bottom: solid 3px #3C3431;
`
const NLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 2rem;
    color: #3C3431;

    :hover {
        color: #705446;
    }

`
export default Menu;