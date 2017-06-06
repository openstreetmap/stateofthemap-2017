---
layout: ja/eventja
title: Global traffic with OSRM
theme: Transport, routing and urban planning
theme_full: Transport, routing and urban planning
category: Transport, routing and urban planning
audience: "(2a) Data users: Commercial"
audience_full: "(1a) Data contributors: Community, (1b) Data contributors: Public administration (open data, data feedback...), (1c) Data contributors: Companies (data feedback, driven by need of data...), (2a) Data users: Commercial, (2b) Data users: Non-profit and public service, (2c) Data users: Personal"
name: Daniel Patterson
organization: Mapbox
twitter:
osm: danpat
room: Main hall
tags:
  - turn20
youtube_recording:
---
[OSRM](www.project-osrm.org) is a high-performance navigation engine designed to work with OpenStreetMap data. OSRM is capable of calculating long-distance (cross-country) shortest-path routes on a planet sized datasets in milliseconds.

Introducing traffic data into OSRM while maintaining fast route queries breaks some assumptions. This talk will describe recent additions to the OSRM codebase that allow it to ingest planet-sized realtime traffic data in sub-minute timescales, while still maintaining millisecond length routing queries.I'll then talk about future plans for OSRM, including the addition of time-dependent route calculation, and customizable routing options, and the challenges these plans presents.

