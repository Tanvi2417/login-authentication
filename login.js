 function register() {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const messageBox = document.getElementById('messageBox');

      if (!username || !password) {
        showMessage("Please enter both username and password.", "error");
        return;
      }

      localStorage.setItem('auth_username', username);
      localStorage.setItem('auth_password', password);

      showMessage("Registration successful! You can now log in.", "success");
    }

    function login() {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const storedUser = localStorage.getItem('auth_username');
      const storedPass = localStorage.getItem('auth_password');
      const secureContent = document.getElementById('secureContent');

      if (username === storedUser && password === storedPass) {
        showMessage("Login successful!", "success");
        secureContent.style.display = 'block';
      } else {
        showMessage("Invalid credentials. Please try again.", "error");
        secureContent.style.display = 'none';
      }
    }

    function showMessage(msg, type) {
      const messageBox = document.getElementById('messageBox');
      messageBox.textContent = msg;
      messageBox.className = `message ${type}`;
    }