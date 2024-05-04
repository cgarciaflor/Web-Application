function previewImage() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    
    var imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = ''; // Clear previous image preview
    
    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.style.maxWidth = '100%'; 
    imagePreview.appendChild(img);
}

function detectObjects() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var form = new FormData();
    form.append("imageFile", file, "file");

    var settings = {
        "url": "https://api.cloudmersive.com/image/recognize/detect-objects",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Apikey": "f647df10-dfea-4c71-97d3-7e95052cf017"
        },
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (response) {
        console.log(response); 
        displayResults(response);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    });
}

function displayResults(response) {
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = JSON.stringify(response, null, 2); // Print entire JSON response
}