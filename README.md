# calculate-average-resolution-time
> A Script Include containing a classless function that calculates the average resolution time for incidents in a specific assignment group.


## Table of Contents
* [General Info](#general-information)
* [Project Status](#project-status)
* [Contact](#contact)


## General Information
- This classless function script include takes as parameter the assignment group defined in the calling script, queries all the closed incidents with said assignment group, counts them, and loops through them to sum up all the resolution times. Then, it will divide the total resolution time by the number of incident in order to get and return the average resolution time. This script include can be used to trigger events when the resolution time is too high and breaches the SLA.


## Project Status
Project is: _complete_


## Contact
Created by [@AxelBroeglin](https://www.axelbroeglin.dev) - feel free to contact me!
