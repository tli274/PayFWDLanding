import "./styles/missionstatement.css"

export function MissionStatement() {
    return (
        <div className="mission-statement">
            <div>
                <h1> Who We Are </h1>
                <span> PayFWDs has the HR technology and resources to help you focus on the things that will grow your business while your employees are taken care of. As a nimble, focused team, we exist to put the human back in human resources support and the personal touch back into your payroll process.</span>
            </div>
            <div className="key-box">
                <div className="key-info">
                    <div className="key-header"> Small Focused Teams </div>
                    <div className="key-message"> Your team gets personal and timely attention </div>
                </div>
                <div className="key-info">
                    <div className="key-header"> Relationship Focused </div>
                    <div className="key-message"> Personal connection to your support team </div>
                </div>
                <div className="key-info">
                    <div className="key-header"> Technical Solutions with a Human Touch </div>
                    <div className="key-message">Solutions that are easy to understand and apply </div>
                </div>
                <div className="key-info">
                    <div className="key-header"> Support with your Business Growth in Mind </div>
                    <div className="key-message"> You can focus on what you do best. </div>
                </div>
            </div>
        </div>
    )
}