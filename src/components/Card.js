import React from 'react';
import './Card.css';

function Card({ ticket, user }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            <img src={user.avatar} alt={user.name} />
            <span className={`status-dot ${user.available ? 'available' : ''}`}></span>
          </div>
        )}
      </div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-tags">
        <div className="priority-tag">
          {ticket.priority === 4 && '⚡'}
          {ticket.priority === 3 && '🔴'}
          {ticket.priority === 2 && '🟡'}
          {ticket.priority === 1 && '🟢'}
          {ticket.priority === 0 && '⚪'}
        </div>
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            ⚪ {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;