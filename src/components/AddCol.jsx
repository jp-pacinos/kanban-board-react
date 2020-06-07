import React from 'react'
import ColPlain from 'components/ColPlain'
import ColHeader from 'components/ColHeader'
import ColInput from 'components/ColInput'

const AddCard = ({ onAddCard }) => {
  return (
    <ColPlain>
      <ColHeader title="New column" />
      <ColInput onSubmit={onAddCard} placeholder="+ Add column" />
    </ColPlain>
  )
}

export default React.memo(AddCard)
