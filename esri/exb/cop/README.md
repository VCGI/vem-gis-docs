# VEM Common Operating Picture Documentation

This repository contains comprehensive documentation for the Vermont Emergency Management Common Operating Picture (COP) Experience Builder application.

## Getting Started

### Prerequisites
- Python 3.8+
- pip

### Installation

1. Install MkDocs Material:
```bash
pip install mkdocs-material
```

2. Optional plugins:
```bash
pip install mkdocs-glightbox
```

### Local Development

Start the development server:
```bash
mkdocs serve
```

Then open http://127.0.0.1:8000 in your browser.

### Building the Site

Generate static HTML:
```bash
mkdocs build
```

The built site will be in the `site/` directory.

## Documentation Structure

```
docs/
├── index.md                 # Homepage
├── overview.md             # Application overview
├── maps/                   # Map documentation
│   ├── situational-awareness.md
│   ├── weather-layers.md
│   └── infrastructure.md
├── widgets/                # Widget documentation
│   ├── map-widgets.md
│   ├── list-widgets.md
│   └── chart-widgets.md
├── arcade/                 # Arcade expressions
│   ├── symbology.md
│   └── popup-expressions.md
├── data-sources/          # Data source documentation
│   ├── external-feeds.md
│   └── internal-data.md
└── workflows/             # User workflows
    ├── incident-tracking.md
    └── situational-reports.md
```

## Contributing

Contact VCGI for access and contribution guidelines.

## Contact

VCGI Lead
John Van Hoesen: john.vanhoesen@vermont.gov
