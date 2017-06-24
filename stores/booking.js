import {observable} from "mobx";

function createBooking() {
  return observable({
    flightNumber: '',
    frequentFlier: '',
    frequentFlierNumber: '',
    driverNotes: {
      pickupSign: '',
      referenceNumber: 'hoo-haa!',
      specialRequests: ''
    },
    isThirdParty: false,
    thirdPart: {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  })
}

export default createBooking