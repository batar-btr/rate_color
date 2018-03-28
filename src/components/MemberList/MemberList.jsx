import React, { Component } from 'react'
import Member from './Member/Member'
import axios from 'axios'
import './MemberList.css'

// const getFakeMembers = count => new Promise((resolves, rejects) => {
//     const api = `https://api.randomuser.me/?nat=US&results=${count}`
//     const request = new XMLHttpRequest()
//     request.open('GET', api)
//     request.onload = () => (request.status === 200) ?
//         resolves(JSON.parse(request.response).results) :
//         rejects(Error(request.statusText))
//     request.onerror = err => rejects(err)
//     request.send()
// })

class MemberList extends Component {
    state = {
        members: [],
        loading: false,
        error: null
    }

    componentWillMount() {
        this.setState({ loading: true })
        axios.get(`https://api.randomuser.me/?nat=US&results=${this.props.count}`)
            .then(members => {
                console.log(members.data.results)
                this.setState({ members: members.data.results, loading: false })
            })
            .catch(error => {
                this.setState({ error })
            })
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('[MEMBER LIST] --- ComponentWillUpdate');
    }

    removePerson = id => {
        console.log(id)
        const members = this.state.members.filter(person => person.id.value !== id)
        this.setState({ members })
    }
    render() {
        const { members, loading, error } = this.state
        return (
            <div className="MemberList">
                {loading ? <span>Loading members .....</span>
                    : members.length ?
                        members.map((user, i) => <Member key={i} {...user} remove={() => this.removePerson(user.id.value)} />) : <span>'0' Members loaded...</span>}
                {(error) ? <p>Error Loading Members: error</p> : ""}
            </div>
        )
    }
}

export default MemberList;