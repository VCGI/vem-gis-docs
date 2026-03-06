document.addEventListener('DOMContentLoaded', function() {
    // Select all tables inside articles
    document.querySelectorAll('article table').forEach(function(table) {
        
        // CHECK: Is this table inside a <div class="no-datatable">?
        // If yes, skip it (return) so it stays a plain HTML table.
        if (table.closest('.no-datatable')) {
            return;
        }

        // Otherwise, initialize the interactive DataTable
        $(table).DataTable({
            paging: false,      
            searching: true,    
            ordering: true,     
            info: false,        
            dom: 'ft'          
        });
    });
});