## Project Overview

This project involves the implementation of a 'Sport' class and a 'ContentRepository' class featuring a 'getFeaturedSports()' method to randomly select three sports. The 'SportsList' component is responsible for rendering these sports in a list, showcasing their names and descriptions. Users have the flexibility to rearrange the order of the sports through a drag-and-drop interface. Importantly, the order is persisted even after the page is reloaded, thanks to the utilisation of local storage.

## Technologies Used

- React
- React Beautiful DND
- React Hooks (useState, useEffect)

## Enjoyable Aspects

One of the highlights of this project was the creation of a React Component Library, marking my first attempt at the endeavour. While there were challenges in collecting diverse information and successfully publishing to npm, the sense of accomplishment upon overcoming these obstacles was immensely rewarding.

## Challenges Faced

A notable challenge was encountered in the process of persisting the list order to local storage. Despite several attempts and failures, the ultimate realization was that an unrelated useEffect in another part of the codebase was the source of the error. This experience underscored the importance of a comprehensive view when writing and debugging code.

## Skills Developed and Growth

Through this application, I delved into libraries and techniques that were previously unfamiliar, particularly those related to saving data to local storage. Inspired by the technologies employed, my next goal is to develop a React-based TODO list application with advanced features such as drag-and-drop, list saving, and deletion. While challenges often lead to frustration, this project allowed me to approach issues with a calm mindset, contributing to my personal growth.

## Areas for Improvement

In terms of styling, attempts were made to incorporate the CSS utility-first framework, CSSTailwind, a tool I have used several times before. Unfortunately, I encountered difficulties during the installation process, preventing its utilisation. For future projects, I aim to address these challenges and enhance my styling capabilities, potentially incorporating tools like CSSTailwind successfully.
