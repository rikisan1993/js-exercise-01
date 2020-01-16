# js-exercise-01
Javascript Exercise based on Clément Mihailescu's interview with Tim on Google Coding Interview mock
https://www.youtube.com/watch?v=3Q_oYDQ2whs

## Description
Given two users calendar, find free slot during their time in the calendar, where the two can have a meeting in set time window

## Requirements
use Node.js to run sample case (output will be logged to console), 
or you can import the script to any your project and call ```process``` function

```process``` function takes 5 parameters :
 - user 1 time
 - user 2 time
 - user 1 available time range
 - user 2 available time range
 - meeting duration (in minute)
 
 parameter 1 to 4 takes array of times using format of [['hh:MM'], ['hh:MM'], ...], using 24H format
 
 ## Sample Case
 ```
 const p1time = [
    ['9:00', '10:30'],
    ['12:00', '13:00'],
    ['16:00', '18:00']
  ];
  const p1range = ['9:00', '20:00'];
  const p2time = [
    ['10:00', '11:30'],
    ['12:30', '14:30'],
    ['14:30', '15:00'],
    ['16:00', '17:00']
  ];
  const p2range = ['10:00', '18:30'];
  const window = 30;
  ```
  
  and the result would be
  ```
  [['11:30', '12:00'], ['15:00', '16:00'], ['17:00', '18:30']]
  ```
 
