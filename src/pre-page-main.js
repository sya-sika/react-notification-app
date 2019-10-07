import React from 'react'
import ReactDOM from 'react-dom'
import Toast from 'react-bootstrap/toast'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const FirstNav = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a href="./"><h4 className="navbar-brand col-1 py-2">Title</h4></a>
            <a href="#" className="nav-item nav-link text-light offset-1">Home</a>
            <a href="#" className="nav-item nav-link text-light">My-Tasks</a>
        </nav>
        <Container>
            <Row>
                <Col><Comment /></Col>
            </Row>
        </Container>
        </div>
    )
}

const Comment = () => {
    return(
        <div style={{position: "relative",
        minHelght: '200px',}}>
            <div style={{position: "absolute",
        top: 0,
        right: 0}}>
        <Toast>
            <Toast.Header>
                <img data-src="holder.js/20x20?text=%20" className="rounded mr-2" />
                <strong>Bot01</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>please get up 7:30 am tomorrow!</Toast.Body>
        </Toast>
        </div>
        </div>
                    )
}

ReactDOM.render(
    <FirstNav />,
    document.getElementById('root')
)