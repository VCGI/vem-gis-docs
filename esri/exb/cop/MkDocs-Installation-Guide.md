# MkDocs Material Installation & Setup Guide for VS Code

Complete guide for installing MkDocs Material with ArcGIS Pro Python and developing documentation in VS Code.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Python Setup with ArcGIS Pro](#python-setup-with-arcgis-pro)
3. [Install MkDocs Material](#install-mkdocs-material)
4. [Configure VS Code](#configure-vs-code)
5. [Create a New MkDocs Project from Scratch](#create-a-new-mkdocs-project-from-scratch)
6. [Install Optional Plugins](#install-optional-plugins)
7. [Customization](#customization)
8. [Building and Deploying](#building-and-deploying)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have:

- **ArcGIS Pro** installed (includes Python 3.11+)
- **VS Code** installed
- **Basic familiarity** with command line/terminal

---

## Python Setup with ArcGIS Pro

ArcGIS Pro comes with a complete Python environment that's perfect for MkDocs.

### Step 1: Find Your Python Path

Your ArcGIS Pro Python is typically located at:
```
C:\Users\[YourUsername]\AppData\Local\Programs\ArcGIS\Pro\bin\Python\envs\arcgispro-py3\python.exe
```

Replace `[YourUsername]` with your actual Windows username.

### Step 2: Configure VS Code Python Interpreter

1. **Open VS Code**
2. Press `Ctrl+Shift+P` to open Command Palette
3. Type: `Python: Select Interpreter`
4. Look for "arcgispro-py3" in the list
   - If you see it, click it and you're done!
   - If not, click **"Enter interpreter path..."**
5. Click **"Find..."** and navigate to your Python path from Step 1
6. Select `python.exe`

### Step 3: Configure PowerShell Aliases (Recommended)

This makes `python` and `pip` commands work without typing the full path every time.

**Create PowerShell Profile:**

```powershell
# Check if profile exists
Test-Path $PROFILE

# If False, create it
New-Item -Path $PROFILE -Type File -Force

# Open in Notepad
notepad $PROFILE
```

**Add these lines to the file:**

```powershell
# ArcGIS Pro Python Aliases
Set-Alias -Name python -Value "C:\Users\[YourUsername]\AppData\Local\Programs\ArcGIS\Pro\bin\Python\envs\arcgispro-py3\python.exe"
Set-Alias -Name pip -Value "C:\Users\[YourUsername]\AppData\Local\Programs\ArcGIS\Pro\bin\Python\envs\arcgispro-py3\Scripts\pip.exe"
```

**Important:** Replace `[YourUsername]` with your actual username!

**Save and close Notepad**, then:

1. Close all VS Code terminals
2. Open a new terminal (`Ctrl + backtick`)
3. Test it:

```powershell
python --version
pip --version
```

You should see version numbers without errors.

### Step 4: Set PowerShell Execution Policy

Allow PowerShell to run your profile script:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Type `Y` and press Enter if prompted.

---

## Install MkDocs Material

MkDocs Material includes MkDocs core plus the Material theme.

### Installation Command

```powershell
pip install mkdocs-material
```

This installs:
- `mkdocs` - Core documentation generator
- `mkdocs-material` - Material theme
- All required dependencies

### Verify Installation

Check if MkDocs is installed:

```powershell
# If aliases work:
python -m mkdocs --version

# Should show something like:
# mkdocs, version 1.6.1 from ... (Python 3.11)
```

Also check what's installed:

```powershell
pip list | Select-String mkdocs
```

You should see:
```
mkdocs                            1.6.1
mkdocs-get-deps                   0.2.0
mkdocs-material                   9.7.1
mkdocs-material-extensions        1.3.1
```

---

## Configure VS Code

Set up VS Code for optimal MkDocs development.

### Step 1: Install VS Code Extensions

Open Extensions panel (`Ctrl+Shift+X`) and install:

1. **Python** (by Microsoft) - Python language support
2. **Markdown All in One** - Markdown shortcuts and preview
3. **Markdown Preview Enhanced** - Enhanced preview features
4. **markdownlint** - Markdown linting and formatting
5. **YAML** (by Red Hat) - Syntax highlighting for mkdocs.yml
6. **Code Spell Checker** - Catch typos in documentation

### Step 2: Configure VS Code Settings

Open User Settings JSON:
1. Press `Ctrl+Shift+P`
2. Type: `Preferences: Open User Settings (JSON)`
3. Add these settings (merge with existing settings):

```json
{
    // Markdown settings
    "markdown.preview.breaks": true,
    "markdown.preview.linkify": true,
    
    // Auto-save for live preview
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000,
    
    // Word wrap for easier reading
    "editor.wordWrap": "on",
    
    // Markdown specific settings
    "[markdown]": {
        "editor.quickSuggestions": true,
        "editor.defaultFormatter": "yzhang.markdown-all-in-one"
    }
}
```

### Step 3: Set Up Terminal

The integrated terminal should now work with your Python aliases.

**Open terminal:** `Ctrl + backtick`

**Test commands:**
```powershell
python --version
pip --version
mkdocs --version  # This won't work yet - use python -m mkdocs instead
```

**Create MkDocs alias (optional):**

Add to your PowerShell profile:

```powershell
notepad $PROFILE
```

Add this line:
```powershell
Set-Alias -Name mkdocs -Value "C:\Users\[YourUsername]\AppData\Local\Programs\ArcGIS\Pro\bin\Python\envs\arcgispro-py3\Scripts\mkdocs.exe"
```

Or just use `python -m mkdocs` for all commands (this always works).

---

## Create a New MkDocs Project from Scratch

Step-by-step guide to creating a documentation site from scratch.

### Step 1: Create Project Directory

Choose where you want your documentation project:

```powershell
# Navigate to your desired location
cd "C:\Users\[YourUsername]\Documents"

# Create project directory
mkdir my-documentation
cd my-documentation
```

### Step 2: Initialize MkDocs

Create the basic MkDocs structure:

```powershell
python -m mkdocs new .
```

This creates:
```
my-documentation/
├── docs/
│   └── index.md
└── mkdocs.yml
```

### Step 3: Open in VS Code

```powershell
code .
```

This opens the entire project folder in VS Code.

### Step 4: Configure mkdocs.yml

Replace the contents of `mkdocs.yml` with this starter configuration:

```yaml
site_name: My Documentation
site_description: Project documentation
site_author: Your Name

theme:
  name: material
  palette:
    # Light mode
    - scheme: default
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode
    # Dark mode
    - scheme: slate
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
  
  features:
    - navigation.tabs
    - navigation.sections
    - navigation.top
    - search.suggest
    - search.highlight
    - content.code.copy

# Plugins
plugins:
  - search

# Markdown extensions
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - tables
  - attr_list
  - toc:
      permalink: true
```

### Step 5: Create Documentation Structure

Create folders for organizing content:

```powershell
# Create folders
mkdir docs\getting-started
mkdir docs\guides
mkdir docs\reference
mkdir docs\images
```

### Step 6: Add Navigation

Update `mkdocs.yml` to include navigation:

```yaml
# Add this to mkdocs.yml
nav:
  - Home: index.md
  - Getting Started:
      - getting-started/installation.md
      - getting-started/quick-start.md
  - Guides:
      - guides/basic-usage.md
      - guides/advanced-features.md
  - Reference:
      - reference/api.md
      - reference/configuration.md
```

### Step 7: Create Initial Pages

Create placeholder markdown files:

**docs/getting-started/installation.md:**
```markdown
# Installation

Instructions for installing the software.

## Prerequisites

- Requirement 1
- Requirement 2

## Installation Steps

1. Step 1
2. Step 2
3. Step 3
```

**docs/getting-started/quick-start.md:**
```markdown
# Quick Start

Get up and running quickly.

## Your First Example

```python
print("Hello, World!")
```
```

### Step 8: Start Development Server

In VS Code terminal:

```powershell
python -m mkdocs serve
```

You should see:
```
INFO    -  Building documentation...
INFO    -  Cleaning site directory
INFO    -  Documentation built in 0.23 seconds
INFO    -  [HH:MM:SS] Serving on http://127.0.0.1:8000
```

### Step 9: View Your Site

Open browser to: **http://127.0.0.1:8000**

You should see your documentation site with Material theme!

### Step 10: Edit and Preview

1. Keep `mkdocs serve` running in terminal
2. Edit any `.md` file in `docs/` folder
3. Save the file
4. Browser automatically refreshes with changes

---

## Install Optional Plugins

Enhance your documentation with additional plugins.

### Image Zoom (glightbox)

Allows users to click images to zoom them full-screen.

**Install:**
```powershell
pip install mkdocs-glightbox
```

**Enable in mkdocs.yml:**
```yaml
plugins:
  - search
  - glightbox
```

**Restart mkdocs serve** - all images are now clickable!

### Mermaid Diagrams

Create flowcharts and diagrams in markdown.

**Install:**
```powershell
pip install mkdocs-mermaid2-plugin
```

**Enable in mkdocs.yml:**
```yaml
plugins:
  - search
  - mermaid2
```

**Use in markdown:**
````markdown
```mermaid
graph LR
    A[Start] --> B[Process]
    B --> C[End]
```
````

### Git Revision Date

Show last updated date on pages.

**Install:**
```powershell
pip install mkdocs-git-revision-date-localized-plugin
```

**Enable:**
```yaml
plugins:
  - search
  - git-revision-date-localized:
      enable_creation_date: true
```

---

## Customization

### Custom Colors

Create `docs/stylesheets/custom.css`:

```css
/* Custom color scheme */
:root {
  --md-primary-fg-color: #046A38;        /* Your brand color */
  --md-primary-fg-color--light: #058a48;
  --md-primary-fg-color--dark: #034a28;
}

/* Dark mode */
[data-md-color-scheme="slate"] {
  --md-primary-fg-color: #046A38;
  --md-primary-fg-color--light: #058a48;
  --md-primary-fg-color--dark: #034a28;
}

/* Custom header */
.md-header {
  background-color: #046A38 !important;
}

.md-tabs {
  background-color: #046A38 !important;
}
```

**Enable in mkdocs.yml:**
```yaml
extra_css:
  - stylesheets/custom.css
```

### Custom Logo and Favicon

Add logo and favicon images to `docs/images/`:

```yaml
theme:
  name: material
  logo: images/logo.png
  favicon: images/favicon.ico
```

### Social Links

Add social media and repository links:

```yaml
extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/your-org
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/your-handle
    - icon: fontawesome/solid/envelope
      link: mailto:your-email@example.com
```

### Footer Copyright

```yaml
copyright: Copyright &copy; 2026 Your Organization
```

---

## Building and Deploying

### Build Static Site

Generate HTML files for deployment:

```powershell
python -m mkdocs build
```

This creates a `site/` folder with all HTML, CSS, JS, and assets.

### Deploy to GitHub Pages

If your project is on GitHub:

```powershell
python -m mkdocs gh-deploy
```

Your site will be live at: `https://username.github.io/repository-name/`

### Deploy to Other Hosting

1. Build the site: `python -m mkdocs build`
2. Upload contents of `site/` folder to your web server via:
   - FTP/SFTP
   - Network share
   - Web hosting control panel
   - Cloud storage (S3, Azure, etc.)

### .gitignore

Create `.gitignore` in project root:

```
# MkDocs
site/

# Python
__pycache__/
*.py[cod]
*$py.class

# Virtual environments
venv/
env/

# OS files
.DS_Store
Thumbs.db
```

---

## Troubleshooting

### "python was not found"

**Problem:** Python isn't in PATH or aliases aren't set.

**Solution:** 
- Use full path: `& "C:\Users\...\python.exe" --version`
- Or set up PowerShell aliases (see [Python Setup](#python-setup-with-arcgis-pro))
- Or use: `python.exe --version` instead of `python --version`

### "mkdocs: command not found"

**Problem:** mkdocs isn't in PATH.

**Solution:** Always use `python -m mkdocs` instead of just `mkdocs`:
```powershell
python -m mkdocs serve
python -m mkdocs build
```

### PowerShell Profile Won't Load

**Problem:** Execution policy blocking scripts.

**Solution:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Restart VS Code terminal.

### CSS Changes Not Showing

**Problem:** Browser caching old CSS.

**Solution:**
1. Stop mkdocs (`Ctrl+C`)
2. Restart: `python -m mkdocs serve`
3. Hard refresh browser: `Ctrl+Shift+R`

### Plugin Not Working

**Problem:** Plugin installed but not enabled.

**Solution:**
1. Check `pip list | Select-String [plugin-name]` - is it installed?
2. Check `mkdocs.yml` plugins section - is it uncommented?
3. Restart mkdocs serve

### Images Not Displaying

**Problem:** Wrong image path or file location.

**Solution:**
- Use relative paths from markdown file location
- From `docs/page.md` → `images/screenshot.png`
- From `docs/section/page.md` → `../images/screenshot.png`
- Check file exists in correct location

### Port Already in Use

**Problem:** Another process using port 8000.

**Solution:**
```powershell
# Use different port
python -m mkdocs serve --dev-addr=127.0.0.1:8001
```

---

## Quick Command Reference

### Daily Workflow

```powershell
# Navigate to project
cd "C:\path\to\your\project"

# Start development server
python -m mkdocs serve

# In another terminal (Ctrl+Shift+`):
# Edit files in docs/ folder
# Save to see live changes
# Press Ctrl+C to stop server when done
```

### Common Commands

```powershell
# Check versions
python --version
pip --version
python -m mkdocs --version

# Install packages
pip install mkdocs-material
pip install mkdocs-glightbox
pip list | Select-String mkdocs

# MkDocs commands
python -m mkdocs new .              # Create new project
python -m mkdocs serve              # Start dev server
python -m mkdocs build              # Build static site
python -m mkdocs gh-deploy          # Deploy to GitHub Pages
python -m mkdocs build --clean      # Clean build
```

### File Paths

```powershell
# Navigate
cd "C:\path\with spaces\in it"      # Use quotes for spaces

# Create folders
mkdir docs\section-name
mkdir docs\images\screenshots

# List files
ls
ls docs

# Open in VS Code
code .
```

---

## Additional Resources

### Documentation
- [MkDocs Official Docs](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Markdown Guide](https://www.markdownguide.org/)

### Plugins
- [MkDocs Plugins Catalog](https://github.com/mkdocs/catalog)
- [Awesome MkDocs](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Plugins)

### Markdown
- [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [CommonMark Spec](https://commonmark.org/)

### Material Theme
- [Material Setup](https://squidfunk.github.io/mkdocs-material/getting-started/)
- [Material Reference](https://squidfunk.github.io/mkdocs-material/reference/)
- [Material Customization](https://squidfunk.github.io/mkdocs-material/customization/)

---

## Support

For issues specific to:
- **MkDocs Core**: [GitHub Issues](https://github.com/mkdocs/mkdocs/issues)
- **Material Theme**: [GitHub Issues](https://github.com/squidfunk/mkdocs-material/issues)
- **ArcGIS Pro Python**: [Esri Community](https://community.esri.com/)

---

**Last Updated:** February 2026  
**Version:** 1.0

---

## Appendix: Full Example mkdocs.yml

Complete example configuration with all common options:

```yaml
site_name: My Documentation
site_description: Comprehensive project documentation
site_author: Your Name
site_url: https://yourdomain.com

# Repository
repo_url: https://github.com/your-org/your-repo
repo_name: your-org/your-repo
edit_uri: edit/main/docs/

theme:
  name: material
  palette:
    # Light mode
    - scheme: default
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode
    # Dark mode
    - scheme: slate
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
  
  features:
    - navigation.tabs
    - navigation.sections
    - navigation.expand
    - navigation.top
    - navigation.tracking
    - search.suggest
    - search.highlight
    - content.code.copy
    - content.tabs.link
  
  logo: images/logo.png
  favicon: images/favicon.ico

# Navigation
nav:
  - Home: index.md
  - Getting Started:
      - getting-started/index.md
      - Installation: getting-started/installation.md
      - Quick Start: getting-started/quick-start.md
  - User Guide:
      - guides/index.md
      - Basic Usage: guides/basic-usage.md
      - Advanced Features: guides/advanced-features.md
  - Reference:
      - reference/index.md
      - API Documentation: reference/api.md
      - Configuration: reference/configuration.md

# Plugins
plugins:
  - search
  - glightbox

# Markdown extensions
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.highlight:
      anchor_linenums: true
      line_spans: __span
      pygments_lang_class: true
  - pymdownx.inlinehilite
  - tables
  - attr_list
  - md_in_html
  - def_list
  - footnotes
  - toc:
      permalink: true

# Customization
extra_css:
  - stylesheets/custom.css

extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/your-org
    - icon: fontawesome/solid/envelope
      link: mailto:contact@example.com

copyright: Copyright &copy; 2026 Your Organization
```