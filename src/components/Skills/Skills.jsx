import React from 'react';
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
import SkillSet from "./SkillSet/SkillSet";
import Skill from "./Skill/Skill";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './skills.module.css';

function Skills() {
    const skills = {
        programmingLanguages: {
            title: 'Programming Languages', id: 'languages', items: [
                {id: "php", name: "PHP", colour: "#4F5B93", comfort: 90, icon: faPhp},
                {id: "html", name: "HTML", colour: "#E34C26", comfort: 90, icon: faHtml5},
                {id: "css", name: "CSS", colour: "#2965F1", comfort: 70, icon: faCss3},
                {id: "javascript", name: "JavaScript", colour: "#F7DF1E", comfort: 70, icon: faJs},
                {id: "mysql", name: "MySQL", colour: "#4479A1", comfort: 90, icon: faDatabase}
            ]
        },
        webFrameworksAndLibraries: {
            title: 'Frameworks', id: 'frameworks', items: [
                {id: "react", name: "React", colour: "#61DAFB", comfort: 80, icon: faReact},
                {id: "laravel", name: "Laravel", colour: "#FF2D20", comfort: 60, icon: faLaravel},
                {id: "cakephp", name: "CakePHP", colour: "#D33F49", comfort: 50, icon: faPhp},
                {id: "zend", name: "Zend", colour: "#68B4E1", comfort: 40, icon: faPhp},
                {id: "symfony", name: "Symfony", colour: "#000000", comfort: 75, icon: faSymfony},
                {id: "vue", name: "Vue", colour: "#42B883", comfort: 50, icon: faVuejs},
                {id: "jquery", name: "jQuery", colour: "#0868AC", comfort: 70, icon: faJsSquare},
                {id: "wordpress", name: "WordPress", colour: "#21759B", comfort: 80, icon: faWordpress},
                {id: "magento", name: "Magento", colour: "#EE672F", comfort: 25, icon: faMagento}
            ]
        },
        versionControlAndDevOps: {
            title: 'DevOps', id: 'devops', items: [
                {id: "git", name: "Git", colour: "#F05032", comfort: 70, icon: faGitAlt},
                {id: "docker", name: "Docker", colour: "#2496ED", comfort: 70, icon: faDocker},
                {id: "linux", name: "Linux", colour: "#FCC624", comfort: 60, icon: faLinux}
            ]
        },
        marketingAndSEO: {
            title: 'Online', id: 'online', items: [
                {id: "seo", name: "SEO", colour: "#32CD32", comfort: 75, icon: faSearchDollar},
                {id: "online-marketing", name: "Online Marketing", colour: "#FF4500", comfort: 55, icon: faAd}
            ]
        }
    }

    return <div style={{margin: '15px 0', border: '1px solid black', borderRadius: '10px', padding: '20px'}}>
        <h2>Skills</h2>
        <div className={styles.skills}>
            {Object.keys(skills).map((key) => {

                return <SkillSet title={skills[key].title} key={skills[key].id} id={skills[key].id}>
                    {skills[key].items.map((item) => {

                        return <Skill comfortLevel={item.comfort} key={item.id} colour={item.colour}>
                            <FontAwesomeIcon color={item.colour} icon={item.icon}/> {item.name}
                        </Skill>

                    })}
                </SkillSet>

            })}
        </div>
    </div>;
}

export default Skills;
