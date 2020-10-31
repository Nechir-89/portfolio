import React from "react"

// icons
import { CgIfDesign } from 'react-icons/cg'
import { BsFileEarmarkCode } from 'react-icons/bs'

function Tools() {
    return (
        <section className="tool" id="tools">
            <h2>What I Use ?</h2>
            {/* design */}
            <div className="toolsHeading">
                <CgIfDesign />
                <h3 style={{color:'#715401'}}>Design</h3>
            </div>
            <p>
                Building wireframes to meet business goals with an eye to UI design 
                to engage users to the product is what makes up the whole design. <br /> <br />
                I take <strong>UX</strong> principles to draw wireframes by
                pen and paper and translate it to digital wireframe using <strong>Adobe XD</strong>,
                and focus seriously about all details of UI.
            </p>
            {/* development */}
            <div className="toolsHeading">
                <BsFileEarmarkCode />
                <h3 style={{color: '#714001'}}>Development</h3>
            </div>
            <p>
                Libraries like <strong>React</strong> are connecting all 
                three big technologies (HTML, CSS, and JS) into one package.
                <br />
                <br />
                In past when I was working on a project at first I wast looking 
                HTML and CSS, then JS, and later I was looking PHP and MySQL for the back-end.
                but now things have been changed and all technologies are getting 
                enhanced, so now I'm mainly use react for front-end website and 
                web apps.
                <br /> 
                <br />
                with the help of CMSs, libraries, frameworks, and version control 
                systems we will never stuck at our work, I want to name few of them that I use 
                for daily base few of them <strong>SCSS, Bootstrap, JQuery, AJAX, JSON, React JS, 
                WordPress, Markdown, and Git/Githun</strong> for version control.
            </p>
        </section>
    )
}

export default Tools;