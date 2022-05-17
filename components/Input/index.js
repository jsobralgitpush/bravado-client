import { Form, InputGroup } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'


export default function InputComponent(props) {
    return (
        <div className='search-input-bravado'>
            <Form.Row>
                <Form.Group as={Col}>
                    <InputGroup className='search-input'>
                        <InputGroup.Prepend>
                            <InputGroup.Text className='search-icon' >
                                <AiOutlineSearch/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            onKeyPress={(e) => {props.keyPress(e.target.value)}}
                            type="text"
                            placeholder="Search here.."
                        />
                    </InputGroup>
                </Form.Group>
            </Form.Row>
        </div>
    )
}