+++
type        = "projects"
title       = "LRT Jakarta Manggarai Extension: Boulevard Utara Catchment Simulation"
date        = "2022-06-01"
draft       = false
category    = "Transportation Modelling"
client      = "Undisclosed"
location    = "Jakarta, Indonesia"
year        = "2022"
tools       = ["Go", "RAPTOR Algorithm", "QGIS", "Python", "GTFS"]
solutions   = ["Passenger growth forecasting", "Catchment area simulation", "Unlocked region identification", "TOD development recommendations"]
+++

## Overview

This project examined the ridership and catchment impact of extending the LRT Jakarta line from Velodrome to Manggarai, connecting a suburban terminus to one of Jakarta's most important multi-modal transit hubs.

The central question: how dramatically would linking to Manggarai change the effective reach of the LRT network, and where would that unlock previously inaccessible urban areas for Transit-Oriented Development?

## Approach

To answer this, I implemented the **RAPTOR (Round-Based Public Transit Optimised Router) algorithm** from scratch in Go. RAPTOR processes GTFS timetable data and computes Pareto-optimal journeys across the network in discrete rounds, where each round *K* identifies the fastest path using exactly *K* trips, without requiring a priority queue, making it exceptionally fast for bulk simulation.

Key workstreams:

- **Bespoke routing engine**: Built the RAPTOR implementation in Go to handle the full GTFS network, enabling rapid simulation across multiple time windows and transfer parameters.
- **Catchment simulation**: Used Python to bulk-run simulations across dozens of origin stations and time scenarios, generating isochrone datasets representing the network's spatial reach before and after the extension.
- **Cartographic analysis**: Visualised results in QGIS to map the expansion of 30-minute catchment zones, identifying specific urban areas newly brought within reach of Central Jakarta.
- **TOD opportunity mapping**: Translated catchment data into station-level development recommendations, identifying Boulevard Utara as a high-potential Transit-Oriented Development node.

## Outcome

The analysis demonstrated that connecting to Manggarai could substantially grow network daily ridership, with targeted interventions unlocking significant uplift beyond the baseline. The study provided Jakpro and project stakeholders with a spatial and quantitative evidence base for pedestrian infrastructure investment and land-use intensification around key stations.
