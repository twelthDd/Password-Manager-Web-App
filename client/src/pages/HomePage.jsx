
import readItemsRequest from '../api/readItemsRequest'
import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'
import ItemItem from '../components/ItemItem'
import CreateItemForm from '../components/CreateItemForm'

const HomePage = () => {

  const {isLoading, data:items} = useQuery('items', readItemsRequest)


  return (
    <>
    <h1>Password Manager</h1>
    <CreateItemForm />
      {isLoading ? (
        <ClipLoader size={150} />
      ) : ( 
        items.map(item => (
          <ItemItem key={item._id} item={item} />
    )))}
    </>
  )
}

export default HomePage