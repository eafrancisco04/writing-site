import cover1 from '../img/cover1.jpg';
import styled from 'styled-components';

function Home() {
    return(
        <>
        <Cover>
            <img src={cover1} height={800}/>
            <div className='latest-cover'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae odio totam itaque ducimus distinctio esse eum consequatur! Voluptates assumenda magni atque qui placeat dolores!</p>
            </div>
        </Cover>
        </>
    )
}

const Cover = styled.div`
    margin: 2em;
    padding: 3em;
    height: 100%;
    display: flex;
    justify-content: space-around;

    h3 {
        color: #FEC437;
    }

    .latest-cover {
        padding: 3em;
    }
`

export default Home;