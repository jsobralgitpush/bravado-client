import { Row } from 'react-bootstrap'
import Highlighter from "react-highlight-words";    
import { Image } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Experiment, Variant, emitter } from '@marvelapp/react-ab-test';

emitter.defineVariants('AB for link', ['A', 'B'], [50, 50]);

export default function Robot(props) {
    return (
        <div className='robot-card'>
            <Row>
                <Col md={4}>
                    <Image
                        className='robot-avatar'
                        src={props.avatar}
                        width='134px'
                        height='136px'
                    />
                </Col>
                <Col md={8}>
                    <h3 className='robot-name'>
                        <Highlighter
                            searchWords={[props.highlighted]}
                            highlightClassName="highlighted-text"
                            textToHighlight={props.name}
                        />
                    </h3>

                    <span className='robot-title'>
                        <Highlighter
                            searchWords={[props.highlighted]}
                            highlightClassName="highlighted-text"
                            textToHighlight={props.title}
                        />  
                    </span><br></br>
                    
                    <span className='robot-address'>
                        <Highlighter
                            searchWords={[props.highlighted]}
                            highlightClassName="highlighted-text"
                            textToHighlight={props.address}
                        />
                    </span><br></br>

                    <Experiment name="A-B for link">
                        <Variant id="A">
                            <a className='toogle-selection-robot' onClick={(e) => {props.selectRobot(props.id)}}>
                                {(props.selected) ? "SKIP" : "MARK AS SUITABLE" }
                            </a>
                        </Variant>
                        <Variant id="B">
                            <a className='toogle-selection-robot' onClick={(e) => {props.selectRobot(props.id)}}>
                                {(props.selected) ? "UNSELECT" : "SELECT" }
                            </a>
                        </Variant>
                    </Experiment>


                    <span className='robot-email'>
                        <Highlighter
                            searchWords={[props.highlighted]}
                            highlightClassName="highlighted-text"
                            textToHighlight={props.email}
                        />
                    </span>
                </Col>
            </Row>
        </div>
    )
}