import React from 'react'
import Title from '@components/Title/Title'

class Contact extends React.Component {
  state = {
    email: '',
    text: '',
    sent: false,
    button: 'SEND MESSAGE'
  }

  change = e => this.setState({ [e.target.name]: e.target.value })

  submit = async e => {
    e.preventDefault()
    if (this.state.email && this.state.text) {
      const res = await fetch(
        `./mail.php?email=${this.state.email}&text=${this.state.text}`,
        {
          method: 'GET'
        }
      )
      const json = await res.json()
      if (json.success) {
        this.setState({ button: 'THANKS!' })
      } else {
        this.setState({ button: 'ERROR' })
      }
    }
  }

  render() {
    return (
      <form
        onSubmit={
          this.state.sent ? e => e.preventDefault() : e => this.submit(e)
        }
      >
        <Title text="CONTACT" />
        <p>EMAIL</p>
        <input type="email" name="email" onChange={this.change} required />
        <p>MESSAGE</p>
        <textarea name="text" onChange={this.change} required />
        <button type="submit">{this.state.button}</button>
      </form>
    )
  }
}

export default Contact
