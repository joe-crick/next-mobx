import React from 'react'
import createBooking from '~/stores/booking'
import appState from '~/stores/app-state'
import DriverNotes from '~/components/options/driver-notes'
import FlightInfo from '~/components/options/flight-info'
import updateScopedProperty from '~/actions/update-scoped-property'
import {observer} from 'mobx-react'

@observer
export default class Options extends React.Component {

  constructor(props) {
    super(props)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.booking = createBooking()
    this.appState = appState
  }

  onFieldChange(event) {
    const name = event.target.name
    const value = event.target.value
    updateScopedProperty(this.booking, name, value)
    this.hideIfPoop(name, value)
  }

  hideIfPoop(name, value) {
    this.appState.showFlightInfo(!(value === 'poop' && name === 'driverNotes.referenceNumber'))
  }

  render() {
    const flights = this.appState.displayFlightInfo
      ? <FlightInfo
        driverNotes={this.booking}
        onFieldChange={this.onFieldChange}/>
      : '';
    return (
      <div>
        <DriverNotes
          driverNotes={this.booking.driverNotes}
          onFieldChange={this.onFieldChange}/>
        {flights}
      </div>
    );
  }
}