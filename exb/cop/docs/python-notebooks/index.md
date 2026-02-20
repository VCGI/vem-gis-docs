# AGO Hosted Python Notebooks

The VEM COP ingests feature layers stored in the VEM AGO that are created and upated using the following Python notebooks. Additional information about these layers can be found by reviewing the [Maps Section](../maps/index.md).

## ETL Data Layers 
⚠️ The layers below are currently linked to external sources but will eventually be replaced with internal VEM-hosted links.

<div class="no-datatable" markdown="1">

| Group | Layer Name | Symbology | Source |
|-------|------------|----------------|-------------|
| Traffic | VT 511 Incidents | Classified by `severity` | [VT 511](https://gis.ne-compass.com/server/rest/services/Hosted/Vermont_View/FeatureServer/2) |
| Traffic | VT 511 Waze Reports | Classified by `ReportType` | [VT 511](https://services9.arcgis.com/cb6eDXWVgAvVXeIK/arcgis/rest/services/Vermont_511_Waze_Reports_20250826_232835501446/FeatureServer/0) |
| FEMA | FEMA Designated Counties | Classified by `designate` | [FEMA](https://gis.fema.gov/arcgis/rest/services/FEMA/DECS_ALL/FeatureServer/0) |
| FEMA | FEMA Emergency Designated Counties | ESRI basic polygon | [FEMA](https://gis.fema.gov/arcgis/rest/services/FEMA/DECS_ALL/FeatureServer/1) |

</div>

## ETL Process Documentation

The following Python notebooks handle the background data processing for VEM-hosted feature layers consumed by the Experience Builder dashboard.

!!! info ":material-traffic-light:  ⚠️ 511 Data Extraction Notebook"
    Extracts traffic incident data and Waze reports from VT 511. <br>This notebook is manually executed after the SEOC has been activated above level 3. This means the data displayed in the VEM COP is out-of-date and users should visit the [VT 511 Website](https://newengland511.org/region/Vermont).<br>You can view the full, documented code in the VCGI repository below:

    [ :material-github: **VCGI / vem-gis-tools / VT Outages** ](https://github.com/VCGI/vem-gis-tools/blob/main/etl/VT-511-Data-Extraction.ipynb){ .md-button .vt-green-btn }
    ![](https://img.shields.io/badge/Language-Python-blue)
    ![](https://img.shields.io/badge/Status-Active-success)
    ![](https://img.shields.io/badge/Data%20Source-VT 511-lightblue)


!!! info ":material-power-plug-off-outline:  VT Outages Data Extraction Notebook"
    Extracts VT power outage counts by town. <br>This notebook is manually executed after the SEOC has been activated above level 3. This means the data displayed in the VEM COP is out-of-date and users should visit the [VT Outages Website](https://vtoutages.org).<br>You can view the full, documented code in the VCGI repository below:

    [ :material-github: **VCGI / vem-gis-tools / VT Outages** ](https://github.com/VCGI/vem-gis-tools/blob/main/etl/VT-Outages-Data-Extraction.ipynb){ .md-button .vt-green-btn }
    ![](https://img.shields.io/badge/Language-Python-blue)
    ![](https://img.shields.io/badge/Status-Active-success)
    ![](https://img.shields.io/badge/Data%20Source-VT Outages-orange)


!!! info ":material-home-flood:  VT Disaster Declarations Extraction Notebook"
    Extracts and Summarizes FEMA disaster declarations in Vermont. <br>This notebook is manually executed after a new declaration has been announced.<br>You can view the full, documented code in the VCGI repository below:

    [ :material-github: **VCGI / vem-gis-tools / Disaster Declarations** ](https://github.com/VCGI/vem-gis-tools/blob/main/etl/VT-Disaster-Declarations-Extraction.ipynb){ .md-button .vt-green-btn }
    ![](https://img.shields.io/badge/Language-Python-blue)
    ![](https://img.shields.io/badge/Status-Active-success)
    ![](https://img.shields.io/badge/Data%20Source-FEMA-red)


## Related Documentation






