document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // Perform your login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    document.getElementById('loginForm').reset();
    alert("Login Successful");
    // You can redirect the user to another page or show a success message
    window.location.href = "dashboard.html";
    
});

document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();

    const uname = document.getElementById('uname').value;
    const uphone = document.getElementById('uphone').value;
    const uemail = document.getElementById('uemail').value;
    const umessage = document.getElementById('umessage').value;

    // Perform your enquiry logic here
    // You can send the data to your server or perform any other actions
    console.log('Name:', uname);
    console.log('Phone:', uphone);
    console.log('Email:', uemail);
    console.log('Message:', umessage);
    
})