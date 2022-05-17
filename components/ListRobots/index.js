import { useState } from 'react'
import InputComponent from '../Input'
import Robot from './Robot'
import { Scrollbars } from 'react-custom-scrollbars';


function ListRobots({initialScope}) {
    const [query, setQuery]  = useState(String)
    const [robots, setRobots] = useState(initialScope)
    const [selectedRobots, setSelectedRobots] = useState(Array)

    function fetchRobots(query) {
        fetch(`http://localhost:3000/api/robots?query=${query}`)
            .then((res) => res.json())
            .then((data) => {
                const selectedRobotsIds = selectedRobots.map((value, index) => value.id) || Array.new
                
                setRobots(
                    data.filter((value, index) => !selectedRobotsIds.includes(value.id))
                )
            })
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
        <div className='robots-section'>
            <div className='robot-query-input-section'>
                <InputComponent onChangeEvent={addQuery} />
            </div>
            <br />
            <div className='robot-scrolling'>
            <Scrollbars universal renderTrackHorizontal={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>}>
                <div className={(!selectedRobots.length) ? '' : 'selected-robots-section' }>
                    {selectedRobots.map((robot, i) => <Robot {...robot} key={i} highlighted={query} selectRobot={unSelectRobot} selected={true} />)}
                </div>
                <div className={(!robots.length) ? '' : 'unselected-robots-section'} >
                    {robots.map((robot, i) => <Robot {...robot} key={i} highlighted={query} selectRobot={selectRobot} selected={false} />)}
                </div>
            </Scrollbars>
            </div>  
        </div>
    )
}

export default ListRobots 