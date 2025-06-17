import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Home = () => {
  return (
    <>
        <header>
            <div className='container'>
                <Navbar expand="lg py-3">
                    <Navbar.Brand href="#home" className='logo'> 
                        <span>UrbanEdge </span>
                        Constructions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>About Us</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Projects</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Contact Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
        <main>
            <section className='section-1'>
                <div className='hero'>
                    <div className='container-fluid'>
                        <div className='text-center'>
                            <span>Welcome Amazing Constructions</span>
                            <h1>Crafting dreams with <br /> precision and excellence.</h1>
                            <p>We excel at transforming visions into reality through outstanding craftsmanship and  <br />precise attention to detail. With years of experience and a dedication to quality.</p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
        <footer>

        </footer>
    </>
  )
}

export default Home