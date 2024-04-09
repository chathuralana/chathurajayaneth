document.getElementById("logindetails").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    
    fetch('loginpage.json')
      .then(response => response.json())
      .then(data => {
        const users = data.users;
        
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          // if authentication sucsesful store the user information in useresStorage
          
          usersStorage.setItem('username', user.username);
          usersStorage.setItem('role', user.role); 
          window.location.href = "./page2.html"; // Redirect to mainpage
        } else {
          // Authentication failed
          document.getElementById("error").innerHTML = "Invalid username or password";
        }
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });