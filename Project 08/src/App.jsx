import React from 'react'
import DerivedState from './DerivedState'
import Parent from './Lifting State Up/Parent'
import UpdatingObjectsInState from './UpdatingObjectsInState'
import UpdatingArrayInState from './UpdatingArrayInState'

export default function App() {
  return (
    <>
      <DerivedState />
      <Parent />
      <UpdatingObjectsInState />
      <UpdatingArrayInState />
    </>
  )
}
