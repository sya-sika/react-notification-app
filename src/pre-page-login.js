import React from 'react'
import ReactDOM from 'react-dom'
import InputGroup from 'react-bootstrap/inputgroup'
import FormControl from 'react-bootstrap/formcontrol'
import Button from 'react-bootstrap/button'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const LoginForm = () => {
    return(
        <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a href="./"><h4 className="navbar-brand col-1 py-2">Title</h4></a>
        </nav>
            <div className="container offset-4 mt-5">
                <p>Type your Email-address.</p>
                <InputGroup className="col-5">
                    <FormControl placeholder="example@gmail.com"></FormControl>
                </InputGroup>
                <p>Type your Password.</p>
                <InputGroup className="col-5">
                    <FormControl placeholder="password"></FormControl>
                </InputGroup>
                <p>Retype your Password.</p>
                <InputGroup className="col-5">
                    <FormControl placeholder="password"></FormControl>
                </InputGroup>
                <Button className="mt-2 col-3 offset-1" variant="primary">Login!</Button>
            </div>
        </div>
    )
}

ReactDOM.render(
    <LoginForm />,
    document.getElementById('root')
)