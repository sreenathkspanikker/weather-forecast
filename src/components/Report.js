import React, { useState, useEffect } from 'react'
import {ListGroup, Row, Col} from 'react-bootstrap'
import { FieldTimeOutlined } from '@ant-design/icons';
import Moment from 'react-moment';
import { getcountryName } from '../middleware';


export const Report = props => {
    const [state, setstate] = useState({})

    useEffect(() => {
        let isLoad = true
        if (isLoad) setstate(props.data !== undefined && props.data)
        return () => {
            isLoad = false
        }
    }, [props])

    return (
        <div className="weather-report">
            {state.city !== undefined && 
                (
                    <React.Fragment>
                        <ListGroup className="list-info">
                            <Row>
                                <Col sm={6}>
                                    <ListGroup.Item><strong>Country Code:</strong><small>{getcountryName(state.city.country)}</small></ListGroup.Item>
                                    <ListGroup.Item><strong>City Name:</strong><small>{state.city.name}</small></ListGroup.Item>
                                </Col>
                                <Col sm={6}>
                                    <ListGroup.Item><strong>Sun Rice:</strong><small><Moment date={state.city.sunrice} format="DD-MM-YYYY" /></small></ListGroup.Item>
                                    <ListGroup.Item><strong>Sun Set:</strong><small><Moment date={state.city.sunset} format="DD-MM-YYYY" /></small></ListGroup.Item>
                                </Col>
                            </Row>
                        </ListGroup>
                        <div className="day-details">
                            <Row>
                                {state.list.map((list, idx)=>{
                                    return (
                                        <Col sm={3} className="mb-3" key={idx}>
                                            <ListGroup>
                                                <ListGroup.Item><img src={`http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`} alt="icon"/></ListGroup.Item>
                                                <ListGroup.Item className="temp"><span>{list.main.temp} <small>C | F</small></span></ListGroup.Item>
                                                <ListGroup.Item><span>{list.weather[0].description}</span></ListGroup.Item>
                                                <ListGroup.Item><FieldTimeOutlined /><small>{list.dt_txt}</small></ListGroup.Item>
                                                <ListGroup.Item><strong>Humidity</strong><small>{list.main.humidity}%</small></ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </React.Fragment>
                )
            }
        </div>
    )
}
