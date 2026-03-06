# Overview

The VEM COP includes multiple ArcGIS Online web maps, each optimized for specific operational needs. This section provides detailed documentation for each map, including data layers, symbology, and usage guidelines.

## VEM Hosted Maps

### [Situational Awareness Map](situational-awareness-map.md)
Primary operational overview that combines statewide data layers focused on weather, traffic, incident-specific site locations, and relevant infrastructure data (map is named VT COP - Overview in AGO).

**Key Layers:**

- VT 211 calls
- Weather alerts and warnings
- Road closures and traffic incidents
- VT 511 CCTV Cameras
- Emergency shelters
- Boil water notices

**Used For:** Daily monitoring and event response coordination by the VEM SAS

---

### [Weather Map](weather-map.md)
Focused view of meteorological data and forecasts (map is named VT COP - Weather in AGO).

**Key Layers:**

- NWS weather alerts
- Radar imagery
- Weather stations
- Forecast zones
- USGS stream gauges (flood risk)

**Used For:** Daily monitoring and weather event preparation

---

### [Fire Risk Map](fire-risk-map.md)
Focused view of wildfire related data layers (map is named VT COP - Fire Risk in AGO).

**Key Layers:**

- VT Fire Danger (Daily)
- Current Wildfire Incidents
- Current Wildfire Perimeters

**Used For:** Daily monitoring and wildfire preparation

---

### [Infrastructure Map](infrastructure-map.md)

!!! warning "Under Development"
    This map is currently being configured. Documentation will be added when completed.

Comprehensive view of Vermont's critical facilities and resources (map is named COP - Infrastructure in AGO).

**Key Layers:**

- Hospitals and medical facilities
- Emergency shelters
- Fire stations and EMS
- Police departments
- Government facilities
- Utilities infrastructure

**Used For:** Resource planning and emergency response coordination by the VEM SAS

---
## Externally Hosted Maps

### [VT Outages Map](https://vtoutages.org/)
Embedded map that displays real-time, self-reported power outage data by Vermont town.

**Key Data:**

- Outage by County
- Outage by Town
- Outage by Utility
- Historical outage profiles

**Used For:** Daily monitoring, event response coordination by the VEM SAS, informing Hardest Hit Town analysis

---

### [Red Cross Shelters Map](https://maps.redcross.org/website/maps/ARC_Shelters.html)
Real time shelter location and status (only updated during an active event).

**Key Data:**

- Shelter name
- Address

**Used For:** Daily monitoring and event response coordination by the VEM SAS


---

## Common Map Features

All maps in the VEM COP share these standard features:

### Layer Control
Toggle individual layers on/off using the Layer List widget. Layers are organized by theme and include:

- Visibility controls
- Legend display

### Popup Configuration

Clicking map features displays popup windows with:

- Feature attributes
- Embedded charts
- External links (where applicable)

## Map Navigation

### Zoom Controls

- Mouse wheel: Zoom in/out
- Double-click: Zoom in
- Shift + Drag: Zoom to area
- +/- buttons: Step zoom

### Pan

- Click and drag to pan
- Arrow keys for precise movement
- Home button to reset to full extent

## Performance Tips

For optimal map performance:

- Turn off unused layers
- Limit time range filters to necessary periods
- Clear browser cache periodically
- Use appropriate zoom levels (some layers only display at certain scales)

!!! warning "Scale-Dependent Layers"
    Some detailed layers only appear when zoomed in beyond certain scales to maintain performance.

## Next Steps

Explore detailed documentation for each map:

- [Situational Awareness Map](situational-awareness-map.md)
- [Weather Layers Map](weather-map.md)  
- [Infrastructure Map](infrastructure-map.md)
