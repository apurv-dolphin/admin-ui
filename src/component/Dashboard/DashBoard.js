import React from 'react'
import { BsClipboard } from 'react-icons/bs'
import { FaDollarSign } from 'react-icons/fa'
import { FcCalendar } from 'react-icons/fc'
import { TiMessages } from 'react-icons/ti'

export default function DashBoard() {
  return (
    <div className="card-page">
      <div>
        <h1>DashBoard</h1>
      </div>
      <div className="card-section">
        {/* Earnings (Monthly) Card Example */}
        <div className="card">
          <div className="card-bodys">
            <div>
              <div className="card-title">Earnings (Monthly)</div>
              <div className="card-details">$40,000</div>
            </div>
            <div className="card-icon">
              <FcCalendar fontSize={40} />
            </div>
          </div>
        </div>
        {/* Earnings (Annual) Card Example */}
        <div className="card border-left-success">
          <div className="card-bodys">
            <div>
              <div className="card-title text-succes">Earnings (Annual)</div>
              <div className="card-details">$215,000</div>
            </div>
            <div className="card-icon">
              <FaDollarSign fontSize={40} />
            </div>
          </div>
        </div>
        {/* Tasks Card Example */}
        <div className="card border-left-info">
          <div className="card-bodys">
            <div>
              <div className="card-title text-info">Tasks</div>
              <div className="card-details">50%</div>
            </div>
            <div className="card-icon">
              <BsClipboard fontSize={40} />
            </div>
          </div>
        </div>
        {/* Pending Requests Card Example */}
        <div className="card border-left-warning">
          <div className="card-bodys">
            <div>
              <div className="card-title text-warning">Pending Requests</div>
              <div className="card-details">18</div>
            </div>
            <div className="card-icon">
              <TiMessages fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
