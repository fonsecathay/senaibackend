document.addEventListener("DOMContentLoaded", function(){
    var imagensData = [
        {src: "assets/foto1.jpg", views: 600},
        {src: "assets/foto2.jpg", views: 600},
        {src: "assets/foto3.jpg", views: 600},
        {src: "assets/foto4.jpg", views: 600},
        {src: "assets/foto5.jpg", views: 600},
        {src: "assets/foto6.jpg", views: 600},
        {src: "assets/foto7.jpg", views: 600},
        {src: "assets/foto8.jpg", views: 600},
        {src: "assets/foto9.jpg", views: 600}
        
    ];

    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");

    imagensData.forEach(function(data, index) {
        var listItem = document.createElement("li");
        listItem.className = "photo";

        var image = document.createElement("img");
        image.src = data.src;
        image.alt = "";
        image.dataset.index = index;

        var preview = document.createElement("span");;
        preview.className = "preview";
        preview.textContent = data.views;

        listItem.appendChild(image);
        listItem.appendChild(preview);

        dynamicList.appendChild(listItem);

        preview.addEventListener("click", function() {
            openModal(index);
        })
    });
    modal.addEventListener("click", function(event){
        if (event.target.className === "modal" || event.target.className === "close"){
            closeModal()
            openH1()
        }
    });
    function openModal(index) {
        modalImage.src = imagensData [index].src;
        modal.style.display = "block";
        openH1.views = views;
    }
    function openH1 (index) {
        openH1.views = views;
        modal.style.display = "block";
    }
    function closeModal (){
        modal.style.display = "none";
    }
});
