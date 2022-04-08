import * as contenful from 'contentful'

export const client = contenful.createClient({
  space: process.env.REACT_APP_SPACE_ID as string,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN as string,
});