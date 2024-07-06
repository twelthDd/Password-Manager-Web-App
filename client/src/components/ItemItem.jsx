/* eslint-disable react/prop-types */

// import PropTypes from 'prop-types';
import { useQueryClient, useMutation } from 'react-query';
import { debounce } from 'lodash';
import updateItemRequest from '../api/updateItemRequest';
import deleteItemRequest from '../api/deleteItemRequest';
import { useCallback, useEffect, useState } from 'react';

const ItemItem = ({item}) => {
  const [name, setName] = useState(item.name)
  const [username, setUsername] = useState(item.username)
  const [password, setPassword] = useState(item.password)
  const [website, setWebsite] = useState(item.website)
  const [favorite, setFavorite] = useState(item.favorite)


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

  const debouncedUpdateItem = useCallback(debounce(updateItem, 600), [updateItem]);

  useEffect(() => {
    debouncedUpdateItem({
      ...item,
      name,
      username,
      password,
      website,
      favorite
    });
  }, [name, username, password, website, favorite, debouncedUpdateItem, item]);

  return (
    <div key={item}>
      <label htmlFor="nameInput">name: </label>
      <input id={"nameInput"} value={name} type="text" onChange={(e) => { setName(e.target.value)}}/>
      <label htmlFor="usernameInput">username: </label>
      <input id={"usernameInput"} value={username} type="text" onChange={(e) => { setUsername(e.target.value)}}/>
      <label htmlFor="passwordInput">password: </label>
      <input id={"passwordInput"} value={password} type="text" onChange={(e) => { setPassword(e.target.value)}}/>
      <label htmlFor="websiteInput">website: </label>
      <input id={"websiteInput"} value={website} type="text" onChange={(e) => { setWebsite(e.target.value)}}/>
      <label htmlFor="favoriteCheckbox">Favorite: </label>
      <input id="favoriteCheckbox"checked={favorite} type="checkbox" onChange={() => setFavorite(!favorite)}/>
    <button onClick={() => deleteItem(item)} className='deleteButton'>Delete Item</button>
    
  </div>
  )
}

export default ItemItem;

// ItemItem.propTypes = {
//   item: PropTypes.object.isRequired
// };
