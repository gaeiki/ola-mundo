import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Hello World!</h1>
        <p className={styles.paragrafo}>
          Seja bem-vindo! Eu sou Gabriel Eiki e esta aplicação é destinada a
          apresentar um pouco da minha trajetória e disponibilizar alguns
          artigos relacionados ao mundo do Desenvolvimento.{" "}
        </p>
        <p className={styles.paragrafo}>
          A aplicação original foi desenvolvida pelo Antônio Evaldo, instrutor
          da escola Alura. Na aplicação foi utilizada a biblioteca React Router
          DOM, uma ferramenta que possibilita a construção de SPAs (Single Page
          Aplication). Fique a vontade para explorar e até mesmo me enviar um
          feedback!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto de Gabriel Eiki sorrindo."
        />
      </div>
    </div>
  );
}
