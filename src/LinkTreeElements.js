import styled from "styled-components";

export const LinkTreePageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: whitesmoke;
    overflow:hidden;
    @media (max-width: 520px) {
        height:100dvh
    }
`

export const BackgroundContainer = styled.div`
    scroll-snap-align: start;
    scroll-snap-stop: always;
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    :before{
        content: "";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:linear-gradient(180deg,rgba(0,0,0,0.2) 20%,rgba(0,0,0,0.6) 100%), 
            linear-gradient(180deg,rgba(0,0,0,0.3) 0%, transparent 100%);
        z-index:2;
    }
`
export const TitleBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    width: 100%;
    height:100%;
    overflow:hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #d79922;
`
export const ContentContainer = styled.div`
    position: absolute;
    width: 700px;
    height: 90%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
    @media (max-width: 520px) {
        height:85%;
        justify-content: space-evenly;
        width:90%
    }
`

export const ProfileImage = styled.img`
    width: 250px;
    border-radius: 100%; 
    margin-bottom: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media (max-width: 520px) {
        width:50%;
        margin-bottom: 15px;
    }
`

export const ProfileName = styled.p`
    font-weight:1000;
    font-size: 56px;
    color: white;
    margin-bottom: 10px;
`

export const ProfileDescription = styled.p`
    text-align:center;
    font-size: 32px;
    color: white;
    margin-bottom:30px;
    @media (max-width: 520px) {
        font-size:26px;
        margin-bottom:15px;
    }

`

export const LinkContainer = styled.a`
    position:relative;
    text-decoration: none;
    margin: 20px;
    height: 80px;
    background-color: white;
    width: 650px;
    border: 3px black solid;
    border-radius: 60px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: ease-in-out 0.2s;
    &:hover{
        transform:scale(1.1)
    }
    @media (max-width: 520px) {
        width:100%;
        height:40px;
        margin: 10px;
    }
`

export const LinkIcon = styled.img`
    position: absolute;
    width: 50px;
    margin-left:20px;
    left:0;
    @media (max-width: 520px) {
        width:30px;
    }
`

export const LinkText = styled.p`
    font-size: 32px;
    text-decoration: none;
    color: black;
    @media (max-width: 520px) {
        font-size: 28px;
    }
`