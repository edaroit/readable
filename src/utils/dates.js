import moment from 'moment'

export const createDate = (stringDate, options = {}) => {
  if (stringDate === null) return null
  const { timezone = '' } = options
  if (timezone === 'utc') return moment.utc(stringDate)
  return moment(stringDate)
}

export const timestampNow = () => Date.now()
