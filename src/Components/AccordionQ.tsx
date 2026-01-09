import { Component } from 'react'
import { Accordion, Icon, Segment, type AccordionTitleProps, } from 'semantic-ui-react'
import "./AccordionQ.css"

type State = {
    activeIndex: number;
};

export default class AccordionExampleInverted extends Component<{}, State> {
    state: State = { activeIndex: 0 };

    handleClick = (
        _: React.MouseEvent,
        titleProps: AccordionTitleProps
    ) => {
        const { index } = titleProps;

        // Convert index (string | number | undefined) → number
        const numericIndex = typeof index === "number" ? index : Number(index ?? -1);

        const { activeIndex } = this.state;
        const newIndex = activeIndex === numericIndex ? -1 : numericIndex;

        this.setState({ activeIndex: newIndex });
    };


    render() {
        const { activeIndex } = this.state

        return (
            <div style={{ marginLeft: "8%", marginRight: "3%", marginTop: "5%", marginBottom: "5%" }}>
                <Segment inverted>
                    <Accordion inverted>
                        <Accordion.Title  className='who'
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            Who am I?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <p>
                                I’m a Tunisian Full Stack Engineer passionate about building scalable web applications and integrating AI-driven solutions. I thrive on solving complex problems and turning ideas into functional 
                            </p>
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                           What makes my work stand out?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <p>
                                I focus on writing clean, maintainable code while designing systems that deliver real user impact. I combine backend efficiency, modern frontend experiences, and AI-enhanced features to create solutions that are robust, innovative, and future-proof.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 2}
                            index={2}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            How do I solve problems?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <p>
                               I approach problems analytically: breaking them into smaller tasks, prototyping solutions, and iterating based on data and feedback. I embrace new technologies and tools that improve efficiency and quality, ensuring my solutions are both effective and sustainable.
                            </p>
                        </Accordion.Content>
                    </Accordion>
                </Segment>
            </div>
        )
    }
}