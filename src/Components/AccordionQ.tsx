import { Component } from 'react'
import { Accordion, Icon, Segment, Button, type AccordionTitleProps, } from 'semantic-ui-react'
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
                                I’m a Tunisian Full Stack Engineer passionate about building scalable web applications and integrating AI-driven solutions. I thrive on solving complex problems and turning ideas into functional realities. 
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
                                I write maintainable, well-tested TypeScript and React , even Java 😉, code and design systems that deliver measurable user value. I break problems into small, testable components and prioritize performance optimization 
                            </p>
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 2}
                            index={2}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            Have a look at my Cv 
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <div style={{ marginTop: 12 }}>
                                {/* The CV is placed in the public folder as /cv-AnasBenRaies-fr.pdf */}
                                <Button
                                    color='red'
                                    as="a"
                                    href="/cv-AnasBenRaies-fr.pdf"
                                    download
                                    icon="download"
                                    content="Download CV"
                                    aria-label="Download CV (PDF)"
                                />
                            </div>
                        </Accordion.Content>
                    </Accordion>
                </Segment>
            </div>
        )
    }
}