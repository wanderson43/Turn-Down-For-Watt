# Turn Down For Watt

The Turn Down For Watt is web application used for tracking the energy consumption of freshman residence halls.

### Prerequisites

What things you need to install the software and how to install them

```
Download Django
```

## Local Hosting

python manage.py runserver


## Built With

* [Django](https://www.djangoproject.com/) - The web framework used

## Authors

* **Faisal Gedi** 
* **Omar Baradei**  
* **Shivani Upadhayay** 
* **William Anderson**
* **Nikole McLeish** 

## Acknowledgments

* Hat tip to anyone who's code was used
* We love anyone who uses this web app

## Release Notes version Turn Down For Watt v1.0
* NEW FEATURES *
	Added form submissions to about page
	Added ability to view graphs and energy data
	Added sqlite3 database
* BUG FIXES *
	Navigation between different web pages
	Form submission now properly submits to database without crashing page
* KNOWN BUGS *
	D3 graphs fails to render under certain circumstances (yet to figure out when)
	Individual dorm floors don’t dynamically display graphs

## Install Guide Turn Down for Watt v1.0
* PRE-REQUISITES
	You must have Django installed and configured before proceeding. see
	https://docs.djangoproject.com/en/2.0/topics/install/
* DEPENDENCIES
	Download and install python 2.7 (see https://www.python.org/downloads/)
* DOWNLOAD
	https://github.com/wanderson43/Turn-Down-For-Watt
* BUILD
	No build necessary for this app. download_zip contains an executable jar file
* RUNNING APPLICATION
	Launch a terminal window and type: python manage.py runserver
	Go to a web browser and type in the URL: localhost:8000
