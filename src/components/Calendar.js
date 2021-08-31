import React, { Component } from 'react'
import "../css/dashboard.css"

export default class Calendar extends Component {
    render() {
        return (
            <div>
                <iframe title="calendar" class="size" src="https://calendar.google.com/calendar/embed?src=1le2ob3kr44gkkpvtksqp0vkvk%40group.calendar.google.com&ctz=Asia%2FKolkata"></iframe>
            </div>
        

        )
    }
}
