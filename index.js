document.getElementById('letsconnect').addEventListener('submit', function(event){
    event.preventDefault();

    var Name =document.getElementById('exampleInputname').value;
    var Email =document.getElementById('exampleInputEmail1').value;
    var Message =document.getElementById('exampleInputMessage').value;

    console.log("Name:", Name);
    console.log("Email:", Email);
    console.log("Message:", Message);

});
