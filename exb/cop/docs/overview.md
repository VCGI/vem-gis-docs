# Application Overview

The VEM Common Operating Picture dashboard is built on ArcGIS Experience Builder and provides a comprehensive situational awareness dashboard for internal use by Vermont Emergency Management.

## Application Structure

The COP dashboard is generally organized into the following primary components:

```text
🌐 VEM-COP Experience Builder Application
├── 📝 Situational Awareness Page
│   └── 🗺️ Situational Awareness WebMap
│       ├── 📜 Active Incidents (Feature Layer)
│       ├── 📜 Weather Radar (Image Service)
│       └── 📜 Etc.
│ 
├── 📝 Weather Page
│   └── 🗺️ Weather WebMap
│       ├── 📜 NWS Watches & Warnings
│       ├── 📜 NOAA Precipitation Forecast
│       └── 📜 Etc.
│ 
├── 📝 Fire Risk Page
│    └── 🗺️ Fire Risk WebMap
│         ├── 📜 Shelters (Point Layer)
│         ├── 📜 NOAA Precipitation Forecast
│         └── 📜 Etc.
│ 
├──📝 VT Outages Page
│    └── 🗺️ VT Outages WebSite
│ 
├── 📝 Mass Care Page
│    └── 🗺️ Mass Care WebMap
│         ├── 📜 AHS Shelters (Point Layer)
│         ├── 📜 ARC Shelters (Point Layer)
│         ├── 📜 ARC Trailers (Point Layer)
│         └── 📜 Etc.
│ 
└── 📝 Infrastructure Page
    └── 🗺️ Infrastructure WebMap
        ├── 📜 TBD
        └── 📜 TBD
```

### Maps
Multiple map views provide different perspectives on Vermont's emergency management landscape:

- **Situational Awareness Map**: Real-time view of current conditions
- **Weather Map**: Detailed meteorological data, forecast, and warnings
- **Fire Risk Map**: Daily fire danger forecasts and preparedness levels
- **Power Outages Map**: Statweide power outage accessed via VT Outages
- **Mass Care Map**: Location and status of Vermont mass care resources
- **Infrastructure Map**: Real-time road closure data (available during SEOC activation)

See the [Maps section](maps/index.md) for detailed documentation.

### Data Integration
The COP integrates data from multiple sources:

For example:

- Vermont 511 traffic information
- National Weather Service alerts
- Power outage data (vtoutages.org)
- VT 211 call locations

See the [Maps section](maps/index.md) for detailed information about data sources.

## User Interface Layout

Preview screenshot of the COP interface

![User Interface Layout](images/screenshots/user-interface-layout.jpg)

The application uses a **fullscreen layout** with the following components:

1. **Header**: Application title, dynamic status text and color, date/time, and logo
2. **Navigation**: Tab-based navigation between different views
3. **Map Area(s)**: Primary interactive mapping area
4. **Side Panel**: Widgets for data display and interaction

## Key Technologies

- **ArcGIS Online**: Data hosting and map services hosted in: [VEM AGO](https://vtem.maps.arcgis.com/)
- **ArcGIS Experience Builder**: Application framework hosted in: [VEM AGO](https://vtem.maps.arcgis.com/)
- **Arcade**: Expression language for symbology and popups
- **Python**: AGO hosted Python notebooks that support ETL workflows

## Access and Permissions

!!! warning "Access Requirements"
    The VEM COP requires authentication through ArcGIS Online. Contact your VEM administrator for access (either [Brett Pierce](mailto:brett.pierce@vermont.gov) or [John Van Hoesen](mailto:john.vanhoesen@vermont.gov)).

### User Roles
- **Viewer**: Read-only access to maps and data
- **Editor**: Can update certain data layers
- **Administrator**: Full access to configure application

## Browser Compatibility

<div class="no-datatable" markdown="1">

| Browser | Minimum Version | Recommended |
|---------|----------------|-------------|
| Chrome | 90+ | Latest |
| Firefox | 88+ | Latest |
| Edge | 90+ | Latest |
| Safari | 14+ | Latest |

</div>

!!! danger "Mobile Access"
    While the COP is accessible on mobile devices, full functionality is optimized for desktop browsers with screen resolution of at least 1280x720.

## Performance Considerations

The application is designed for optimal performance, but some factors can affect speed:

- **Network Connection**: Broadband recommended for real-time data
- **Browser Extensions**: Ad blockers may interfere with map loading
- **Cache**: Clear browser cache if experiencing issues

## Support and Feedback

For technical issues, feature requests, or questions:

- **Email**: [John Van Hoesen](mailto:john.vanhoesen@vermont.gov)
- **Phone**: 802-498-5702

## Related Resources

- [Vermont Emergency Management Website](https://vem.vermont.gov/)
- [Vermont GIS Portal](https://geodata.vermont.gov/)
- [ArcGIS Experience Builder Documentation](https://doc.arcgis.com/en/experience-builder/)
