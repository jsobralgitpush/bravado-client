import { Form, InputGroup } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'


export default function InputComponent(props) {
    return (
        <Form.Row>
            <Form.Group as={Col}>
                <InputGroup className='robot-query-input-group'>
                    <InputGroup.Prepend>
                        <InputGroup.Text className='robot-query-input-icon' >
                            <AiOutlineSearch/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        className='robot-query-input'
                        onChange={(e) => {props.onChangeEvent(e.target.value)}}
                        type="text"
                        placeholder="Search here.."
                    />
                </InputGroup>
            </Form.Group>
        </Form.Row>
    )
}