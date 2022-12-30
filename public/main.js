

// let age = document.getElementById('birthday').innerText;
// document.getElementById('age').innerHTML = `${age} `;

document.getElementById('birthday').addEventListener("change", function(){
    var input = this.value;
    var dateEntered = new Date(input).getFullYear();
    var today = new Date().getFullYear();
    console.log(today - dateEntered) ;
    var ageDiff = today - dateEntered;
    document.getElementById('age').innerHTML = `${ageDiff ? ageDiff : 0}`;
    document.getElementById('input_age').value = `${ageDiff ? ageDiff : 0}`;
})