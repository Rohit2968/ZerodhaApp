import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(260, 260, 260)"}}>
            <div className='container border-top mt-5'>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src='media/images/logo.svg' style={{ width: "50%" }} />
                        <p className='text-muted' style={{fontFamily: '"Inter", Serif'}}>
                            &copy; 2010 - 2025, Zerodha Broking Ltd. <br></br>
                            All rights reserved.
                        </p>
                        
                    </div>

                    <div className='col text-muted'>
                        <p className='fw-bold'>Company</p>
                        <div className='d-flex flex-column gap-2' style={{fontSize: "13px", fontWeight: "bolder", opacity: "0.7", width: "100%"}}>
                            <a href='' className='text-decoration-none text-dark'>About</a>
                            <a href='' className='text-decoration-none text-dark'>Products</a>
                            <a href='' className='text-decoration-none text-dark'>Pricing</a>
                            <a href='' className='text-decoration-none text-dark'>Referral programme</a>
                            <a href='' className='text-decoration-none text-dark'>Careers</a>
                            <a href='' className='text-decoration-none text-dark'>Zerodha.tech</a>
                            <a href='' className='text-decoration-none text-dark'>Open source</a>
                            <a href='' className='text-decoration-none text-dark'>Press & media</a>
                            <a href='' className='text-decoration-none text-dark'>Zerodha Cares (CSR)</a>
                        </div>
                    </div>

                    <div className='col text-muted'>
                        <p className='fw-bold'>Support</p>
                        <div className='d-flex flex-column gap-2' style={{fontSize: "13px", fontWeight: "bolder", opacity: "0.7", width: "100%"}}>
                            <a href='' className='text-decoration-none text-dark'>Contact us</a>
                            <a href='' className='text-decoration-none text-dark'>Support portal</a>
                            <a href='' className='text-decoration-none text-dark'>Z-Connect blog</a>
                            <a href='' className='text-decoration-none text-dark'>List of charges</a>
                            <a href='' className='text-decoration-none text-dark'>Downloads & resources</a>
                            <a href='' className='text-decoration-none text-dark'>Videos</a>
                            <a href='' className='text-decoration-none text-dark'>Market overview</a>
                            <a href='' className='text-decoration-none text-dark'>How to file a complaint?</a>
                            <a href='' className='text-decoration-none text-dark'>Status of your complaints</a>
                        </div>
                    </div>

                    <div className='col text-muted'>
                        <p className='fw-bold'>Account</p>
                        <div className='d-flex flex-column gap-2' style={{fontSize: "13px", fontWeight: "bolder", opacity: "0.7", width: "100%"}}>
                            <a href='' className='text-decoration-none text-dark'>Open an account</a>
                            <a href='' className='text-decoration-none text-dark'>Fund transfer</a>
                        </div>
                    </div>
                </div>
                <div className='mt-5 text-muted' style={{ fontSize: "12px", fontFamily: '"Inter", Serif'}}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>


                <div
                    className="footer-graveyard-links text-center mb-4"
                    style={{ fontSize: "13px", fontWeight: "bolder", opacity: "0.7", width: "100%" }}
                >
                    <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-4 m-0">
                        <li>
                            <a href="https://nseindia.com" className="text-decoration-none text-dark text-muted">
                                NSE
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.bseindia.com/"
                                className="text-decoration-none  text-muted"
                            >
                                BSE
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none  text-muted">
                                MCX
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none  text-muted">
                                Terms &amp; conditions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none  text-muted">
                                Policies &amp; procedures
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none  text-muted">
                                Privacy policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none  text-muted">
                                Disclosure
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none  text-muted">
                                For investor's attention
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none  text-muted">
                                Investor charter
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer >
    );
}

export default Footer;