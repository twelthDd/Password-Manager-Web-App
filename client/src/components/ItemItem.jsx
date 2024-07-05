/* eslint-disable react/prop-types */

// import PropTypes from 'prop-types';
import { useQueryClient, useMutation } from 'react-query';
import updateItemRequest from '../api/updateItemRequest';
import deleteItemRequest from '../api/deleteItemRequest';

const ItemItem = ({item}) => {

  const queryClient = useQueryClient();

  const {mutate:updateItem} = useMutation((updatedItem) => {
    return updateItemRequest(updatedItem)}, {
    onSettled: () => {
      queryClient.invalidateQueries('items');
  }}) ;


  const {mutate:deleteItem} = useMutation((updatedItem) => {
    return deleteItemRequest(updatedItem)}, {
    onSettled: () => {
      queryClient.invalidateQueries('items');
  }}) ;

  return (
    <div key={item}>
      <label htmlFor="nameInput">name: </label>
      <input id={"nameInput"} value={item.name} type="text" onChange={(e) => { updateItem({...item, name: e.target.value}) }}/>
      <label htmlFor="usernameInput">username: </label>
      <input id={"usernameInput"} value={item.username} type="text" onChange={(e) => { updateItem({...item, username: e.target.value}) }}/>
      <label htmlFor="passwordInput">password: </label>
      <input id={"passwordInput"} value={item.password} type="text" onChange={(e) => { updateItem({...item, password: e.target.value}) }}/>
      <label htmlFor="websiteInput">website: </label>
      <input id={"websiteInput"} value={item.website} type="text" onChange={(e) => { updateItem({...item, website: e.target.value}) }}/>
      <label htmlFor="favoriteCheckbox">Favorite: </label>
      <input id="favoriteCheckbox"checked={item.favorite} type="checkbox" onChange={() => updateItem({...item, favorite: !item.favorite})}/>
    <button onClick={() => deleteItem(item)} className='deleteButton'>Delete Item</button>
    
  </div>
  )
}

export default ItemItem;

// ItemItem.propTypes = {
//   item: PropTypes.object.isRequired
// };
