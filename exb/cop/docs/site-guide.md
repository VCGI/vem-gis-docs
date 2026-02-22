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


[//]: # (Separator between sections)


<div style="display: flex; align-items: center; gap: 12px; margin-top: 3rem; padding-top: 1rem; border-top: 1px solid rgba(0,0,0,0.1); color: var(--md-default-fg-color--light); font-size: 0.85em; flex-wrap: wrap;">
  
  <strong>Maintained by VCGI</strong>

  <span title="Last Update" style="display: flex; align-items: center; gap: 4px;">
    <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px; fill:grey;"><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m.5 11H7v-2h3.5V7h2v6z"/></svg></span>
    <span id="github-last-update">Loading...</span>
  </span>

  <span title="Date Created" style="display: flex; align-items: center; gap: 4px;">
    <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px; fill:grey;"><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m.5 11H7v-2h3.5V7h2v6z"/></svg></span>
    <span id="github-created-date">Loading...</span>
  </span>

  <span style="display: flex; align-items: center; gap: 6px; margin-left: 5px;">
    <span class="twemoji" style="width:18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></span>
    GitHub Contributors
  </span>

  <a href="https://github.com/VCGI/vem-gis-docs/graphs/contributors" target="_blank" style="display: flex; align-items: center; text-decoration: none; margin-left: 5px;">
    <img src="https://contrib.rocks/image?repo=VCGI/vem-gis-docs&max=5&anon=true" 
         alt="Contributors" 
         style="height: 32px; border-radius: 16px; border: none;"
         onerror="this.src='https://github.com/VCGI.png'; this.style.borderRadius='50%';">
  </a>

</div>

<script>
  function fetchGitHubStats() {
    const createdEl = document.getElementById('github-created-date');
    const updateEl = document.getElementById('github-last-update');
    if (!createdEl || !updateEl) return;

    fetch('https://api.github.com/repos/VCGI/vem-gis-docs')
      .then(r => r.json())
      .then(data => {
        if (data.created_at) {
          const dCreate = new Date(data.created_at);
          createdEl.innerText = dCreate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        }
        if (data.pushed_at) {
          const dUpdate = new Date(data.pushed_at);
          updateEl.innerText = dUpdate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        }
      })
      .catch(e => {
        createdEl.innerText = "Error";
        updateEl.innerText = "Error";
      });
  }
  
  fetchGitHubStats();
  document.addEventListener("DOMContentSwitch", fetchGitHubStats);
  window.addEventListener("load", fetchGitHubStats);
</script>