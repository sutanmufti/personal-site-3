+++
date        = '2026-05-30T09:39:12+07:00'
draft       = true
title       = 'Modern 2026 Geospatial Analytics Stack: Which to Use?'
tags        = ['geospatial', 'spatial data science', 'urban analytics', 'GIS']
description = 'A spatial data scientist guide on which tool to choose to analyse geospatial data'
Summary     = 'A spatial data scientist guide on which tool to choose to analyse geospatial data'
featured_image = 'arcgis_pro.jpg'
+++


# Introduction

The geospatial analytics world has come to a more inclusive and powerful state. In the 1990s, there are only limited propietery software products to choose on to solve GIS problems. Nowadays, open-source software has prevailed taking on paid software as a worthy and robust alternatives; most notably, QGIS. "Alternative" is an understatement; it is one of the main options. 

The progress towards inclusivity has not stopped; it gets better and it is impressive. I have been in the GIS world for almost 10 years now and things have changed for good. In 2026, I decided to catch up with the latest tools to see what we have for spatial data scientists. Some tools I have played around with have impressed me. It got me thinking: "I am left out and I need to adopt this new tools".

I would like to share some of the tools I have played around with with some thoughts.


# The Classic Stacks

The classic stacks are software stacks that have proved themselves for years. I'd like to mention these GUI tools:

- ArcGIS Pro
- QGIS
- Postgresql with Postgis


## ArcGIS Pro


[![](arcgis_pro.jpg)](https://www.esri.com/about/newsroom/insider/understanding-arcgis-pro)

ArcGIS Pro is a professional desktop geographic information system application developed by Esri. It allows users to visualise, analyse, manage, and share geographic data in both two and three dimensions. Designed with a modern ribbon interface, the software integrates advanced mapping tools and spatial analysis features to help organisations make data-driven decisions. It also connects seamlessly with cloud platforms to facilitate collaboration and the sharing of spatial insights across teams.

> Special Features:
> - Enterprise support with decades of experience
> - ArcGIS Online; integrates with online map
> - ESRI software integration
> - Can publish maps online
> - Windows only

| Strength | Weakness |
|----------|------------|
|   Robust enterprise support       |        Expensive    |
|   Complete tools       | Certain analysis tools require licensing |
|   Collaborative working in centralise database; integrates with arcgis online      | Dependence on marked-up credit to operate server |
| Can publish map online | |


## QGIS

[![](qgis.png)](https://docs.qgis.org/latest/en/docs/user_manual/introduction/qgis_gui.html)

QGIS is a free and open-source desktop geographic information system application that provides data viewing, editing, and analysis capabilities. It operates across multiple operating systems and supports numerous vector, raster, and database formats through its flexible plugin architecture. Because it is community-driven, the software offers a cost-effective and highly customisable alternative for individuals and organisations looking to perform complex spatial analysis and create professional maps without licensing constraints.

> Special Features:
> - Free and open-source
> - Can do what ArcGIS Pro mostly does
> - Multi-OS
> - Windows only

| Strength | Weakness |
|----------|------------|
| C++ written; app is super fast | GUI feels old |
| Free | No enterprise support |
| All tools are available, no paywall, no vendor lock in | No online server to publish maps; requires independent setup |
| Community plugin ecosystem | Collaborative work on a centralised database requires independent setup |
| Integrates seamlessly with open-source tools such as GDAL/Postgis ||

## Postgis

[![](postgis.png)](http://postgis.net/workshops/postgis-intro/geometries.html)

PostGIS is an open-source software program that adds support for geographic objects to the PostgreSQL object-relational database. It extends the database's capabilities, allowing it to store and query spatial data such as points, lines, and polygons. With its robust support for spatial indexing and advanced SQL functions, users can run complex geographic queries and analysis directly within the database. This makes it a crucial backend component for powering large-scale web mapping applications and enterprise geographic information systems.

> Special Features:
> - Free and open-source
> - Operated with SQL
> - Lives in a server
> - A database


| Strength | Weakness |
|----------|------------|
| Highly efficient spatial indexing and SQL-native analysis for massive datasets | Lacks a native graphical user interface for visual mapping, requiring external software like QGIS |
| Free and open-source with no licensing costs or vendor lock-in | High learning curve, requiring strong proficiency in SQL and database administration |
| Exceptional multi-user editing and enterprise-grade concurrent data handling | Requires independent server setup, maintenance, and backup infrastructure |
| Seamlessly integrates with major GIS software, web frameworks, and libraries | Complex spatial queries can cause server performance bottlenecks if indexes are not properly configured |
| Fully standards-compliant, supporting a vast array of geographic formats and functions ||