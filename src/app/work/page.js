import {
    faCss3, faDocker, faGitAlt,
    faHtml5,
    faJs,
    faJsSquare,
    faLaravel, faLinux, faMagento,
    faPhp,
    faReact,
    faSymfony,
    faVuejs, faWordpress
} from "@fortawesome/free-brands-svg-icons";
import {faAd, faDatabase, faSearchDollar} from "@fortawesome/free-solid-svg-icons";
import Skill from "@/components/Skills/Skill";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function WorkPage() {
    const skills = {
        'php': {id: "php", name: "PHP", colour: "#4F5B93", comfort: 90, icon: faPhp},
        'html': {id: "html", name: "HTML", colour: "#E34C26", comfort: 90, icon: faHtml5},
        'css': {id: "css", name: "CSS", colour: "#2965F1", comfort: 70, icon: faCss3},
        'js': {id: "javascript", name: "JavaScript", colour: "#F7DF1E", comfort: 70, icon: faJs},
        'mysql': {id: "mysql", name: "MySQL", colour: "#4479A1", comfort: 90, icon: faDatabase},
        'react': {id: "react", name: "React", colour: "#61DAFB", comfort: 80, icon: faReact},
        'laravel': {id: "laravel", name: "Laravel", colour: "#FF2D20", comfort: 60, icon: faLaravel},
        'cake': {id: "cakephp", name: "CakePHP", colour: "#D33F49", comfort: 50, icon: faPhp},
        'zend': {id: "zend", name: "Zend", colour: "#68B4E1", comfort: 40, icon: faPhp},
        'symfony': {id: "symfony", name: "Symfony", colour: "#000000", comfort: 75, icon: faSymfony},
        'vue': {id: "vue", name: "Vue", colour: "#42B883", comfort: 50, icon: faVuejs},
        'jquery': {id: "jquery", name: "jQuery", colour: "#0868AC", comfort: 70, icon: faJsSquare},
        'wp': {id: "wordpress", name: "WordPress", colour: "#21759B", comfort: 80, icon: faWordpress},
        'magento': {id: "magento", name: "Magento", colour: "#EE672F", comfort: 25, icon: faMagento},
        'git': {id: "git", name: "Git", colour: "#F05032", comfort: 70, icon: faGitAlt},
        'docker': {id: "docker", name: "Docker", colour: "#2496ED", comfort: 70, icon: faDocker},
        'linux': {id: "linux", name: "Linux", colour: "#FCC624", comfort: 60, icon: faLinux},
        'seo': {id: "seo", name: "SEO", colour: "#32CD32", comfort: 75, icon: faSearchDollar},
        'om': {id: "online-marketing", name: "Online Marketing", colour: "#FF4500", comfort: 55, icon: faAd}
    };

    const WORK = [
        {
            id: 'revel',
            job_title: 'Senior Systems Developer',
            company: 'Revel Collective',
            company_url: null,
            stack: [skills.php, skills.mysql, skills.react, skills.symfony, skills.wp, skills.docker, skills.linux, skills.git],
            dates: '2021 - Present',
            location: 'Manchester and remote',
            description: 'I’m currently employed as Senior Systems Developer for Revolution Bars Group, responsible for maintaining and improving the various platforms used to manage bookings, reservations, site data, marketing and so on across the brand’s almost 70 bars and restaurants. The platforms use multiple microservices built on a Symfony foundation providing APIs to front-end platforms which are built on various versions of React. I occasionally help out with the customer facing websites which are built on WordPress and Vue. ',
        },
        {
            id: 'castus',
            job_title: 'Web Developer',
            company: 'Castus Ltd',
            company_url: null,
            dates: '2019 - 2021',
            stack: [skills.php, skills.mysql, skills.vue, skills.laravel, skills.magento, skills.wp, skills.docker, skills.linux, skills.git],
            location: 'Sheffield',
            description: 'When I started my main focus was assisting in the rebuild in Laravel and Vue of a booking engine and connected marketing sites for an international cruise ship company. In early 2020 this work was paused (for perhaps obvious reasons) and was transformed into a smaller, albeit similar project utilising a mixture of the legacy, bespoke PHP code (which I was also tasked with maintaining before the project changed), Laravel and ProcessWire. I also worked on many other clients’ websites including ecommerce sites built in Laravel and Magento respectively, many WordPress sites and some ProcessWire sites.'
        },
        {
            id: 'switchstance',
            job_title: 'Lead Developer',
            company: 'Switchstance',
            company_url: null,
            dates: '2016 - 2019',
            stack: [skills.php, skills.mysql, skills.vue, skills.cake, skills.wp, skills.magento],
            location: 'Sheffield'
        },
        {
            id: 'xbite',
            job_title: 'Technical Developer',
            company: 'High Tech Click / Xbite',
            company_url: null,
            dates: '2014 - 2016',
            stack: [skills.php, skills.mysql, skills.zend, skills.linux],
            location: 'Sheffield'
        },
        {
            id: 'dougrichard',
            job_title: 'Developer',
            company: 'Doug Richard Ltd.',
            company_url: null,
            dates: '2010 - 2012',
            stack: [skills.php, skills.mysql, skills.wp, skills.jquery],
            location: 'Remote',
            description: 'I worked for ex-Dragons\' Den investor Doug Richard as sole developer, building and maintaining a wide range of websites promoting his business interests.'
        },
        {
            id: 'iceinnovation',
            job_title: 'Senior Web Developer',
            company: 'Ice Innovation',
            company_url: null,
            dates: '2010',
            stack: [skills.php, skills.mysql, skills.wp, skills.jquery],
            location: 'Leeds',
            description: 'I was the senior web developer at Ice Innovation, a young web development agency in Leeds. I created their CMS platform from scratch which all clients used to manage their websites. These included a cash for gold site that had a custom calculator using gold price feeds, a hotel site with booking forms, a multi-language portfolio site and more.'
        },
        {
            id: 'lewisjames',
            job_title: 'Senior Web Developer',
            company: 'Lewis James Ltd.',
            company_url: null,
            dates: '2008 - 2010',
            stack: [skills.php, skills.mysql, skills.wp, skills.jquery],
            location: 'Leeds and Huddersfield',
            description: 'I was responsible for rebuilding and marketing an office stationery website which was brought in-house after I expressed concern about its current handling by a web agency. After the company founders invested in a car showroom, I was then responsible for building, maintaining and marketing their car listings website.'
        },
    ];

    return (
    <div>
        <main>
            <h1>Career History</h1>
            {WORK.map((company) => {
                return <div style={{background: "peachpuff", margin: '25px 0', padding: '30px'}} key={company.id}>
                    <h2><span className="has-bg">{company.company}</span></h2>
                    <div style={{padding: '20px 0'}}>
                        <div><h3>{company.job_title}</h3></div>
                        <div><span>{company.dates}</span> &bull; <span>{company.location}</span></div>
                    </div>
                    <div>

                        <div className="work-skills">
                            {company.stack.map((item) => {

                                return <span key={item.id} style={{
                                    border: '1px solid grey',
                                    margin: '0 8px 0 0',
                                    padding: '0 8px 3px 8px',
                                    background: 'white',
                                    borderRadius: '5px'
                                }}>
                                    <small>
                                    <FontAwesomeIcon color={item.colour} icon={item.icon}/> {item.name}
                                    </small>
                                </span>

                            })}
                        </div>

                        <div style={{padding: '15px 0 0'}}>
                        <p>{company.description}</p>
                        </div>

                    </div>
                </div>
            })}
        </main>
    </div>)
}

export default WorkPage;