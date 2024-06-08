let image = document.querySelector('.image img'); 
let content = document.getElementById('content');
let btnCreate = document.getElementById('btnCreate');

btnCreate.onclick = () => {
    if(content.value == '') return; 
    let linkQR = 'https://api.qrserver.com/v1/create-qr-code/';
    let encodedContent = encodeURIComponent(content.value);
    image.src = linkQR + '?size=500x500&data=' + encodedContent;
}
