var socket = io.connect();

socket.on('messages', function (data) {
    console.log(data);
    render(data);
});

function render(data) {

    var html = data.map(function (data, index) {
        return (`<div>
                    <strong>${data.author}</strong>
                    <em>${data.text}</em>
                </div>`);
    }).join(" ");

    document.getElementById("messages").innerHTML = html;
}

function addMessage(e) {
    var payload = {
        author: document.getElementById('username').value,
        text: document.getElementById('text').value
    };

    socket.emit('new-message', payload);
    document.getElementById('username').value = "";
    document.getElementById('text').value = "";
    return false;
}