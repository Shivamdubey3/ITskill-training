// Contact Form
document.getElementById('userForm').addEventListener('submit', function(event){
    event.preventDefault(); 

    const Name=document.getElementById('name').value;
    const Email=document.getElementById('email').value;
    const Message=document.getElementById('message').value;

    console.log("Name:", Name);
    console.log("Email:", Email);
    console.log("Message:", Message);
    
});
// Enquire Modal
document.getElementById('Enquire').addEventListener('submit',function(event){
    event.preventDefault();

    const Name=document.getElementById('names').value;
    const Phone=document.getElementById('phones').value;
    const Email=document.getElementById('emails').value;
    const Message=document.getElementById('messages').value;

console.log("Name:", Name);
console.log("Phone:", Phone);
console.log("Email:", Email);
console.log("Message:", Message);

    
});