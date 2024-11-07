function showSalary(users, age) {
  let filteredUsers = users
    .filter((user) => user.age <= age)
    .map((user, index, newArr) => {
      if (index !== newArr.length - 1) {
        return `${user.name}, ${user.balance}\n`;
      } else {
        return `${user.name}, ${user.balance}`;
      }
    });

  return filteredUsers.join('');
}
