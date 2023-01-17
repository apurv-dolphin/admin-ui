import React from 'react';
import "../Color/color.css";

export default function Color() {
  return (
    <div className='card-page'>
      <div className='color-headers'>
        <h1>Color Utilities</h1>
        <p className='color-headers-para'>
          Bootstrap's default utility classes can be found on the official Bootstrap Documentation page.
          The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.
        </p>
      </div>
      <div className='conatainer'>
        <div className="button-Page-container">
          <div className="button-group">
            <div className="card-section-header py-3">
              Custom Text Color Utilities
            </div>
            <div className="card-section-body">
              <div>
                <p className='text bg-dark'>.text-gray-100</p>
                <p className='text bg-dark'>.text-gray-200</p>
                <p className='text bg-dark'>.text-gray-300</p>
                <p className='text bg-dark'>.text-gray-400</p>
                <p className='text disable'>.text-gray-500</p>
                <p className='text'>.text-gray-600</p>
                <p className='text gray-700'>.text-gray-700</p>
                <p className='text gray-700'>.text-gray-800</p>
                <p className='text gray-700'>.text-gray-900</p>
              </div>
            </div>
          </div>
          <div className="button-group">
            <div className="card-section-header py-3">
              Custom Font Size Utilities
            </div>
            <div className="card-section-body">
              <p className='xs'>
                .text-xs
              </p>
              <p className='large'>
                .text-lg
              </p>
            </div>
          </div>
        </div>
        <div className="button-Page-container">
          <div className="button-group">
            <div className="card-section-header py-3">
              Custom Background Gradient Utilities
            </div>
            <div className="card-section-body">
              <div className='bg-gradient primary'>.bg-gradient-primary</div>
              <div className='bg-gradient secondary'>.bg-gradient-primary</div>
              <div className='bg-gradient success'>.bg-gradient-primary</div>
              <div className='bg-gradient info'>.bg-gradient-primary</div>
              <div className='bg-gradient warning'>.bg-gradient-primary</div>
              <div className='bg-gradient danger'>.bg-gradient-primary</div>
              <div className='bg-gradient light'>.bg-gradient-primary</div>
              <div className='bg-gradient dark'>.bg-gradient-primary</div>
            </div>
          </div>
        </div>
        <div className="button-Page-container">
          <div className="button-group">
            <div className="card-section-header py-3">
              Custom Grayscale Background Utilities
            </div>
            <div className="card-section-body">
              <div className='text gray-100'>.bg-gray-100</div>
              <div className='text gray-200'>.bg-gray-200</div>
              <div className='text gray-300'>.bg-gray-300</div>
              <div className='text gray-400'>.bg-gray-400</div>
              <div className='text gray-500'>.bg-gray-500</div>
              <div className='text gray-600'>.bg-gray-600</div>
              <div className='text grays-700'>.bg-gray-700</div>
              <div className='text gray-800'>.bg-gray-800</div>
              <div className='text gray-900'>.bg-gray-900</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
