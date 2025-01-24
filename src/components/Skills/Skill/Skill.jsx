import React from 'react';
import StyledBox from "@/components/StyledBox";

function Skill({comfortLevel, colour, children}) {
    return <StyledBox colour={colour} percentage={comfortLevel}>
        {children}
    </StyledBox>;
}

export default Skill;
