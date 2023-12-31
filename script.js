function searchImages() {
    var searchTerm = document.getElementById("searchTerm").value;
    var apiKey = "Your API key"; // Replace with your API key
    var cx = "Your Search engine ID "; // Replace with your Search Engine ID
    var url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${searchTerm}&searchType=image`;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        displayImages(response.items);
      }
    };
    xhr.send();
}

function displayImages(images) {
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";

    images.forEach(function(image) {
      var imgElement = document.createElement("img");
      imgElement.src = image.link;
      imageContainer.appendChild(imgElement);
    });
}
