import Chart from "./Chart"

export default function Skills() {
    return(
        <section className="skills-container" id="skills">
            <div className="skills-head">
                <h1>Technologies</h1>
            </div>
            <div className="bottom-container">
                <div className="skills-sidebar">
                    <div className="languages-container">
                        <h3>Frontend</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div className="backend-container">
                        <h3>Backend</h3>
                        <ul>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="tools-container">
                        <h3>Tools</h3>
                        <ul>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
                <div className="chart-container">
                    <Chart/>
                </div>
            </div>
            
        </section>
)
}
