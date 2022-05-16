import { Container, Row } from 'react-bootstrap'
import Highlighter from "react-highlight-words";    
import { Image } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default function Robot(props) {
    return (
        <div className='card-bravado'>
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
                    <h3 className='name'>
                        <Highlighter
                            searchWords={[props.highlighted]}
                            highlightClassName="highlighted"
                            textToHighlight={props.name}
                        />
                    </h3>

                    <span className='title'>
                        <Highlighter
                            searchWords={[props.highlighted]}
                            highlightClassName="highlighted"
                            textToHighlight={props.title}
                        />
                    </span><br></br>
                    
                    <span className='address'>
                        <Highlighter
                            searchWords={[props.highlighted]}
                            highlightClassName="highlighted"
                            textToHighlight={props.address}
                        />
                    </span><br></br>

                    <a className='action'>Skip</a>

                    <span className='email'>
                        <Highlighter
                            searchWords={[props.highlighted]}
                            highlightClassName="highlighted"
                            textToHighlight={props.email}
                        />
                    </span>
                </Col>
            </Row>
        </div>
    )
}