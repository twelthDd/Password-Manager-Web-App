import { useQueryClient, useMutation } from 'react-query';
import createItemRequest from '../api/createItemRequest';
import { useState } from 'react';
// import { set } from 'mongoose';
const CreateItemForm = () => {

  const [newName, setNewName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newWebsite, setNewWebsite] = useState('');
  const [newFavorite, setNewFavorite] = useState(false);
  

    const queryClient = useQueryClient();

    const {mutate:createItem} = useMutation((updatedItem) => {
      return createItemRequest(updatedItem)}, {
      onSettled: () => {
        queryClient.invalidateQueries('items');
    }}) ;
    
  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      if (!newName || !newUsername || !newPassword || !newWebsite) {
        return;
      }
      createItem({
        name: newName,
        username: newUsername,
        password: newPassword,
        website: newWebsite,
        favorite: newFavorite,
      });
      setNewName(''),
      setNewUsername(''),
      setNewPassword(''),
      setNewWebsite(''),
      setNewFavorite(false)

    }}>
        <label htmlFor="newNameForm">Name: </label>
        <input value={newName}onChange={e => setNewName(e.target.value)}id={"newNameForm"}type="text" />
        <label htmlFor="newUsernameForm">Username: </label>
        <input value={newUsername} onChange={e => setNewUsername(e.target.value)}id={"newUsernameForm"}type="text" />
        <label htmlFor="newPasswordForm">Password: </label>
        <input value={newPassword} onChange={e => setNewPassword(e.target.value)} id={"newPasswordForm"}type="text" />
        <label htmlFor="newWebsiteForm">Website: </label>
        <input value={newWebsite}onChange={e => setNewWebsite(e.target.value)} id={"newWebsiteForm"}type="text" placeholder='https://www.example.com' />
        <label htmlFor="newFavoriteForm">Favorite: </label>
        <input value={newFavorite}onChange={e => setNewFavorite(e.target.checked)} id={"newFavoriteForm"} type="checkbox" />
        <button className='createButton'>Create Item</button>

    </form>
  )
}

export default CreateItemForm