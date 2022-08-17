import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaPinterestP, FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

function Footer() {
    return(
        <Bottom>
        <footer>
            <div>
                <h3>Follow us on:</h3>
                <BsInstagram size={40} color="lightcyan"/>{' '}
                <FaPinterestP size={40} color="lightcyan"/>{' '}
                <BsYoutube size={40} color="lightcyan"/>{' '}
                <FiTwitter size={40} color="lightcyan"/>{' '}
                <FaFacebookF size={40} color="lightcyan"/>{' '}
            </div>
            <small>2022 Ea Francisco © All Rights Reserved.</small>
        </footer>
        </Bottom>
    )
}

const Bottom = styled.div`
    padding: 1rem 5rem;
    background-color: #004b5e;
    color: #F4EBE8;
    align-content: center;
    text-align: center;

    h3 {
        color: #FEC437;
    }
`
export default Footer;