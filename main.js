
 axios.get('https://api.github/users/ismarads')
 .then(function(response){
     console.log(response);
 })
 .catch(function(error) {
     console.log(error);
 });

