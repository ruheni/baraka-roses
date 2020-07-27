import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function SideBar() {

  return (
    <div className="SideBar">
      <div className="d-flex" id="wrapper">

        {/* Sidebar */}
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
            <div className="bg-dark border-right" id="sidebar-wrapper">
              <div className="sidebar-heading text-danger">Baraka Brand</div>
              <div className="list-group list-group-flush">
                <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Orders</a>
                <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Customers</a>
                <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Agents</a>
                <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Products</a>
                <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Help</a>
                <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Settings</a>
              </div>
            </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
          { /* /#sidebar-wrapper */}

        {/* Page Content */}
        <div id="page-content-wrapper">

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
            {/*<Button className="btn btn-primary" id="menu-toggle">Toggle Menu</Button>*/}
            <Button className="toggleBtn" color="primary" id="toggler" style={{ marginBottom: '1rem', marginTop: '1rem' }}>Menu </Button>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Notifications <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Settings</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container-fluid">
            <h1 className="mt-4">Simple Sidebar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel laborum quo quos consectetur, pariatur iste adipisci provident aspernatur corrupti laudantium possimus omnis libero minus tempore ea voluptatem totam molestiae!.</p>
            <p>More Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, repellat! Eum voluptatum ratione animi consectetur a et quibusdam explicabo odit voluptates sapiente laborum corrupti hic, facilis quo ipsam reiciendis voluptatibus!</p>
          </div>
        </div>
  { /*/#page-content-wrapper*/}

        </div>
      { /*/#wrapper */}

       
    </div>
  );
}

export default SideBar;
