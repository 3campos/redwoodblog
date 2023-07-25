import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form>
        <label>Name</label>
        <TextField name="name" />

        <label>Email</label>
        <TextField name="email" />

        <label>Message</label>
        <TextAreaField name="message" />

        <Submit>Send Message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
