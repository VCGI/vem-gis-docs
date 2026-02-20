# Site Guide & Glossary

Welcome to the Vermont Emergency Management Common Operating Picture (COP) Documentation. This guide explains how to navigate this site, understand visual cues, and defines common abbreviations used throughout the project.

---

## 🧭 Navigation & Features

* **Global Search:** Use the search bar at the top of the screen (or press `S` on your keyboard) to instantly find specific tools or text across the entire site.
* **Print Documentation:** Print the entire site to a PDF using the printer icon in the top right of the header.
* **Light / Dark Mode:** Toggle the display theme using the sun/moon icon between the printer icon and the search bar.
* **Copy Code:** Any technical code, Python scripts, or Arcade expressions can be copied to your clipboard instantly by hovering over the code block and clicking the copy icon in the top right corner.

## 📝 Document Conventions

Throughout the documentation, you will see colored call-out boxes and custom buttons. Here is what they mean:

!!! info "Informational Context"
    Blue boxes contain general helpful context, background information, or links to external resources.

!!! warning "Important Note"
    Orange boxes contain critical information, dependencies, or potential pitfalls to watch out for during a deployment.

**Source Code Buttons:**
When you see a green button like the one below, it indicates a direct link to the live source code or Jupyter Notebook hosted in our GitHub repository.<br><br> 
[ :material-github: **View Example Source** ](#){ .md-button .vt-green-btn }

---

## 📚 Glossary & Abbreviations

Because emergency management relies heavily on technical acronyms, please refer to the table below. Use the search box below to instantly filter the list or hover over these terms anywhere on the site to see their meaning.

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



<div style="display: flex; align-items: center; gap: 15px; margin-top: 3rem; padding-top: 1rem; border-top: 1px solid rgba(0,0,0,0.1); color: var(--md-default-fg-color--light);">
  
  <a href="https://github.com/VCGI/vem-gis-docs/graphs/contributors" target="_blank" style="display: flex; align-items: center;">
    <img src="https://contrib.rocks/image?repo=VCGI/vem-gis-docs&max=5" alt="Contributors" style="height: 40px; border: none; box-shadow: none;">
  </a>
  
  <div style="line-height: 1.4;">
    <strong>Maintained By VCGI</strong><br>
    <span style="font-size: 0.85em;">Project Created: <span id="github-created-date">Fetching date...</span></span>
  </div>

  <div style="margin-left: auto;">
    <a href="https://github.com/VCGI/vem-gis-docs" target="_blank">
      <img src="https://img.shields.io/github/last-commit/VCGI/vem-gis-docs?style=flat-square&logo=github&color=058a48" alt="Live GitHub Update Status">
    </a>
  </div>

</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Ping the public GitHub API for your repository
    fetch('https://api.github.com/repos/VCGI/vem-gis-docs')
      .then(response => response.json())
      .then(data => {
        if (data.created_at) {
          // Format the date to look nice (e.g., "Oct 12, 2023")
          const date = new Date(data.created_at);
          const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          document.getElementById('github-created-date').innerText = formattedDate;
        } else {
          document.getElementById('github-created-date').innerText = "Waiting for public repo...";
        }
      })
      .catch(error => {
        document.getElementById('github-created-date').innerText = "Date unavailable";
      });
  });
</script>