import { useState } from 'react'
import InputComponent from '../Input'
import Robot from './Robot'

function ListRobots({initialScope}) {
    const [query, setQuery]  = useState(String)
    const [robots, setRobots] = useState(initialScope)
    const [selectedRobots, setSelectedRobots] = useState(Array)

    function fetchRobots(query) {
        fetch(`https://bravado-api.herokuapp.com/api/robots?query=${query}`)
            .then((res) => res.json())
            .then((data) => setRobots(data) )
    }

    function unSelectRobot(id) {
        let robotsHash = Object.fromEntries(
            selectedRobots.map(e => [e["id"], e])
        )

        let indexOfSelectedRobot = selectedRobots.indexOf(robotsHash[`${id}`])
        setRobots([...robots, selectedRobots[indexOfSelectedRobot]])
        selectedRobots.splice(indexOfSelectedRobot, 1)
    }

    function selectRobot(id) {
        let robotsHash = Object.fromEntries(
            robots.map(e => [e["id"], e])
        )

        let indexOfSelectedRobot = robots.indexOf(robotsHash[`${id}`])
        setSelectedRobots([...selectedRobots, robots[indexOfSelectedRobot]])
        robots.splice(indexOfSelectedRobot, 1)
    }

    function addQuery(value) {
        setQuery(value)
        fetchRobots(query)
    }

    return (
        <div className='teste'>
            <div className='search-input-bravado'>
                <InputComponent keyPress={addQuery} />
            </div>
            <div className='selected-robots'>
                {selectedRobots.map((robot, i) => <Robot {...robot} key={i} highlighted={query} selectRobot={unSelectRobot} selected={true} />)}
            </div>
            <div className='cards-section-bravado'>
                {robots.map((robot, i) => <Robot {...robot} key={i} highlighted={query} selectRobot={selectRobot} selected={false} />)}
            </div>
        </div>
    )
}

export default ListRobots 