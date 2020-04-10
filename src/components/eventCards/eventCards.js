import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'antd';
import calendarImg from '../../assets/calendar.svg';
import './eventCards.css';
import moment from 'moment';
import emptyImg from "../../assets/image.svg";



export default function EventCards(props) {
    const {event} = props;
    let {id,name, sold_tickets, date, time, images} = event;
    let eventDate = date+" "+time;
    eventDate = moment(eventDate,"DD-MM-YYYY hh:mm A");
    eventDate = moment(eventDate).format("DD-MM-YYYY hh:mm A");
  return (
    <Card
      bordered={true}
      className="cards-style"
      onClick={() => props.history.push(`/event-details/${id}`)}
      cover={
        <div className="image-status-container">
          <img
            alt="example"
            src={images && images !== "" && images!=="undefined"?images:emptyImg}
            className="cards-cover-style"
            align="center"
          />
        </div>
      }
    >
      <div className="card-desc-grid">
        <div className="event-name">{name}</div>
        <div className="card-desc-flex">
          <div style={{fontSize: '12px'}}>{sold_tickets} Attendies</div>
          <div style={{fontSize: '12px'}}><img src={calendarImg} className="calendar-gap"/>{eventDate}</div>
        </div>
      </div>
    </Card>
  );
 }


EventCards.propTypes = {
    event: PropTypes.object.isRequired,
    history: PropTypes.object,
}