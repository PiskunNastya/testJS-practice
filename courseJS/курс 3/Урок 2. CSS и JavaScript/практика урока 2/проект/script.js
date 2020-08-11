// window.onload = function() {
//     var btnToShowModal = document.querySelector('[value="Type a message"]');
//     var modalWrapper = document.querySelector('#modal');
//     var cancel = document.querySelector('[value="Cancel"]')


//     btnToShowModal.onclick = toggleMessageWindow;
//     cancel.onclick = toggleMessageWindow;

//     function toggleMessageWindow() {
//         modalWrapper.classList.toggle('modal__visible');
//     }
// }


    var btnToShowModal = document.querySelector('[value="Type a message"]');
    var modalWrapper = document.querySelector('#modal');
    var cancel = document.querySelector('[value="Cancel"]');
    var sendMessageBtn = document.querySelector('[value="Send message"]');


    btnToShowModal.onclick = toggleMessageWindow;
    cancel.onclick = toggleMessageWindow;

    function toggleMessageWindow() {
        modalWrapper.classList.toggle('modal__visible');
    }  


    
