import React from 'react'
import { useQuery, gql } from '@apollo/client';

const getProducts = gql`
  query getProducts{
    products{
      color
      id
    }
  }
`

export default function Dashboard(){
  const { loading, error, data } = useQuery(getProducts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
      <>
        <p>Products right here : </p>
        {data.products.map(({ id, color }: any) => (
            <div key={id}>
            <p>
                {id}: {color}
            </p>
            </div>
        ))}
      </>
    );
}