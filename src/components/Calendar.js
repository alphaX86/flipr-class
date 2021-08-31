import React, { Component } from 'react'
import "../css/dashboard.css"

export default class Calendar extends Component {
    render() {
        return (
            <div>
                <iframe title="calendar" class="size" src="https://calendar.google.com/calendar/embed?src=frknm2k9bh7ig7m6r9qmf62btc%40group.calendar.google.com&ctz=Asia%2FKolkata"></iframe>
            </div>
        

        )
    }
}
