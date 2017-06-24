import {useStrict, action, observable} from "mobx";

// Sets this value globally
useStrict(true);

const appState = observable({
  displayFlightInfo: true,
  showFlightInfo: action('showFlightInfo', function (show) {
    this.displayFlightInfo = show
  })
});

export default appState;