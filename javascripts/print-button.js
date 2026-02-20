document.addEventListener('DOMContentLoaded', function() {
    // If we're already on the print page, trigger print dialog
    if (window.location.pathname.includes('/print_page/')) {
        window.onload = function() {
            // Wait a bit longer for content to fully load
            setTimeout(function() {
                window.print();
            }, 1500);
        };
    }
    
    // Add print button to header toolbar
    var toolbar = document.querySelector('.md-header__option');
    
    if (toolbar) {
        // Create print button
        var printBtn = document.createElement('label');
        printBtn.className = 'md-header__button md-icon';
        printBtn.title = 'Print Documentation to PDF';
        printBtn.setAttribute('aria-label', 'Print');
        
        // Add printer icon
        printBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18 3H6v4h12M19 12a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m-3 7H8v-5h8m3-7H6a2 2 0 0 0-2 2v6h4v8h8v-8h4v-6a2 2 0 0 0-2-2Z"/>
            </svg>
        `;
        
        // Navigate to print page
        printBtn.onclick = function() {
            window.location.href = '/print_page/';
        };
        
        // Insert before the color scheme toggle
        toolbar.parentNode.insertBefore(printBtn, toolbar);
    }
});