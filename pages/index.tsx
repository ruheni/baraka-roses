import { withApollo } from '../apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'

const Index = () => {
  return (
    <div>
      This is a static page goto{' '}
      <Link href="/">
        <a>dynamic</a>
      </Link>{' '}
    page.
    </div>
  )
}

export default withApollo(Index)
