import React from 'react';

export default function Project(props) {
    const {projectIndex, projectName, projectImg} = props;
    const [hidden, setHidden] = React.useState(true);
    return (
        <div className="bg-fixed flex bg-slate-600 aspect-square m-1" style="" onMouseEnter={()=>setHidden(false)} onMouseLeave={()=>setHidden(true)}>
            <div className="hover:bg-slate-900 hover:bg-opacity-70 flex relative w-full h-full">
                <p className={`m-auto text-white font-medium ${hidden ? 'hidden' : ''}`}>{projectName}</p>
            </div>
        </div>
    )
}