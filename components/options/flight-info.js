import React from 'react';
import InputTwo from '~/components/atoms/input';
import {observer} from 'mobx-react'

export default observer(props => {
  return (
    <div>
      <div>
        <InputTwo
          className="input-two"
          id="flight-number"
          name="flightNumber"
          onFieldChange={props.onFieldChange}
          value={props.flightNumber}
        />
      </div>
    </div>
  )
})