import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuS extends Component {
    render() {
        return (
            <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="/dashboard-student" className="brand-link">
      <img src="dist/img/logo.PNG"  className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Virtual Classroom</span>
      
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/human_logo.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">User</a>
        </div>
      </div>
      
     
          
          <li className="nav-item">
            <a href="/student-class">
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                Classes
                <span className="badge badge-info right"></span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/student-test">
              <i className="nav-icon far fa-image" />
              <p>
                Tests
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/student-assess">
              <i className="nav-icon fas fa-columns" />
              <p>
                Assignments
              </p>
            </a>
          </li>
          
        
      
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
