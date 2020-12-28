import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import about from "../images/about.jpg"

const About = () => (
  <Layout>
    <SEO title="about" />
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${about})` }}
    ></div>
    <div className="about-container">
      <h1>about</h1>
      <p>
        Vincenzo Raimondi si è laureato a Padova in Psicologia del lavoro con
        una tesi dal titolo: "La creatività nella fotografia pubblicitaria,
        prospettive e metodi". Primo lavoro è stato dirigere, per oltre cinque
        anni, una gloriosa tipografia di Arzignano. Nel 1982 ha frequentato i
        corsi di fotografia pubblicitaria tenutisi a Venezia da Alfredo
        Pratelli. Nel 1983, passato all’insegnamento, ha ricoperto il ruolo di
        formatore in corsi di aggiornamento nel campo dell'Educazione
        all'Immagine. È stato collaboratore, in qualità di videoperatore, nel
        '93/94, del professore Salvatore Soresi, dell'Università di Padova, in
        un lavoro sull'integrazione degli alunni portatori di handicap. Il video
        girato ha vinto poi un primo premio internazionale. Arnoldo Foà ha
        scelto le sue diapositive per animare, nella seconda metà degli anni
        settanta, un set multimediale in una breve stagione dedicata ai teatri
        dimenticati della provincia di Vicenza. Ha curato, non solo come
        grafico, libri fotografici come “Cara Arzignano”, oltre a cataloghi
        industriali e calendari. Suoi articoli sono apparsi nella rivista
        specializzata in comunicazione pubblicitaria "Strategia" e nella rivista
        "il fotoamatore", organo della FIAF (Federazione Italiana Associazioni
        Fotografiche). Ha scritto articoli per: "Il Giornale di Vicenza",
        "LaVoce dei Berici", il "Dafne", il "Corriere Vicentino", l'"Obiettivo
        Madonita". Ha tenuto corsi di fotografia in molti comuni nonché
        presentazioni di mostre di pittura. Sue foto sono in libri quali:
        "Quarta dimensione-ricerca sulla creatività del bianconero" ediz. Ilford
        1981, "Il colore è un'opinione" ediz. Mazzotta 1982, "Come fotografare
        in bianconero" ediz. Il fotografo 1997. Sue immagini sono apparse in
        calendari e cataloghi industriali. Sue fotografie sono state esposte in
        mostre collettive e personali anche fuori dall'Italia. Si è sempre
        nutrito di immagini. <br/><br/>Mostre recenti: <br/>"a Cavallo" Centro Polis
        Castelbuono 2018 <br/> "Personale", Biblioteca Bedeschi Arzignano 2018 <br/>
        "L'ultimo mercato bestiame" Biblioteca Bedeschi Arzignano 2019 <br/>
        "Castelbuono e intorni" Centro Polis Castelbuono 2019 <br/>"Pangea mostra d'
        arte contemporanea" Montorso 2020
      </p>
    </div>
  </Layout>
)

export default About
