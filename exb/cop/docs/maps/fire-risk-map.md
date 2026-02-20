# Fire Risk Map

The weather map provides a comprehensive, real-time view focused on current meteorological conditions across Vermont by integrating multiple data sources to support emergency operations.

![Fire Risk Map](../images/maps/fire-risk-map-screenshot.jpg)
*The Fire Risk map (named Weather - Fire Risk) is accessible [here](https://vtem.maps.arcgis.com/apps/mapviewer/index.html?webmap=305a626eb0054673bc9cdbb38f19d03e). It contains both grouped and ungrouped layers from internal and external sources.*

## Purpose

This map provides detailed weather information for:

- Pre-event planning and preparation
- Storm tracking and monitoring
- Historical weather analysis
- Forecast verification

## Data Layers

!!! warning "Layer Visibility"
    Some layers are only turned on (visbile by Default) seasonally or during SEOC activation.

| Group | Layer Name | Symbology | Source |
|-------|------------|----------------|-------------|
|  | NWS Weather Stations | Classified by `Wind Speed` | [NWS](https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NOAA_METAR_current_wind_speed_direction_v1/FeatureServer/0) |
|  | RAWS Weather Stations |ESRI basic point  | [NIFC](https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/PublicView_RAWS/FeatureServer/1) |
| Weather | NWS Radar | Classified by `conus_bref_qcd` | [NWS](https://opengeo.ncep.noaa.gov/geoserver/conus/conus_bref_qcd/ows) |
| Drought| Public Reports CMOR | ESRI basic point | [CMOR](https://services5.arcgis.com/0OTVzJS4K09zlixn/ArcGIS/rest/services/CMOR_2022_Public/FeatureServer/0) |
| Drought | US Drought Monitor -Current | Classified by `DM` | [USDM](https://services5.arcgis.com/0OTVzJS4K09zlixn/ArcGIS/rest/services/USDM_current/FeatureServer/0) |
| Fire | Current Wildfire Incidents | Classified by `Wildfire Incidents` | [NIFC](https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer/0) |
| Fire | Current Wildfire Perimeters | Classified by `Category` | [NIFC](https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer/1) |
| Fire | Vermont Fire Danger (Daily) | Classified by `FIREDANGER` | [VTFPR](https://anrmaps.vermont.gov/arcgis/rest/services/map_services/MAP_ANR_ANRATLASFPR_WM_NOCACHE/MapServer/50) |

### Reference Layers
*The reference layers group is at the top of the table of contents to create a visual mask so that data within Vermont is highlighted, but the user can still data in surrounding states.*

<div class="no-datatable" markdown="1">

| Group | Layer Name | Type | Source |
|-------|------------|------|--------|
| Boundaries | U.S. States and Territories | Polygon | [NOAA](https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NWS_Watches_Warnings_v1/FeatureServer/4) |
| Boundaries | Vermont Counties | Polygon | [VCGI](https://geodata.vermont.gov/datasets/VCGI::vt-data-county-boundaries-1/about) |
| Boundaries | Vermont Towns | Polygon | [VCGI](https://geodata.vermont.gov/datasets/VCGI::vt-data-town-boundaries-1/about) |
| Boundaries | NA Political Divisions Polygons (mask) | Polygon | [NAEA](https://services7.arcgis.com/oF9CDB4lUYF7Um9q/arcgis/rest/services/NA_Political_Divisions_Polygons/FeatureServer/6) |

</div>

## Layer Details

### External Sources
*The following layers are consumed from external, authoritative sources. These sources include Vermont agencies and departments and external partners like the NWS, USGS, FEMA, etc.*

??? info "NWS Weather Stations"
    **Source:** [NWS](https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NOAA_METAR_current_wind_speed_direction_v1/FeatureServer/0)  
    **Geometry Type:** Point  
    **Coordinate System:** Web Mercator (EPSG:3857)  
    **Update Method:** Automatically updated by NWS

    **Pop-Up Attributes:**
    
    - `STATION_NAME`: Unique weather station name
    - `OBS_DATETIME`: Date and time of reported observation
    - `WIND_DIRECT`: Wind direction recorded by weather station (in degrees)
    - `WIND_SPEED`: Wind speed recorded by weather station (in km/h)
    - `TEMP`: Temperature recorded by the weather station (in fahrenheit)
    - `SKY_CONDTN`: Description of sky conditions
    - `VISIBILITY`: A measure of the horizontal distance at which a person can clearly see and identify a prominent dark object against the horizon sky (during the day) or a moderately intense light source (at night)

    **Symbology:**

    Color-coded by `WIND_SPEED`<br>
    Icon: Geometric symbols imported from ESRI basic polygons<br><br>
        ![NWS Weather Station Symbology Screenshot](../images/maps/nws-weather-stations-symbology.jpg)

    **Filter:**

    Filtered by `Country Name`<br><br>
        ![NWS Weather Stations Filter Screenshot](../images/maps/nws-weather-stations-filter.jpg)

    !!! warning "NWS Weather Stations Updates"
        NWS weather data is "near real-time. The data displayed in the weather map is typically 5 to 20 minutes old and the standard update cycle is only once per hour unless something of importance happens.

??? info "RAWS Weather Stations"
    **Source:** [NIFC](https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/PublicView_RAWS/FeatureServer/1)  
    **Geometry Type:** Point
    **Coordinate System:** WGS1984 (EPSG:4326) 
    **Update Method:** Automatically updated by NIFC

    **Pop-Up Attributes:**
    
    - `Agency`: Agency that owns the stations (e.g., USFS, BLM, etc.).
    - `StationName`: Unique weather station name
    - `Status`: Weather station status (A = Active, I = Inactive, M = Maintenance)
    - `Ob Time`: The time the sensor actually took the reading
    - `Elevation`: Ground elevation of the weather station (in feet)
    - `Air Temperature, Standard Placement`: Standard ambient air temperature (in fahrenheit)
    - `Relative Humidity`: The percentage of water vapor present in the air compared to the maximum amount the air can hold at the same temperature (in %)
    - `Rain Accumulation`: Cumulative rainfall at the site, relative to a start date on October 1st (rainfall = 0) and accumulate until September 30th of the following year
    - `Wind Speed MPH`: Wind speed recorded by weather station (in mph)
    - `Wind Direction`: Wind direction recorded by weather station (in degrees)
    - `Solar Radiation`: The intensity of sunlight hitting the ground (in W/m²)
    - `Fuel Moisture`: The moisture content of dead vegetation (specifically "10-hour" fuels, which are sticks 1/4" to 1" in diameter) - (in %)
    - `Fuel Temperature`: The temperature of the fuel stick
    - `MesoWest Detailed Weather Link`: A website run by the University of Utah that aggregates all US weather data
    - `NOAA Detailed Weather Link`: The National Weather Service observations page

    **Symbology:**

    ESRI basic point<br>
    Icon: Geometric symbols imported from ESRI basic polygons<br><br>
        ![RAWS Stations Symbology Screenshot](../images/maps/raws-weather-stations-symbology.jpg)

    Filtered by `State`<br><br>
        ![RAWS Weather Stations Filter Screenshot](../images/maps/raws-weather-stations-filter.jpg)

    !!! warning "RAWS Weather Stations Updates"
        RAWS weather data is "near real-time. The stations are programmed to report a new observation every hour.

??? info "NWS Radar"
    **Source:** [NWS](https://opengeo.ncep.noaa.gov/geoserver/conus/conus_bref_qcd/ows)<br>
    **Geometry Type:** n/a (Image Service)  
    **Coordinate System:** WGS1984 (EPSG:4326)<br>
    **Update Method:** Automatically updated by ESRI

    This image service displays the NWS CONUS_BREF_QCD radar product. CONUS = Continental United States, BREF = Base Reflectivity, which is the "raw" echo intensity from the lowest tilt of the radar (0.5°), which shows what is happening closest to the ground, and QCD = Quality Controlled Data. This means the NWS has run an algorithm to remove "non-meteorological" noise, such as ground clutter (buildings/mountains) or sun spikes, to clean up the image. Units are dBZ (Decibels of Z), which is a logarithmic scale representing the energy reflected back to the radar dish.

    **Symbology:**

    ESRI Image Service<br>
    Color Ramp: Pre-defined symbology by NWS<br><br>
        ![NWS Radar Symbology Screenshot](../images/maps/nws-radar-symbology.jpg)

    **dBZ Range Interpretation:**

    *This table outlines the standard relationship between radar reflectivity values (measured in dBZ) and precipitation intensity. Note that the same dBZ value indicates different conditions depending on whether the precipitation is liquid (rain) or frozen (snow/hail). While high values (>50 dBZ) typically indicate heavy rain in summer, even moderate values (30–40 dBZ) can signify dangerous whiteout conditions during winter storms.*

    <div class="no-datatable" markdown="1">

    | dBZ Range | Intensity Category | Summer Interpretation | Winter Interpretation |
    |-------|------------|------|--------|
    | < 10 | Non Precipitation | Clouds, fog, smoke, or dust | Very light snow flurries or ice crystals |
    | 10 - 20 | Very Light | Light mist or drizzle | Winter Light snow (trace accumulation) |
    | 20 - 30 | Light | Light steady rain | Moderate snow accumulation |
    | 30 - 40 | Moderate | Moderate rain | Heavy snow (whiteout conditions) |
    | 40 - 50 | Heavy | Heavy rain | Extremely heavy snow or sleet mix |
    | 50 - 60 | Intense | Very heavy rain / thunderstorms | Hail is likely forming |
    | 60 - 70 | Extreme | Flash flood producing rain | Severe hail (golf ball+ size) |
    | > 70 | Catastrophic | Extreme storm core | Giant hail (baseball+ size or debris) |
    
    </div>

??? info "Current Wildfire Incidents"
    **Source:** [NIFC](https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer/0)<br>
    **Geometry Type:** Polygon  
    **Coordinate System:** WGS1984 (EPSG:4326)<br>
    **Update Method:** Manually updated by the NIFC

    **Pop-Up Attributes: (based on Wildfire Data Dictionary - [IRWIN SCHEMA](IRWIN_Data_Service_Users_Guide.pdf))**
    
    - `INCIDENTNAME`: Fire incident name
    - `UNIQUEFIREIDENTIFIER`: Unique identifier assigned to each wildland fire
    - `CALCULATEDACRES`: the number of acres within the current perimeter of a specific, individual incident, including unburned and unburnable islands
    - `DAILYACRES`: A measure of daily acres reported for a fire. 
    - `CAUSE`: Broad classification of the reason the fire occurred identified as human, natural or unknown
    - `CONTROLDATETIME`: The date and time a wildfire was declared under control
    - `FINALACRES`: Reported final acreage of incident
    - `FIREDISCOVERYDATETIME`: The date and time a fire was reported as discovered or confirmed to exist. May also be the start date for reporting purposes
    - `CONTAINMENTDATETIME`: The date and time a wildfire was declared contained
    - `FIREOUTDATETIME`: The date and time when a fire is declared out
    - `MODIFIEDONDATETIME`: Date/time that the IRWIN Incident record was last modified
    - `PERCENTCONTAINED`: Indicates the percent of incident area that is no longer active.
    - `FATALITIES`: The total number of deaths of personnel assigned to an incident
    - `INJURIES`: The total number of reportable occupational injuries and illnesses that occurred in conjunction with an incident
    - `RESIDENCESDESTROYED`: The total number of residences destroyed, or damaged to an extent requiring rebuilding, as a result of a fire
    - `OTHERSTRUCTURESDESTROYED`: The total number of structures, other than residences, destroyed as a result of a fire
    - `TOTALINCIDENTPERSONNEL`: The total number of personnel assigned. Includes overhead, crewmembers, helicopter crewmember, engine crewmembers, camp crew people, etc.
  
    **Symbology:**

    Fire symbol imported from [ESRI Public Safety Stylesheet](https://esri-styles.maps.arcgis.com/home/item.html?id=b75a84b25d084eefadb87b57c50939f6)<br>
    Icon: Pre-defined symbology by NIFC<br><br>
        ![Current Wildfire Incidents Symbology Screenshot](../images/maps/vt-wildfire-incidents-symbology.jpg)

    !!! warning "Current Wildfire Incidents Updates"
        This layer may not reflect the most current wildfire locations (there is often a delay in updating).

??? info "Current Wildfire Perimeters"
    **Source:** [NIFC](https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer/1)<br>
    **Geometry Type:** Polygon  
    **Coordinate System:** WGS1984 (EPSG:4326)<br>
    **Update Method:** Manually updated by the NIFC

    **Pop-Up Attributes: (based on Wildfire Data Dictionary - [IRWIN SCHEMA](IRWIN_Data_Service_Users_Guide.pdf))**
    
    - `INCIDENTNAME`: The incident name as stored in the polygon source record
    - `CALCULATEDACRES`: the number of acres within the current perimeter of a specific, individual incident, including unburned and unburnable islands
    - `CREATEDATE`: System generated date for the date time the source polygon record was created (stored in UTC)
    - `UNITID`: NWCG Unit Identifier to identify the unit with jurisdiction for the land where the point of origin of a fire falls

    **Symbology:**

    ESRI basic polygon<br>
    Icon: Pre-defined symbology by NIFC<br><br>
        ![Current Wildfire Perimeters Symbology Screenshot](../images/maps/vt-wildfire-perimeters-symbology.jpg)

    !!! warning "Current Wildfire Perimeters Updates"
        This layer may not reflect the most current wildfire perimeters (there is often a delay in updating).

??? info "Vermont Fire Danger (Daily)"
    **Source:** [VTFPR](https://anrmaps.vermont.gov/arcgis/rest/services/map_services/MAP_ANR_ANRATLASFPR_WM_NOCACHE/MapServer/50)<br>
    **Geometry Type:** Polygon  
    **Coordinate System:** Vermont State Plane (EPSG:32145)<br>
    **Update Method:** Updated daily by Vermont FPR

    **Pop-Up Attributes:**
    
    - `FIREDANGER`: LOW, MODERATE, HIGH, VERY HIGH, EXTREME
    - `FDRA`: Fire danger rating area identifier (e.g., FDRA2, FDRA3, etc.)
    - `NOTES`: Relevant notes shared by VT FPR staff
  
    **Symbology:**

    ESRI basic polygon<br>
    Icon: Pre-defined symbology by VTFPR<br><br>
        ![VT Fire Danger Symbology Screenshot](../images/maps/vt-fire-danger-symbology.jpg)

### Basemap
Default: **Topographic** for visualizing data relative to Vermont's variable topography

## Performance Notes

For optimal performance with this map:

- Recommended to keep 4-5 layers active simultaneously
- Turn off reference layers when not needed
- Use time filters to limit historical data queries

## Related Documentation

- [Situational Awareness Map](situational-awareness-map.md)
- [Weather Map](weather-map.md)
