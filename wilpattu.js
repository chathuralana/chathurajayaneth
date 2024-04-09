document.addEventListener("DOMContentLoaded", function() {
    fetch("wilpattu.json")
    .then(response => response.json())
    .then(data => {
        // Update paramain section
        document.getElementById(data[0].section_id).innerHTML = data[0].content;

        // Update What to see in Yala section
        document.getElementById(data[1].header_id).textContent = data[1].header;
        document.getElementById(data[1].image_id).setAttribute("src", data[1].image);
        document.getElementById(data[1].content_id).textContent = data[1].content;

        // Update Best time to visit section
        document.getElementById(data[2].header_id).textContent = data[2].header;
        document.getElementById(data[2].image_id).setAttribute("src", data[2].image);
        document.getElementById(data[2].content_id).textContent = data[2].content;

        // Update image sources
        const imageSources = data[3].image_sources;
        for (let i = 0; i < imageSources.length; i++) {
            document.getElementById("wilpattuimg" + (i + 3)).setAttribute("src", imageSources[i]);
        }
    })
    .catch(error => console.log("Error fetching data: ", error));
});
