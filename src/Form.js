import React from 'react'

class Form extends React.Component {

    state = {
        userName: ''
    }

    handleSubmit = event => {
        event.preventDefault()
    }
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={(e) => this.setState({ userName: e.target.value })}
                    placeholder="Github username"
                />
                <button
                    type="submit"
                >
                    Add card
                </button>
            </form>
        )
    }
}

export default Form