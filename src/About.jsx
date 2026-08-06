import './About.css'

function Hero(){
    return(
        <section className="about-hero">
            <h1>hi, i'm heather</h1>
            <p> I am an HCI specialist and recent graduate of the Design Engineering Master’s program at Brown University and the Rhode Island School of Design. 
                My work centers digital and physical design as a liberatory practice, motivated by the (dis)ability and queer liberation movements. 
                My approach to this subject is comprised of two main facets: 
                firstly, the concrete practice of making, often with technology as a physical medium: I see design and fabrication as tools that can shape our realities towards the imagined worlds we wish to live in; in other words, the practice of ‘speculative fabulation,’ as posthumanist scholar Donna Haraway calls it, can serve as a means of liberating ourselves from oppression. 
                Secondly, academic research studying computational design, human-computer interaction, and creative technologies: we cannot hope to properly address those issues which we do not truly understand; thus, a commitment to inquiry, observation, and the open exchange of ideas is corequisite to any meaningful commitment to social justice. </p>
            <p>When I am not working, I cultivate joy through nature: hiking, biking, climbing, and swimming whenever the circumstances allow. 
                During the baseball season, I can also be found at Fenway Park cheering on my beloved Boston Red Sox. 
                My greatest hobby, though, is spending time with my cat, Bailey, who has accompanied me through 12 states, 2 countries, 3 degrees, and so much more.</p>
        </section>
    )
}

function Section({title, items, sectionID}){
    return(
        <section className="resumeSection" id={sectionID}>
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (<li key={item.index}><p>{item}</p></li> ))}
            </ul>
        </section>
    )
}

export default function About(){
    const educationItems = 
        [[<b>Master of Arts in Design Engineering,</b>, <br />, "Brown University & Rhode Island School of Design"],
        [<b>Bachelor of Arts in Computer Science (Highest Honors),</b>, <br />, "Smith College"],
        [<b>Diplôme Universitaire d’Études Françaises (Highest Mention),</b>, <br />, "Université Grenoble Alpes"]];
    const researchItems = 
        [[<b>Research Assistant,</b>, <br />, "Brown University Computational Design Group"],
        [<b>Summer Research Fellow,</b>, <br />, "Smith College Robotics and Mechatronics Laboratory"],
        [<b>Lab Assistant,</b>, <br />, "Smith College Insectology Laboratory"],
        [<b>Summer Research Fellow,</b>, <br />, "Smith College Linkage Laboratory"]];
    const publicationsItems = 
        ["StitchSwitch: Programmable Surface Deformation and Bistability in Embroidered Textiles, UIST 2026", 
        "Diceplay: Modular canvas for physical image composition, SIGGRAPH 2026"];
    const awardsItems = 
        ["Bert Mendelson Computer Science Prize, 2023",
        "Smith College Presidential Scholarship, 2021-2025", 
        "National Merit Scholarship, 2021"];
    const experienceItems = 
        [[<b>Founding Engineer,</b>, <br />, "Athena Digital Solutions"],
        [<b>Development Coordinator,</b>, <br />, "PandaBugs Inc."],
        [<b>Tutor,</b>, <br />, "Varsity Tutors"],
        [<b>Circulation Assistant,</b>, <br />, "Neilson Library"]];
    const skillsItems = 
        [[<b>Physical computing: </b>, "Arduino, Raspberry Pi, sensors, actuation, capacitive sensing, IoT, SPI, I2C, soft circuitry"],
        [<b>Programming: </b>, "Python, JavaScript, React, HTML/CSS, Java, C, C++, Ruby, SQL, OpenCV, Git, Linux, Bash"],
        [<b>Design and fabrication: </b>, "CAD/CAM, Fusion 360, wireframing, Figma, Adobe Illustrator, Inkscape, 3D printing, laser cutting, CNC, machine embroidery, sand casting, woodworking, soldering, model making, rapid prototyping"],
        [<b>Methods: </b>, "Sustainable design, information architecture, interaction design, accessible design, user research, usability testing, computational geometry"]];
    const languageItems = ["French, Fluent (CEFR/CECRL C1)"];

    return(
        <>
            <Hero />
            <div class="split">
                <div class="col">
                    <Section title="Education" items={educationItems} sectionID="education" />
                    <Section title="Research Experience" items={researchItems} sectionID="research-experience" />
                    <Section title="Publications" items={publicationsItems} sectionID="publications" />
                    <Section title="Languages" items={languageItems} sectionID="languages" />
                </div>
                <div class="col">
                    <Section title="Work Experience" items={experienceItems} sectionID="experience" />
                    <Section title="Skills" items={skillsItems} sectionID="skills" />
                    <Section title="Honors and Awards" items={awardsItems} sectionID="awards" />
                </div>
            </div>
        </>
    )
}