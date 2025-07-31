import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/ZerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{ height: "280px", width: "280px", objectFit: "contain" }}/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" alt="Sensibull Logo" style={{ height: "280px", width: "280px", objectFit: "contain" }}/>
                    <p className="text-small text-muted">Options trading made simple</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/tijori.svg" alt="Tijori Logo" style={{ height: "280px", width: "280px", objectFit: "contain" }}/>
                    <p className="text-small text-muted">Simplified research insights</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streak-logo.png" alt="Streak Logo" 
                    style={{ height: "280px", width: "280px", objectFit: "contain" }}
                    />
                    <p className="text-small text-muted">Strategy automation platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png" alt="Smallcase Logo" style={{ height: "280px", width: "280px", objectFit: "contain" }}/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png" alt="Ditto Logo" style={{ height: "280px", width: "280px", objectFit: "contain" }}/>
                    <p className="text-small text-muted">Insurance made simple</p>
                </div>
                
                <div className="col-12 mt-4">
                    <button
                        className="p-2 btn btn-primary fs-5 mb-5"
                        style={{ width: "20%" }}
                    >
                        Signup Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Universe;
