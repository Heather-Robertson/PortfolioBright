import PandaBugsPreview from "./assets/MakingPictures/pbPreview.png";
import BatResourcesPreview from "./assets/MakingPictures/BatPreview.JPG";
import TossnTowPreview from "./assets/MakingPictures/TossNTowPreview.jpeg";
import LipstickFabulatorPreview from "./assets/MakingPictures/LipstickPreview.jpeg";
import StitchSwitchPreview from "./assets/ResearchFiles/StitchSwitchPreview.jpeg";
import DiceplayPreview from "./assets/ResearchFiles/DiceplayPreview.jpeg";
import ThesisPreview from "./assets/ResearchFiles/TilingPreview.png";
import MothitorPreview from "./assets/ResearchFiles/MothitorPreview.jpeg";

import BagPreview from "./assets/PlaygroundPictures/BagPreview.jpg";
import BloomBotPreview from "./assets/PlaygroundPictures/BloomBotPreview.jpg";
import CADPreview from "./assets/PlaygroundPictures/CADPreview.PNG";
import CandlestickPreview from "./assets/PlaygroundPictures/CandlestickPreview.jpeg";
import KnittingPreview from "./assets/PlaygroundPictures/KnittingPreview.jpg";
import Knitting2Preview from "./assets/PlaygroundPictures/Knitting2Preview.jpg";
import PuzzlePreview from "./assets/PlaygroundPictures/PuzzlePreview.jpeg";
import SillyBot1Preview from "./assets/PlaygroundPictures/SillyBot1Preview.jpg";
import SillyBot2Preview from "./assets/PlaygroundPictures/SillyBot2Preview.jpg";
import SillyBot3Preview from "./assets/PlaygroundPictures/SillyBot3Preview.jpg";
import StolesPreview from "./assets/PlaygroundPictures/StolesPreview.jpeg";
import ThesisBoxPreview from "./assets/PlaygroundPictures/ThesisBoxPreview.jpeg";

// import {PandaBugs, BatResources, TossNTow, LipstickFabulator, Diceplay, Thesis, Mothitor} from './Project.jsx'
import About from './About.jsx'
import BottomElement from './assets/BottomElement.png'

import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { createContext, useCallback, useRef, useContext } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable.js";
import { Observer } from "gsap/Observer.js";

import './App.css'

const SliderContext = createContext();

function LanguageSelector() {
  return(
  <div className="language-selector">
    <button className="language-button">
      EN
      <span className="arrow">▾</span>
    </button>
    <div className="language-menu">
      <a href="index.html" data-lang="en">English</a>
      <a href="/fr/index.html" data-lang="fr">Français</a>
    </div>
  </div>
  );
}

function Nav({goto}) {
  return(
  <nav className="nav">
    <Link className="brand-link" to="/">Heather Robertson</Link>
    <ul className="nav-links">
      <li className="home-link"><button onClick={() => goto(0), window.history.replaceState(null,"","#home")}>Home</button></li>
      <li className="digital-craft-link"><button onClick={() => goto(1), window.history.replaceState(null,"","#digitalcraft")}>Digital Craft</button></li>
      <li className="physical-craft-link"><button onClick={() => goto(2), window.history.replaceState(null,"","#physicalcraft")}>Physical Craft</button></li>
      <li className="research-link"><button onClick={() => goto(3), window.history.replaceState(null,"","#research")}>Research</button></li>
      <li className="playground-link"><button onClick={() => goto(4), window.history.replaceState(null,"","#playground")}>Playground</button></li>
      {/* <LanguageSelector /> */}
    </ul>
  </nav>
  );
}

function Hero(){
  return(
    <section className="hero" id="home">
      {/* <p className="eyebrow">Design Engineer</p> */}
      <br />
      <h1 className="name">HeAtHeR <br />RobeRtson</h1>
      <div className="action-links">
          <Link to="/About" className="about-button">About Me</Link>
          <a href="https://www.linkedin.com/in/heather-robertson-profile" className="linkedin-button">LinkedIn</a>
          <a href="mailto:robertsonheatherp@gmail.com" className="email-button">Email</a>
          <a href="tel:423-767-4905" className="phone-button">Phone</a>
        </div>
      <p>I am a recent graduate of the Design Engineering Master’s program at Brown University and the Rhode Island School of Design. My work centers making as a liberatory practice, motivated by the (dis)ability and queer liberation movements. I approach this subject both from a theoretical/academic perspective, researching computational design and creative technologies, and through the concrete practice of making, often with technology as a physical medium. My work particularly centers humor and play, recognizing joy as a foremost form of resistance.</p>
    <img src = {BottomElement} className="bottom-element" />
    </section>
  );
}

function Skill({title, className}) {
  return(
    <div className="skill">
      <span className={className}>{title}</span>
    </div>
  );
}

//Physical computing: Arduino, Raspberry Pi, C/C++, sensors, actuation, capacitive sensing, SPI, I2C, IoT, soft circuitry, soldering
//Programming: Python, JavaScript, React, HTML/CSS, Java, C, Ruby, SQL, OpenCV, Git, Linux, Bash
//Design and fabrication: Fusion 360, SolidWorks, Figma, Adobe Illustrator, CAD/CAM, 3D printing, laser cutting, CNC, machine embroidery, sand casting, woodworking, model making, prototyping
//Methods: ia, interaction design, accessible design, user research, usability testing, DfM, CMF, computational geometry


function Card({ref, title, subtitle, image, alt, skills}) {
  return(
    <div className="card-boundary">
      <div className="card">
        <div className="card-front">
          <Link to={ref}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <img src={image} alt={alt} />
          </Link>
        </div>
        <div className="card-back">
          <Link to={ref}>
            <h3>{title}</h3>
            {skills.map((skill, className, index) => (
            <Skill key={skill.title} title={skill.title} className={skill.className}/> ))}
            <p className="card-footer">Click to learn more →</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function CardSection({title, sectionID, content, cards}){
  return(
    <section className="card-section" id={sectionID}>
      <div className="section-container">
        <div className="section-hero">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
          {cards.map((card, index) => (
            <Card key = {card.title} ref = {card.ref} title={card.title} subtitle={card.subtitle} image={card.image} alt={card.alt} skills={card.skills}/>
          ))}
      </div>
    </section>
  )
}

function PlaygroundImage({source, alt, x, y}) {
  return(
    <>
    <div className="pin" style = {{left: `${x+4.5}vw`, top: `${y-1}vh`}} ></div>
    <img src = {source} alttext = {alt} style = {{left: `${x}vw`, top: `${y}vh`}} />
    </>
  );
}

function Playground() {
  const playgroundRef = useRef();
  const canvasRef = useRef();
  const innerRef = useRef();

  useGSAP(() => {
    Draggable.create(innerRef.current, {
        type: "x,y",
        bounds: {
          minX: -(innerRef.current.offsetWidth - canvasRef.current.offsetWidth),
          maxX: 0,
          minY: -(innerRef.current.offsetHeight - canvasRef.current.offsetHeight),
          maxY: 0
        },
        edgeResistance: 0.9
      })
  }, { scope: playgroundRef });

  const playgroundImages = [
    {source: BagPreview, alt: "A handmade bag interwoven with lit LEDS", x: 2, y: 70},
    {source: CADPreview, alt: "A 3D CAD model of a complexly-shaped lipgloss tube", x: 20, y: 5},
    {source: CandlestickPreview, alt: "A sand-cast metal candlestick", x: 25, y: 75},
    {source: KnittingPreview, alt: "A small hand-knit swatch with a repeating heart pattern", x: 35, y: 45},
    {source: PuzzlePreview, alt: "An open puzzle box, surrounded by its contents (a dreidel, a havdalah set, a necklace, and several intricate chalices)", x: 50, y: 10},
    {source: SillyBot1Preview, alt: "A small robot with a tracking-eye component, composed of Arduino and 3D-printed parts", x: 55, y: 60},
    {source: SillyBot2Preview, alt: "A small robot with several arms extending upwards from its body, composed of Arduino parts and 3D-printed components", x: 5, y: 20},
    {source: SillyBot3Preview, alt: "A set of digital clocks, one of which always tells the current time and the other of which is stuck on a set time in the past", x: 75, y: 10},
    {source: StolesPreview, alt: "Several students showing off matching commencement stoles, each with the RISD seal in blue on one side and the Brown University logo in red on the other", x:80 , y: 75},
    {source: ThesisBoxPreview, alt: "A wooden box with intricately-engraved, interlocking lid panels", x: 70, y: 40},
    {source: BloomBotPreview, alt: "A colorfully-painted 3D-printed flower in bloom, attached to a servo motor", x: 105, y: 5},
    {source: Knitting2Preview, alt: "A large purple scarf in the midst of being knit", x: 100, y: 60}
    // {source: , alt: , x: , y: },
  ];

  return (
    <section className="playground" id="playground" ref={playgroundRef}>
      <h2>Playground</h2>
      <p>Explorations, Works in Progress, and Hobby Creations</p>
      <div className="playground-canvas" ref={canvasRef}>
        <div className="playground-canvas-inner" ref={innerRef}>
          {playgroundImages.map((playgroundImage, index) => (
            <PlaygroundImage key = {index} source = {playgroundImage.source} alt = {playgroundImage.alt} x={playgroundImage.x} y={playgroundImage.y}/>
          ))}
          <p>click and drag to explore</p>
          {/* Projects: Light in a Mirrored Room, Straight Skeleton, Lipstick Color Finder, Makeup, Lipstick Fabulator, Silly Robots, Vessel, Puzzle Boxes (Exquisite Poetry), BloomBot, Writing (Including Bailey's Page), Toss&Tow, Sorelle, Chopsticks, StressLess, Woolly Worm Bin, Bat Resources, Soundscape Tapestry, Diceplay, StitchSwitch, Robotic Makeup Application, Thesis Box, Metal Candlestick, Health&Habit (Including Grad Show), Brown/RISD Stoles, Knitting, PandaBugs*/}
        </div>
      </div>
    </section>
  );
}

function Home() {
  const sliderRef = useRef(null);

  const panelsRef = useRef([]);
  const currentRef = useRef(0);
  const animatingRef = useRef(false);
  const canScrollRef = useRef(true);

  const goto = useCallback((index) => {
      const panels = panelsRef.current;

      if (
          animatingRef.current ||
          !canScrollRef.current ||
          index < 0 ||
          index >= panels.length ||
          index === currentRef.current
      ) {
          return;
      }

      const current = currentRef.current;
      const direction = index > current ? 1 : -1;

      canScrollRef.current = false;
      animatingRef.current = true;

      gsap.timeline({
          defaults: {
              duration: 0.8,
              ease: "power3.inOut"
          },

          onComplete() {
              currentRef.current = index;
              animatingRef.current = false;

              gsap.delayedCall(0.4, () => {
                  canScrollRef.current = true;
              });
          }
      })

      .to(
          panels[current],
          {
              yPercent: direction > 0 ? -100 : 100
          },
          0
      )

      .fromTo(
          panels[index],
          {
              yPercent: direction > 0 ? 100 : -100
          },
          {
              yPercent: 0
          },
          0
      );

  }, []);

  useGSAP(() => {

    panelsRef.current = gsap.utils.toArray(".panel");

    gsap.set(panelsRef.current, {
        yPercent: 100
    });

    gsap.set(panelsRef.current[0], {
        yPercent: 0
    });

    const observer = Observer.create({

        target: window,

        type: "wheel,touch",

        preventDefault: true,

        wheelSpeed: 1,

        tolerance: 500,

        scrub: true,

        onDown(self) {
          if (Math.abs(self.deltaY) < 40) return;
            goto(currentRef.current + 1);
        },

        onUp(self) {
          if (Math.abs(self.deltaY) < 40) return;
            goto(currentRef.current - 1);
        }

    });

    return () => observer.kill();

  }, {
      scope: sliderRef,
      dependencies: [goto]
  });

  const digitalCards = [
    {ref: "/PandaBugs", title: "PandaBugs", subtitle: "Complete website overhaul for PandaBugs, Inc., a local 501(c)(3) nonprofit organization", image: PandaBugsPreview, alt: "A preview of the wireframe for PandaBugs.org", skills: [{title: "Interaction Design", className: "methods"},{title: "Information Architecture", className: "methods"},{title: "Design for Accessibility", className: "methods"},{title: "Wireframing", className: "craft"},{title: "Figma", className: "craft"},{title: "Adobe Illustrator", className: "craft"},{title: "HTML/CSS", className: "programming"},{title: "JavaScript", className: "programming"},{title: "React", className: "programming"},{title: "Git", className: "programming"}] }
  ];

  const physicalCards = [
    {ref: "/BatResources", title: "Bat Resources", subtitle: "A habitat intervention and an enrichment tool both for Big Brown Bats, made for the Wildlife Rehabilitators Association of Rhode Island", image: BatResourcesPreview, alt: "A large, wooden bat house", skills:[{title: "Sustainable Design", className: "methods"},{title: "Sketching", className: "craft"},{title: "Model Making", className: "craft"},{title: "Woodworking", className: "craft"},{title: "Prototyping", className: "craft"}] },
    {ref: "/TossNTow", title: "Toss N' Tow", subtitle: "Interlocking, wheeled cornhole boards, designed to quickly and simply facilitate tailgate or beach day fun", image: TossnTowPreview, alt: "A set of wheeled, interlocking cornhole boards", skills:[{title: "Model Making", className: "craft"},{title: "Woodworking", className: "craft"},{title: "Adobe Illustrator", className: "craft"},{title: "Vinyl Cutting", className: "craft"},{title: "Prototyping", className: "craft"},{title: "Usability Testing", className: "methods"}]},
    {ref: "/LipstickFabulator", title: "Lipstick Fabulator", subtitle: "A machine capable of creating lipstick in any desired color, eliminating the need to purchase individual makeup shades", image: LipstickFabulatorPreview, alt: "A machine dispensing from three syringes of lipstick pigment", skills:[{title: "Model Making", className: "methods"},{title: "CAD/CAM", className: "craft"},{title: "Fusion 360", className: "craft"},{title: "3D Printing", className: "craft"},{title: "Laser Cutting", className: "craft"},{title: "Prototyping", className: "craft"},{title: "Arduino", className: "physical-computation"},{title: "Actuation", className: "physical-computation"},{title: "C++", className: "programming"}]},
  ];

  const researchCards = [
    {ref: "/StitchSwitch", title: "StitchSwitch", subtitle: ["Computational characterization and design tools for embroidered bistable textiles", <br />, "UIST 2026"], image: StitchSwitchPreview, alt: "A shirt sleeve embroidered with bistable buttons and braille labels", skills:[{title: "Computational Geometry", className: "methods"},{title: "Interaction Design", className: "methods"},{title: "User Research", className: "methods"},{title: "Design for Accessibility", className: "methods"},{title: "CAD/CAM", className: "craft"},{title: "Adobe Illustrator", className: "craft"},{title: "Inkscape", className: "craft"},{title: "Machine Embroidery", className: "craft"}, {title: "Prototyping", className: "craft"},{title: "Arduino", className: "physical-computation"},{title: "Capacitive Sensing", className: "physical-computation"},{title: "Internet of Things", className: "physical-computation"},{title: "SPI", className: "physical-computation"},{title: "Soft Circuitry", className: "physical-computation"}, {title:"C++", className:"programming"}] },
    {ref: "/Diceplay", title: "Diceplay", subtitle: ["A low-cost, modular display for physical image composition", <br />, "SIGGRAPH 2026"], image: DiceplayPreview, alt: "An image of a fish, composed of colorfully-lit 3D-printed cubes (dice) in a frame", skills:[{title: "Computational Geometry", className: "methods"},{title: "Interaction Design", className: "methods"},{title: "User Testing", className: "methods"},{title: "Adobe Illustrator", className: "craft"},{title: "CAD/CAM", className: "craft"},{title: "Fusion 360", className: "craft"},{title: "3D Printing", className: "craft"},{title: "Soldering", className: "craft"},{title: "Prototyping", className: "craft"},{title: "Arduino", className: "physical-computation"},{title: "C++", className: "programming"}] },
    // {ref: "/Thesis", title: "Honors Thesis", subtitle: ['"Tilability of Platonic Solid Nets in Multiple Dimensions"',<br />, "Highest Honors, Smith College Computer Science"], image: ThesisPreview, alt: "A tiling pattern dervied from pentagons", skills:[{title: "Computational Geometry", className: "methods"},{title: "Python", className: "programming"},{title: "Mathematica", className: "programming"},{title: "TeX", className: "programming"},{title: "Model Making", className: "craft"},{title: "CAD/CAM", className: "craft"},{title: "Adobe Illustrator", className: "craft"},{title: "Laser Cutting", className: "craft"},{title: "Fusion 360", className: "craft"},{title: "3D Printing", className: "craft"}] },
    {ref: "/Mothitor", title: "Mothitor", subtitle: "Computational tools for remote moth population monitoring", image: MothitorPreview, alt: "A group of researchers hiking to a fieldwork site", skills:[{title: "Sustainable Design", className: "methods"},{title: "Field Testing", className: "methods"},{title: "CAD/CAM", className: "craft"},{title: "Fusion 360", className: "craft"},{title: "3D Printing", className: "craft"},{title: "Soldering", className: "craft"},{title: "Prototyping", className: "craft"},{title: "Raspberry Pi", className: "physical-computation"},{title: "Sensing", className: "physical-computation"},{title: "Actuation", className: "physical-computation"},{title: "SPI", className: "physical-computation"},{title: "I2C", className: "physical-computation"},{title: "Python", className: "programming"},{title: "OpenCV", className: "programming"},{title: "Linux", className: "programming"},{title: "Bash", className: "programming"}] },
  ];

  return(
    <SliderContext.Provider value={{ goto }}>
      <header>
        <Nav goto={goto} />
      </header>
      <main className="slider" ref={sliderRef}>
        <section className="panel">
          <Hero />
        </section>
        <section className="panel">
          <CardSection title="Digital Craft" sectionID="digital_craft" content="User Interface and User Experience Design, Programming, and Frontend Development" cards={digitalCards} />
        </section>
        <section className="panel">
          <CardSection title="Physical Craft" sectionID="physical_craft" content="Design Engineering, Physical Computation, Handicraft, and Prototyping" cards={physicalCards} />
        </section>
        <section className="panel">
          <CardSection title="Research" sectionID="research" content="Applied Computer Science, Computational Design, and Computational Geometry" cards={researchCards} />
        </section>
        <section className="panel">
          <Playground />
        </section>
      </main>
    </SliderContext.Provider>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App
