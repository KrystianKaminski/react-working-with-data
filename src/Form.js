import React from 'react'
import axios from 'axios'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Form extends React.Component {

    state = {
        userName: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(response => {
                this.props.onSubmit(response.data)
                this.setState({ userName: '' })
            })
    }

    render() {
        const style = {
            form: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            button: {
                maxWidth: '50%'
            }
        }
        return (
            <form
                onSubmit={this.handleSubmit}
                style={style.form}
            >
                <TextField
                    type="text"
                    value={this.state.userName}
                    onChange={(e) => this.setState({ userName: e.target.value })}
                    placeholder="Github username"
                />
                <RaisedButton
                    type="submit"
                    label="Add card"
                    style={style.button}
                >
                </RaisedButton>
            </form>
        )
    }
}

export default Form