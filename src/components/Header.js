import logo from "../images/logo.svg"
import styled from "styled-components"
import search from "../images/search.svg"
import React from "react"
import { Link } from "react-router-dom"

export default function Header({children}) {
    const [showDropDown, setShowDropDown] = React.useState(false);
    
    return(
        <StyledHeader showDropDown={showDropDown}>
            <section>
                <div>
                    <h1>Oi! Bem-vindx</h1>
                    <span>Visitante</span>
                </div>
                <img src={logo} alt="Foto"/>
                <div onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)}>
                    <ion-icon name="person-circle-outline"/>
                    <div aria-labelledby="dropdownMenuButton">
                        <Link to="/login">Login</Link>
                        <Link to="/sign-up">Registre-se!</Link>
                    </div>
                </div>
            </section>
            {children}
        </StyledHeader>
    )
}



const StyledHeader = styled.header`

        @keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-20px);
                    transform: translateY(-20px);
        }
        }

        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
        padding-bottom: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFFFFF;
        row-gap: 24px;

        div:nth-of-type(2) {
            position: relative;
            div {
                display: ${props => props.showDropDown ? "initial" : "none"};
                animation: slide-top 0.5s cubic-bezier(0.550, 0.055, 0.675, 0.190) reverse both;
                position: absolute;
                background-color: white;
                right: -30px;
                border: solid 1px;
                top: 35px;
                a {
                    text-decoration: none;
                    border: solid 1px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 40px;
                    font-family: "Encode Sans";
                    width:100px;
                    color: black;
                }
            }
        }

        ion-icon {
            font-size: 36px;
        }

        &>section:nth-of-type(1) {
            width: 100%;
            margin-top: 16px;
            height: 49px;
            padding: 0 calc((100% - 327px)/2);
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
                row-gap: 4px;

                h1 {
                    font-family: "Encode Sans", sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 21px;
                    color: #1B2028;
                }

                span {
                    font-family: "Encode Sans", sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 21px;
                    color: #1B2028;
                }
            }

            img {
                width: 40px;
            }
        }

        &>section:nth-of-type(2) {
            width: 100%;
            padding: 0 calc((100% - 327px)/2);
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 16px;

            input {
                width: 100%;
                height: 49px;
                border: 1px solid #EDEDED;
                border-radius: 12px;
                background-image: url(${search});
                background-position: 16px 50%;
                background-repeat: no-repeat;
                outline: none;
                padding-left: 44px;
                font-family: "Encode Sans", sans-serif;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;

                ::placeholder {
                    color: #878787;
                }
            }
        
`;