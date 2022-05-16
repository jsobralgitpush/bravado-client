import { Form, InputGroup } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'


export default function InputComponent() {
    return (
        <div className='search-input-bravado'>
            <Form.Row>
                <Form.Group as={Col}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <AiOutlineSearch />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            onKeyPress={(e) => fetchRobots()}
                            type="text"
                            placeholder="Search here.."
                        />
                    </InputGroup>
                </Form.Group>
            </Form.Row>
        </div>
    )
}