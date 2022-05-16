import { useState } from 'react'
import { Form, InputGroup, Col } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import Robot from './Robot'

function ListRobots({initialScope}) {
    const [query, setQuery]  = useState(null)
    const [robots, setRobot] = useState(initialScope)

    function fetchRobots(query) {
        fetch(`http://localhost:3000/api/robots?query=${query}`)
            .then((res) => res.json())
            .then((data) => setRobot(data) )
    }

    return (
        <div className='teste'>
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
                                onKeyPress={(e) => {
                                    setQuery(e.target.value)
                                    fetchRobots(query)
                                }}
                                type="text"
                                placeholder="Search here.."
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
            </div>
            <div className='cards-section-bravado'>
                {robots.map((robot, i) => <Robot {...robot} key={i} highlighted={query} />)}
            </div>
        </div>
    )
}

export default ListRobots