// Get the modal element
const modal = document.getElementById('addProductModal');

/**
 * Opens the "Add Product" modal pop-up.
 */
function openModal() {
    modal.style.display = 'block';
}

/**
 * Closes the "Add Product" modal pop-up.
 */
function closeModal() {
    modal.style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Event Listeners for Modal Trigger Elements
document.addEventListener('DOMContentLoaded', () => {
    // 1. Link the "Add Product" button to open the modal
    // Note: The onclick="openModal()" is already on the button in HTML, 
    // but this is a safer way to attach the handler in JS.
    const addButton = document.querySelector('.add-product-btn');
    if (addButton) {
        addButton.addEventListener('click', openModal);
    }

    // 2. Link the "Browse Image" link to the hidden file input
    const browseLink = document.getElementById('browseImageLink');
    const fileInput = document.getElementById('productImage');
    
    if (browseLink && fileInput) {
        browseLink.addEventListener('click', function(e) {
            e.preventDefault();
            fileInput.click();
        });
    }

    // Making functions globally accessible for HTML onclick attributes (like closeModal)
    window.openModal = openModal;
    window.closeModal = closeModal;
});

// --- New Request Modal Functionality ---
const requestModal = document.getElementById('createRequestModal');

/**
 * Opens the "Create Request" modal pop-up.
 */
function openRequestModal() {
    if (requestModal) {
        requestModal.style.display = 'block';
    }
}

/**
 * Closes the "Create Request" modal pop-up.
 */
function closeRequestModal() {
    if (requestModal) {
        requestModal.style.display = 'none';
    }
}

// Attach these new functions to the global window object so the HTML can call them
window.openRequestModal = openRequestModal;
window.closeRequestModal = closeRequestModal;

// Update the global window.onclick handler to also close the request modal
window.onclick = function(event) {
    // Inventory Modal Handler (assuming 'modal' is the inventory modal element)
    const inventoryModal = document.getElementById('addProductModal');
    if (inventoryModal && event.target === inventoryModal) {
        closeModal(); // Assuming closeModal handles the inventory modal
    }

    // Requests Modal Handler
    const requestModal = document.getElementById('createRequestModal');
    if (requestModal && event.target === requestModal) {
        closeRequestModal();
    }
}