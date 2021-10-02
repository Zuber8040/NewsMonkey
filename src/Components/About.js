import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
<div className="about-us d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">NewsMonkey</h5>
                    <h6 className="card-subtitle mb-2 text-muted">News </h6>
                    <p className="card-text">It is a news Based website which fetch Fresh News from NewsApi </p>
                    <a href="/"  target="_blank"  className="card-link">Github</a>
                    <a href="/" className="card-link">Lin</a>
                </div>
        </div>
</div>

</div>
        )
    }
}
