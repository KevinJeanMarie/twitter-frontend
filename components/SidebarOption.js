import React from "react";
import styled from 'styled-components';

const SidbarOption = styled.div`
.sidebarOption {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    /* background-color: red; */
} 

.sidebarOption:hover {
    background-color: rgb(228, 224, 224);
    border-radius: 30px;
    color: rgb(32, 180, 238)
}

.sidebarOption h2 {
    font-weight: 600;
    font-size: 17px;
}

/* .align {
    display: flex;
   
} */

/* .sidebarOption--active {
    color: red
} */

`


//(a faire...) --> essayer de mettre les icones de sidebar.js dans la fonction SidebarOption en paramètre a côté de text
// pour que les icones s'affichent a coter du texte quand je fais un display flex
function SidebarOption({active, text, Icon}) {
    return (
        <SidbarOption>
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <h2>{Icon}&ensp;&ensp;{text}</h2>
        </div>
        </SidbarOption>
    )
}

export default SidebarOption;