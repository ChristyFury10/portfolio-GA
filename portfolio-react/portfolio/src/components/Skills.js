import React from 'react';
import './Skills.css'


function Skills(props) {

const icon = document.getElementsByClassName("big")
console.log(icon)


function mouseOver(e){
    e.classList.addClass("fa-bounce");
}
function mouseOut(e){
    e.classList.remove("fa-bounce")
}

for (let i = 0; i < icon.length;i ++){
    icon[i].addEventListener("mouseover", mouseOver)
}

for (let i = 0; i < icon.length;i ++){
    icon[i].addEventListener("mouseout", mouseOut)
}


    return (
        <div>
            <div>
                Skills:
                
                <i className="fa-brands fa-js big"></i>
                <i className="fa-brands fa-python big"></i>
                <i className="fa-brands fa-react big"></i>
                <i className="fa-brands fa-node-js big"></i>
                <i className="fa-brands fa-html5 big"></i>
                <i className="fa-brands fa-css3 big"></i>
                <i className="fa-brands fa-bootstrap big"></i>
            </div>

            <div>
                Tools:
                <i className="fa-brands fa-slack big"></i>
                <i className="fa-brands fa-github big"></i>
                <i className="fa-brands fa-trello big"></i>
            </div>


        </div>
    );
}

export default Skills;