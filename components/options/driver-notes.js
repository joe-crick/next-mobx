import React from 'react';
import InputTwo from '~/components/atoms/input';
import {observer} from 'mobx-react'

export default observer(props => {
  return (
    <div>
      <div>
        <InputTwo
          className="input-two"
          id="reference-num"
          name="driverNotes.referenceNumber"
          onFieldChange={props.onFieldChange}
          value={props.driverNotes.referenceNumber}
        />
      </div>
    </div>
  )
})