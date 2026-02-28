import React from 'react'
import './Experience.css'
import { Progress, Button } from 'semantic-ui-react'
type Props = {}

const Experience: React.FC<Props> = () => {

    const [percent, setPercent] = React.useState(0)
    const data =[
        {
            BarProgress: 20,
            Poste: "Customer Support Advisor — Teleperformance (2021)",
            Description: "Provided customer support for Amazon clients, resolving inquiries and ensuring a high-quality experience."
        },
        {
            BarProgress: 40,
            Poste: "Software Engineering Intern — Manager Partner Software (2022)",
            Description: "Performed automated testing for a banking application using Selenium, ensuring software reliability and quality."
        },
        {
            BarProgress: 60,
            Poste: "Software Engineering Intern — Centre National de l'Informatique (2024)",
            Description: "Worked on a data monitoring and visualization project using Grafana and React, improving system observability."
        },
        {
            BarProgress: 80,
            Poste: "Software Engineering Intern — ArabSoft (2025)",
            Description: "Developed an AI-powered software module generator based on workflow modeling using BPMN, React, Node.js, Supabase, PostgreSQL, and JWT authentication."
        },
        {
            BarProgress: 100,
            Poste: "Open to New Opportunities — 2026",
            Description: "Actively seeking a full-time Software Engineering role to contribute, grow, and build impactful products."
        }
    ]


    const incrementProgress = () => {
        percent >= 100 ? setPercent(0) : setPercent(percent + 20)
    }
    return (
        <div className="full-page-container">
            <div className="centered-container">
                <div className="progress-wrapper">
                    <div className="progress-label">
                        {data.filter((item) => item.BarProgress === percent).map((item, index) => {
                            return (<>
                                <h4 key={index}>{item.Poste}</h4>
                                <h5>{item.Description}</h5>
                            </>)
                        })}
                    </div>
                    <Progress percent={percent} indicating />
                    <Button onClick={incrementProgress}>Show Exp</Button>
                </div>
            </div>
        </div>
    )
}


export default Experience  