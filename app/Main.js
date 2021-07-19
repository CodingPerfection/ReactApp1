import React from "react"
import ReactDOM from "react-dom"
import FormHandle from "./components/FormHandle"
import EntryForm from "./components/EntryForm"
import Header from "./components/Header"

function MainHandle() {
  return (
    <>
      <Header />
      <EntryForm />
      <FormHandle />
    </>
  )
}

ReactDOM.render(<MainHandle />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
