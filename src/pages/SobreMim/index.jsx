import styles from "./Sobremim.module.css";
import PostModelo from "components/PostModelo";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Gabriel!</h3>

      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt="Foto do Gabriel Eiki sorrindo"
      />

      <p className={styles.paragrafo}>Olá! Tudo bem?</p>
      <p className={styles.paragrafo}>
        Sou graduado desde 2022 em Engenharia Mecatrônica pelo Instituto Federal
        de Ciência, Educação e Tecnologia de Santa Catarina (IFSC), campus
        Florianópolis. Lá, tive meu primeiro contato com a Programação, onde
        pude aprender os conceitos básicos como lógica de programação e
        linguagens <strong>C</strong> e <strong>C++</strong>. Além disso,
        realizei disciplinas de Visão Computacional e Engenharia de Software.
        Também realizei meu TCC relacionado à detecção e classificação de
        objetos em imagens com redes neurais convolucionais, utilizando
        linguagem <strong>Python</strong>.
      </p>
      <p className={styles.paragrafo}>
        Ainda na graduação, fiz parte do PET (Programa de Educação Tutorial)
        Mecatrônica, um grupo de pesquisa que visa auxiliar o curso de diversas
        formas.
      </p>
      <p className={styles.paragrafo}>
        E, ao longo de todo esse processo, me interessei cada vez mais pela área
        da Programação. Mas foi após a finalização da faculdade que comecei a me
        dedicar em estudar o Desenvolvimento Front-end. Desde então realizei
        diversos cursos e projetos nos quais pude adquirir os conhecimentos de
        tecnologias básicas para o Front-end como o <strong>HTML</strong>,{" "}
        <strong>CSS</strong> e <strong>JavaScript</strong>; e outras
        ferramentas, bibliotecas e frameworks como <strong>Git</strong>,{" "}
        <strong>JQuery</strong>, <strong>ReactJS</strong>.
      </p>
      <p className={styles.paragrafo}>
        Meu objetivo é me especializar cada vez mais na construção de aplicações
        e interfaces, aprimorando os conhecimentos adquiridos até então e
        aprendendo novos. Enfrentar novos desafios e arriscar novos caminhos.
      </p>
      {/* <p className={styles.paragrafo}>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. A
        Alura é uma escola não só para seus alunos e alunas, mas também para os
        colaboradores e colaboradoras. Hoje sou muito feliz de ter a
        oportunidade de trazer esses conteúdos ricos e encantadores para você.
        Espero que aprenda bastante!
      </p> */}
    </PostModelo>
  );
}
