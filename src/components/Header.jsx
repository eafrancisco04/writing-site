import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


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
    border-top: solid 3px #401C4F;
    border-bottom: solid 3px #401C4F;
`
const NLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 2rem;
    color: #004b5e;

    :hover {
        color: #9A76A5;
    }

`
export default Menu;