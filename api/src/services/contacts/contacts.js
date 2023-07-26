import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact = ({ input }) => {
  validate(input.email, 'email', { email: true })
  // validate method parameters: field to check; name of the field on the frontend; and how you want to validate
  return db.contact.create({
    data: input,
  })
}

export const updateContact = ({ id, input }) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}
