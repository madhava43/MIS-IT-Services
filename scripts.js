// Show the details of the selected position
function showPositionDetails(positionId) {
    const positions = document.querySelectorAll('.position-info');
    positions.forEach(position => {
        position.style.display = 'none';
    });
    document.getElementById(positionId).style.display = 'block';
    document.querySelector('.position-details').style.display = 'block';
}

// Open the email client to apply for a position
function applyForPosition(positionTitle) {
    const email = 'contact@mahiraitservices.com';
    const subject = `Application for ${positionTitle}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
}

document.addEventListener("DOMContentLoaded", function() {
    const positionItems = document.querySelectorAll(".open-positions li");
    positionItems.forEach(item => {
        item.addEventListener("click", function() {
            const positionId = this.getAttribute("data-position");
            showPositionDetails(positionId);
        });
    });
});
