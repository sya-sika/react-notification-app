import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

//参考リンク samurai JS アニメ

class AnimationPage extends Component {
    constructor(props) {
        super(props)
        this.state = {time: 0}
    }

    Count(){
        const Square = document.getElementsByClassName('square').style
        console.log(Square.backgroundColor)
        console.log('動いた')
    }

    /*
    componentDidMount() {
        setInterval(() => this.setState({time: this.state.time+1}), 1000)
    }
    */

    change() {
        this.setState({time: this.state.time+1})
    }


    render(){
        return(
            <div>
            <SquareBlock count={this.state.time} changeTime={() => this.change()} />
            <ClickButton plus={() => this.Count()} />
            </div>
        )
    }
}

class SquareBlock extends Component {
    constructor(props) {
        super(props)
        //this.state = {count: String(this.props.count)}
        this.BlockRefs = React.createRef()
    }
    componentDidMount() {
        setTimeout(() => this.BlockRefs.current.style.backgroundColor = '#ff0000', 1001)
        setInterval(() => this.props.changeTime(),1000)
    }
    render(){
        return(
            <div className="square" ref={this.BlockRefs}>
                <p>{String(this.props.count)}</p>
            </div>
        )
    }
}

SquareBlock.propTypes = {
    count: PropTypes.number.isRequired,
    changeTime: PropTypes.func.isRequired
}

const ClickButton = (props) => {
    return(
        <div>
            <input type="button" value="増加" onClick={() => props.plus()}/>
        </div>
    )
}

ClickButton.propTypes = {
    plus: PropTypes.func.isRequired
}

ReactDOM.render(
    <AnimationPage />,
    document.getElementById('root')
)