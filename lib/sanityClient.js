import sanityClient from '@sanity/client'

export const client = sanityClient({ 
  projectId: '34r28d7v',
  dataset: 'production',
  apiVersion: '2022-05-12',
  token:
    'sk1DNuW7TKAhDMDcMOPgv5xo7LIzDWrSMYNhKBTvQhi4y3zxIPWyojTwb0aX4tDMgxzJLrEhUq2nFz7PvnR49ZYioe6RUNfF7t0B3A7e6yFfN7lrYqmDJVmCCFYRlWDUB0prRbxc5lHwq7kflPSWOgZlproJhMMZIsP5vYmYRLmHvRiPl0Vn',
  useCdn: false,
})