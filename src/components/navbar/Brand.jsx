import React from 'react'
import { Link } from 'react-router-dom';

const Brand = (props) => (
    <Link to='/home' style={{ textDecoration: 'none' }}>
        <svg width="28" height="40" viewBox="0 0 28 40">
            <g fill="#FEFEFE" fillRule="evenodd">
                <path d="M22.704.712v22.02h-3.445L7.894 11.13v24.472L12.057 40V21.48l5.512 5.627h9.299V.712z"/>
                <path d="M4.162 31.664V5.06h3.476l11.394 11.634V.713h-4.163v5.63L9.327.685H0v26.58z"/>
            </g>
        </svg>
    </Link>

)

export default Brand