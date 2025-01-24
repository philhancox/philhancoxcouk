import React from 'react';
import styles from '@/components/Skills/skills.module.css';


function SkillSet({title, children, id}) {
    return <div className={`${styles.skillset} ${styles[id]}`}>
        <h4>{title}</h4>
        <div>
            {children}
        </div>
    </div>;
}

export default SkillSet;
