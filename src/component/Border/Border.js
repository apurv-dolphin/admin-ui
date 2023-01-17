import React from 'react';
import "../Border/border.css"

export default function Border() {
  return (
    <div className='card-page'>
      <div className='color-headers'>
        <h1>Border Utilities</h1>
        <p className='color-headers-para'>
          Bootstrap's default utility classes can be found on the official Bootstrap Documentation page.
          The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.
        </p>
      </div>
      <div className='conatainer'>
        <div className="button-Page-container">
          <div className="button-group spacing">
            <div className="card-section-body primary-border">
              <div className='border-body'>
                .border-left-primary
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body secondary-border">
              <div className='border-body'>
                .border-left-secondary
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body success-border">
              <div className='border-body'>
                .border-left-success
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body info-border">
              <div className='border-body'>
                .border-left-info
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body warning-border">
              <div className='border-body'>
                .border-left-warning
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body danger-border">
              <div className='border-body'>
                .border-left-danger
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body dark-border">
              <div className='border-body'>
                .border-left-dark
              </div>
            </div>
          </div>
        </div>
        <div className="button-Page-container">
          <div className="button-group spacing">
            <div className="card-section-body primary-bottom-border">
              <div className='border-body'>
                .border-bottom-primary
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body secondary-bottom-border">
              <div className='border-body'>
                .border-bottom-secondary
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body success-bottom-border">
              <div className='border-body'>
                .border-bottom-success
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body info-bottom-border">
              <div className='border-body'>
                .border-bottom-info
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body warning-bottom-border">
              <div className='border-body'>
                .border-bottom-warning
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body danger-bottom-border">
              <div className='border-body'>
                .border-bottom-danger
              </div>
            </div>
          </div>
          <div className="button-group spacing">
            <div className="card-section-body dark-bottom-border">
              <div className='border-body'>
                .border-bottom-dark
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
