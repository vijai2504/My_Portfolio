import React, { Component } from 'react';

export class Skills extends Component {
    render() {
        return (
            <div>
                <section id="skills" className="skills section-bg">
                <div className="container">

                    <div className="section-title">
                    <h2>Skills</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row skills-content">

                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="progress">
                        <span className="skill">HTML <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">CSS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">BOOTSTRAP <i className="val">80%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">JavaScript <i className="val">80%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                        <div className="progress">
                        <span className="skill">REACT JS <i className="val">80%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">NODE JS <i className="val">60%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">MONGO DB<i className="val">50%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="progress">
                        <span className="skill">Photoshop <i className="val">60%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

export default Skills;