document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('exampleInputname').value;
    const mobile = document.getElementById('exampleInputMobile').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const confirmPassword = document.getElementById('exampleInputPassword11').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    // Perform your registration logic here
    console.log("Registration Details:");
    console.log("Name:", name);
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    console.log("Password:", password);
    document.getElementById('registrationForm').reset();
    alert("Registration Successful");
      window.location.href = "Get-started-login.html";

})