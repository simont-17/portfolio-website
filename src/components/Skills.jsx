import Chart from "./Chart"

export default function Skills() {
    return (
        <section className="skills-container" id="skills">
            <div className="skills-head">
                <h1>Technologies</h1>
            </div>
            <div className="bottom-container">
                <div className="skills-sidebar">
                    <div className="skills-grid">
                        <div className="category">
                            <h3>Backend</h3>
                            <ul>
                               <li>Python</li>
                               <li>SQL</li>
                            </ul>
                        </div>

                        <div className="category">
                            <h3>Frontend</h3>
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className="category">
                            <h3>Tools</h3>
                            <ul>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="chart-container">
                    <Chart />
                </div>
            </div>
        </section>
    );
}
