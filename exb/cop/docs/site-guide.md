# Site Guide & Glossary

Welcome to the Vermont Emergency Management Common Operating Picture (COP) Documentation. This guide explains how to navigate this site, understand visual cues, and defines common abbreviations used throughout the project.

---

## 🧭 Navigation & Features

* **Global Search:** Use the search bar at the top of the screen (or press `S` on your keyboard) to instantly find specific tools or text across the entire site.
* **Print Documentation:** Print the entire site (or specific pages) to a PDF using the printer icon in the top right of the header.
* **Light / Dark Mode:** Toggle the display theme using the sun/moon icon between the printer icon and the search bar.
* **Copy Code:** Any Python scripts or Arcade expressions can be copied to your clipboard instantly by hovering over the code block and clicking the copy icon in the top right corner.

## 📝 Document Conventions

Throughout the documentation, you will see colored call-out boxes and custom buttons. Here is what they mean:

!!! info "Informational Context"
    Blue boxes contain general helpful context, background information, or links to external resources.

!!! warning "Important Note"
    Orange boxes contain critical information, dependencies, or potential pitfalls to watch out for during a deployment.
<br>
**Copy Code Blocks:**
When you see a code block like the one below, if you click the small copy icon in the right corner the code will be copied to the clipboard.<br> 
![Copy Code Block Screenshot](images/pages/site-guide-code-copy.jpg)

**Source Code Buttons:**
When you see a green button like the one below, it indicates a direct link to the live source code or Jupyter Notebook hosted in the GitHub repository.<br><br> 
[ :material-github: **View Example Source** ](#){ .md-button .vt-green-btn }

---

## 📚 Glossary & Abbreviations

Emergency management relies heavily on technical acronyms, please refer to the table below for abbreviation definitions. Use the search box below to instantly filter the list or hover over these terms anywhere on the site to view the definition.

<div id="table-container"></div>

<div id="raw-abbr-data" style="display:none;">
--8<-- "docs/includes/abbreviations.md"
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const rawData = document.getElementById('raw-abbr-data').innerText;
    const container = document.getElementById('table-container');
    
    // Create Table
    let table = document.createElement('table');
    table.innerHTML = `<thead><tr><th>Abbreviation</th><th>Definition</th></tr></thead><tbody id="abbrTableBody"></tbody>`;
    container.appendChild(table);
    const tbody = document.getElementById('abbrTableBody');

    // Parse the lines (looking for *[Term]: Definition)
    const lines = rawData.split('\n');
    lines.forEach(line => {
        const match = line.match(/^\*\[(.+?)\]:\s*(.+)$/);
        if (match) {
            let row = tbody.insertRow();
            row.innerHTML = `<td><strong>${match[1]}</strong></td><td>${match[2]}</td>`;
        }
    });
});
</script>


[//]: # (Separator between sections)




