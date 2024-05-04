$(document).ready(function() {
    $.ajax({
        url: 'https://webpages.charlotte.edu/cgarciaf/project/models.json', 
        dataType: 'json',
        success: function(data) {
            
            displaySection(data.objDetection, 'objDetectionSection');
            displaySection(data.poseDetection, 'poseDetectionSection');
            displaySection(data.objectSegmentation, 'objectSegmentationSection');
        },
        error: function(xhr, status, error) {
            console.error('Error fetching JSON data:', error);
        }
    });

    
    function displaySection(models, sectionId) {
        var section = $('#' + sectionId);

        $.each(models, function(index, model) {
            var modelHtml = `
                <div class="model">
                    <h3>${model.model_name}</h3>
                    <img src="${model.image}" alt="${model.model_name}">
                    <p>${model.info}</p>
                    <p>${model.more} <a href="${model.link}" target="_blank">here</a>.</p>
                </div>
            `;
            section.append(modelHtml);
        });
    }
});
