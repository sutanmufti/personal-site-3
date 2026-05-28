+++
date        = '2022-08-16T00:00:00+07:00'
draft       = false
title       = 'Spatial Data Science: Javascript & Python'
tags        = ['programming', 'javascript', 'python', 'GIS', 'spatial data science']
description      = 'From data engineering to full stack application, the languages that you need. Getting started, and curated learning resources.'
Summary          = 'From data engineering to full stack application, the languages that you need.'
featured_image   = "main_image.jpg"
+++

*From data engineering to full stack application, the languages that you need. Getting started, and curated learning resources.*

## Introduction

Getting to advanced GIS means doing programming. It is inevitable. It is just way easier when you know how to script some code. For instance, creating a custom plugin for your QGIS, or adapting an already existing plugin, creating a ribbon tool in ArcGIS Pro and many more. Usually new programmers ask themselves: "which programming language should I employ?" The answer is it depends on what you want to build. In the case of GIS, the prevalent ones that most people will use are Javascript and Python.

Python has been my best friend for some years now. It has accelerated my career as a transport and urban planning consultant and contributed to major transportation infrastructure development programmes. The fact that it is free is just immensely impressive. In this article I will share why it is my best friend.

The other language is Javascript. Javascript is very tempting to be ridiculed because of the syntax, and this has been the joke in r/programminghumors. Jokes aside, it is an amazing language that allows our browsers to interact with us. Syntax wise I think it is weird; despite that, it is so powerful. In this article, let's explore how Javascript adds value in spatial data science practice.

Finally, HTML, despite not being mentioned in the title, plays a crucial role in tying things together. You need to present data and this is how you present it. It is the file in your web browser; it is the web page that you are looking at right now.

## Compiled vs. Interpreted Languages

Before we go into the languages, it is important to understand the two categories of programming languages: compiled and interpreted.

In brief:

- **Compiled language**: code written in a text editor is converted by software into an executable file (usually ending with `.exe` on Windows). We cannot use the source files themselves; what we use is the compiled executable.
- **Interpreted language**: code is executed line-by-line by another executable file called the interpreter. Python and Javascript are in this category.

Python and Javascript both require an interpreter to be installed before running any code. For Python, that is the Python interpreter. For Javascript, it is NodeJS, or the browser you are using right now.

Code is just a bunch of text files. What matters is that it can be read and executed by the interpreter.

## Python

Python is a general purpose programming language that can do almost anything. It is often compared to R, however, if you are going to dwell in spatial data science, I recommend settling with Python. This is because of its flexibility: it can connect to a vast ecosystem of modules. R is much more optimised for academic and statistical work. But if you are making an ArcGIS or QGIS plugin, you will not be writing it in R.

The main strengths of Python are:

- Great for any purpose, despite being relatively slow, it is fast enough for most cases you will encounter
- Connects with any computer science task
- Easy to learn: the language philosophy demands that code must be as humanly readable as possible

### Spatial Data Analysis and Modelling

In spatial data science, Python is primarily employed for data analysis and spatial modelling. This is largely because of **Jupyter Notebook**, a file containing cells where each cell holds code that we can execute and directly see the output. This is data science 101.

When it comes to spatial data modelling and analysis, we use `pandas` and `geopandas` (the R equivalent is the `sf` module). It is much more convenient to use these two modules inside a Jupyter Notebook and export the result as a PDF or a spatial data format like shapefiles or GeoJSON.

### Data Engineering

Analysing data is straightforward when the data is already present. However, data are often scattered across many servers and sources. Data engineering brings these scattered datasets into a usable form for analysts. The most fundamental role is performing ETL (Extract, Transform, Load). Tools like Apache Airflow require Python as the main language.

### Full Stack Application

The most popular libraries to learn are **Django** and **Flask**. Both are capable of producing a full stack application or serving as a web framework. I personally use Django as I am more familiar with it, but if you need to build a quick simple API, Flask is much more suitable.

### Getting Started with Python

Do not install from the official Python website (python.org). Instead, install **Anaconda**. Anaconda is a Python distribution which includes Conda as the package manager. Anaconda is essential in spatial data science, especially for newcomers, because we will use GDAL (Geospatial Data Abstraction Library). If you can install GDAL on Windows, you have effectively set up Python correctly.

Here are some curated resources and advice for learning Python:

- First, learn how to use the terminal. Learn how to invoke the Python console and navigate through folders.
- Learn basic syntax: `if` statements, `for` loops, etc.
- Learn data structures: arrays and dictionaries.
- Many tutorials will advise you to use PyCharm. I suggest avoiding PyCharm if this is your first time programming. You need to understand how terminals work; PyCharm automates this away. Build that foundation first.

Dr. Chuck's *Python for Everybody* is an excellent starting point. It also gives a brief lecture on computer science fundamentals beyond just Python syntax.

## HTML

Hypertext Markup Language (HTML) is not a programming language. It is a language used to dictate which element goes where, a layout language for your browser.

The results of Python data analysis can be presented in HTML format. For instance, the `Folium` module in Python converts geospatial information into an HTML map that makes our map interactive. It uses the JavaScript Leaflet library, which we will discuss next.

### Getting Started

HTML is as old as the web. Create a text file and end it with `.html`. Inside that file, type:

```html
<html>hello world, this is an html file</html>
```

Drag it into your browser and you have a web document.

Now try this:

```html
<html>
  <div style="position:absolute;top:0;right:0;">this is in the top right.</div>
  <div style="position:absolute;top:0;left:0;">this is in the top left.</div>
</html>
```

You should see the text appear in the top right and top left corners of the browser. `div` is the container, and we lay out these containers. In terms of spatial data science, this is exactly how we lay out interactive maps.

### Learning Resource

[W3Schools](https://www.w3schools.com) provides simple, practical HTML tutorials and is a great starting point.

## Javascript

Javascript is the language that makes our browser interactive. HTML is static; it only serves text and images. Pushing a button, spinning loading wheels, elements that pop up, notifications that update automatically: all of that is dictated by Javascript.

Javascript was originally developed as a front-end language to make browsers interactive. Then NodeJS was created (by Ryan Dahl) to allow Javascript to run in the machine's environment rather than just in the browser. This enables server-side programming to handle requests from the front end, which is also called back-end engineering.

In spatial data science, the most direct use of Javascript is as a front-end language for web maps, producing maps that are interactive for users. Popular libraries include:

- **Leaflet.js**
- **OpenLayers**

Both follow OGC standards so they can connect to any geospatial server easily.

### Getting Started

You are running Javascript right now. Open your browser and open the developer tools (right click, "Inspect Element"). Navigate to the Console tab. Try typing:

```javascript
console.log("hello world")
```

Congratulations, you just ran Javascript. The next step is to write lines of code in a `.js` file that is interpreted by the browser. Just like Python, but in the browser.

### Learning Resource

I suggest learning NodeJS. This gives the experience of learning Javascript in the same way you would learn Python, but with Javascript syntax. NodeJS gives you the flexibility to work as either a backend or front-end engineer.

Vanilla Javascript (the core language and its fundamentals) can also be learned from [W3Schools](https://www.w3schools.com/js/). If you only care about simple web pages, vanilla Javascript is what you need. Learn it to manipulate the DOM (Document Object Model) and display data.

## Putting It All Together

We know how to perform spatial data analysis using Python. Write scripts that do the analysis for you, substituting the point-and-click workflow. Convert raw data into usable insight. Those insights then need to be visualised so that everyone can understand them.

Visualisation is done using Javascript libraries. Maps are produced using tools like OpenLayers or Leaflet.js. ArcGIS Online is another option if you are working within an Esri environment. Once you have the maps, you lay them out for the audience.

This is where HTML comes in. Make it presentable using CSS (Cascading Style Sheets) to dictate fonts, colours, and layout. HTML is the wrapper for the maps we produce. Finally, deploy everything to a server, or zip it statically and share it.

## Conclusion

Python is used as the analysis and modelling tool. Javascript is used to make things interactive and present the maps. HTML is used to lay everything out and wrap it all together. Both Javascript and Python can be used to develop full stack applications or anything related to mapping.

### A Note on Depth

This article provides the high level idea of how things work within the spatial data science realm. The technical details are what matter most, because a tiny bug will cause failure for the whole project. For instance, deploying to a server requires understanding how servers work, or what TCP/IP is; creating modules in both Javascript and Python; understanding logging to mitigate bugs; version control with Git; and much more. There is a reason every coding tutorial is 17 hours long, and that is just the code. Everything needs to work, and some things need to work first. That is what this article has discussed.
