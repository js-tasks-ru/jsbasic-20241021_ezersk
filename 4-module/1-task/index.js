function makeFriendsList(friends) {
  let ulContainer = document.createElement('ul');

  friends.map((friend) => {
    let liItem = document.createElement('li');
    liItem.innerHTML = friend.firstName + ' ' + friend.lastName;
    return ulContainer.append(liItem);
  });

  return ulContainer;
}
