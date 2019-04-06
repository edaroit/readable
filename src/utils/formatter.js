import { createDate } from 'utils/dates'

export const formatDate = date => {
  if (date === null) return '-'
  return createDate(date, { timezone: 'utc' }).format('ll')
}
