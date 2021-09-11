import styled from 'styled-components'
import {Form, Button, Navbar, Carousel} from 'react-bootstrap'

// export const NavBarSecondary = styled.nav`
// height: 80px;
// width: 87vw;
// display: flex;
// flex-direction: row;
// align-items: center;
// justify-content: center;
// padding: 14px 83px;
// position: relative;
// top: 0;
// left: 0;

// & > img {
//     width: 20vw;
//     height: 8vh;
//     margin: 20px;
// }

// & > p {
//     width: 30vw;
//     text-align: center;
//     align-content: center;
//     color: #fff;
// }
// & > button {
//     height: 37px;
//     width: 50px;
//     border-radius: 0px 8px 8px 0px;
//     background-color: #FED941;
//     margin-right: 10px;
// }

// & > input {
//     height: 35px;
//     width: 533.19px;
//     padding: 11px 12px;
//     border: 1px solid #FED941;
//     box-sizing: border-box;
//     border-radius: 8px 0px 0px 8px;
//     margin-left: 40px;
// }
// `

export const BoxBackgroun = styled(Navbar)`
background-color: #0F0E17;
height: 112px;
width: 100vw;
position: fixed;
z-index: 998;
`

export const BoxSearch = styled.div`

& > input {
height: 36px;
width: 300.19px;
padding: 11px 12px;
border: 2px solid #FED941;
box-sizing: border-box;
border-radius: 8px 0px 0px 8px;
};
`
export const BoxComponents = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
`
// From and Login
export const BoxForm = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
margin-top: 20px;
position:relative;
left: 15vw;
`
export const BoxFormContent = styled(BoxForm)`
height: auto;
width: 45vw;
border: 1px solid #FFA903;
border-radius: 20px;
padding: 20px;
background-color: #000000;
`
export const InputForm = styled(Form.Control)`
width: 70vw;
border: 1px solid #FFA903;
margin-bottom: 10px;

@media(min-width: 1000px){
width: 25vw;
}
`
export const ButtonFrom = styled(Button)`
background-color: #0E3FA9;
color: #FFA903;
width: 25vw;


@media(min-width: 1000px){
width: 15vw;
}
&:hover{
    transform: scale(1.08);
}
`
export const ButtonGoogle = styled(ButtonFrom)`
width: 70vw;

@media(min-width: 1000px){
    width: 25vw;
}
`
// Carousel 

export const BoxCarouselLocal = styled.div`
display: flex;
align-items:center;
align-content:center;
justify-content: center;
`

export const CarouselLocal = styled(Carousel)`
height: 320px;
width: 98vw;
margin-top: 120px;
display: flex;
border-radius: 20px;
`

export const CarouselLocalImg = styled(Carousel.Item)`
& > img{
    border-radius: 20px;
    height: 320px;
    width: 98vw;
}
`
// Cards 

export const BoxContainerCards = styled.div`
width: 100vw;
height: 50vh;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

& > button{
    height: 36px;
    width: 50px;
    border: 0.5px solid #FED941;
    border-radius: 0px 8px 8px 0px;
    background-color: #FED941;
    margin-right: 10px;
    position: fixed;
    z-index: 999;
    top: 38px;
    right: 150px;
}
`
export const ClasiCards = styled.div`
background-image: url("${props => props.background}");
background-size: 220px 330px;
height: 330px;
width: 220px;
margin: 10px;
border-radius: 8px;
border: 3px solid #0F0E17;

& > div {
    border: 1px solid;
    border-color: ${props => props.border};
    height:54px;
    width: 114px;
    position: relative;
    top: 24px;
    border-radius: 0px 40px 40px 0px;
    background-color: rgb(0, 0, 0, 0.5);
    & > img {
        width: 24px;
        height: 24px;
        position: relative;
        top: 2.5px;
        left: 14px;
    }
    & > span {
        font-size: 28px;
        color:#FFFFFE;
        text-align: center;
        width: 35px;
        height: 34px;
        position: relative;
        line-height: 34px;
        font-family: Montserrat;
        letter-spacing: 0.01em;
        font-weight: bold;
        left: 44px;
        top: 8px;
    }
}
`