import React from "react";
import styled from "styled-components";
import imgTwitter from "../assets/twitter.svg";
import imgFacebook from "../assets/facebook.svg";
import imgInstagram from "../assets/instagram.svg";

const FooterStyles = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: center;
  height: auto;
  border-top: 0.1em solid #e5e5e5;
  & > * {
    height: 120px;
    list-style: none;
    font-size: 0.8em;
    margin-top: 1.5em;
    line-height: 1.8em;
  }
  .title {
    font-weight: 700;
    font-size: 1em;
    letter-spacing: 0.1em;
    color: #000000;
  }
  .col-3 {
    display: flex;
    flex-flow: column;
  }
  .col-3 li.title {
    height: 30px;
  }
  ul li img {
    width: 2em;
  }
  ul > :nth-child(n + 2) {
    color: #eb5151;
    cursor: pointer;
  }
  .copyright {
    width: 100%;
    height: auto;
    margin-top: 1em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-top: 0.1em solid #e5e5e5;
  }
  .copyright p {
    font-size: 1.1em;
    font-weight: 500;
    padding: 0.5em;
  }
  @media screen and (max-width: 700px) {
    & > * {
      width: 30%;
    }
  }
  @media screen and (max-width: 560px) {
    & > * {
      width: 45%;
    }
    .copyright {
      width: 100%;
    }
    .copyright p {
      font-size: 0.9em;
    }
  }
  @media screen and (max-width: 450px) {
    flex-flow: column wrap;
    & > * {
      width: 100%;
    }
  }
  @media screen and (max-width: 400px) {
    & > * {
      width: 100%;
    }
    .copyright p {
      font-size: 0.8em;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <ul className="col-1">
        <li className="title">La empresa</li>
        <li>¿Quienes Somos?</li>
        <li>Empleo</li>
        <li>Prensa</li>
      </ul>
      <ul className="col-2">
        <li className="title">Trabaja en News Feeds</li>
        <li>Perfiles vacantes</li>
        <li>Dejanos tus datos</li>
        <li>Grupo de profesionales</li>
      </ul>
      <ul className="col-2">
        <li className="title">Más</li>
        <li>Atención al Cliente</li>
        <li>Preguntas Frecuentes</li>
        <li>Condiciones Generales</li>
        <li>Sitios recomendados</li>
      </ul>
      <ul className="col-3">
        <li className="title">Seguinos</li>
        <li>
          <img src={imgTwitter} alt="twitter" />
        </li>
        <li>
          <img src={imgFacebook} alt="facebook" />
        </li>
        <li>
          <img src={imgInstagram} alt="instagram" />
        </li>
      </ul>
      <ul className="col-4">
        <li className="title">Contactanos</li>
        <li>0810-222-XXXX</li>
        <li>011 15-XXXX-XXXX</li>
        <li>4643-XXXX</li>
      </ul>
      <div className="copyright">
        <p>
          Copyright &copy;2020 by Gustavo Velasquez, todos los derechos
          reservados.
        </p>
      </div>
    </FooterStyles>
  );
};

export default Footer;
