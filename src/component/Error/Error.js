import React from 'react';
import { Link } from 'react-router-dom';
import "../Error/error.css";

export default function Error() {
  return (
    <div className='card-page'>
      <div className="text-center">
        <div className="error mx-auto" data-text="404">404</div>
        <p class="page-notfound">Page Not Found</p>
        <p class="notfound-discription">It looks like you found a glitch in the matrix...</p>
        <Link to="/">&larr; Back to Dashboard</Link>
      </div>
    </div>
  )
}
