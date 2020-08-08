// Current URL
document.querySelector('.room-url').value = window.location.href;

const copyRoomUrl = () => {


    let roomUrl = document.querySelector('.room-url');
    // return console.log(roomUrl);\

    roomUrl.select();
    roomUrl.setSelectionRange(0, 99999);

    document.execCommand('copy');

    console.log(roomUrl);
}

document.getElementById('copy').addEventListener('click', () => {
    copyRoomUrl();
})