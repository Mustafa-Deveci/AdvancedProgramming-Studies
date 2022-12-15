2022-2023 Advanced Programming Techniques course studies

##
CW#0 - Browser Tools -> [Solution](https://mustafa-deveci.github.io/AdvancedProgramming-Studies/Classworks/Counting.html)

1. Translate Counting.html to Turkish. Also modify colors as you like.

2. Looping a triangle exercise at the end of Chap 2:

s=''; while (     ) {s=   ; console.log(s)}
(just complete this line, no need to define a function)
Put into LMS a single screenshot (converted to PDF) showing both answers in the console.

##
CW#1 - IBAN Verification -> [Solution](https://mustafa-deveci.github.io/AdvancedProgramming-Studies/Classworks/IBANverify.html)

0. Make a private GitHub repo for your exclusive use in this course. User name should identify you, repo name cannot be BLM305 or 2022. Enable GitHub Pages.

1. Make a simple web page to verify IBAN using verifyIBAN() and put it to your private repo.
Reference: maeyler.github.io/JS/math/TCKimlik

2. Remove all white space using replaceAll(/\s/g, '')

3. Add a ⊕ button which adds 97 to the current input
(valid IBAN's are separated with a difference of 97)

You will submit a screenshot (max-width: 600px) to summarize all your work (include valid and invalid numbers)
##
CW#2 – Text to Objects -> [Solution](https://mustafa-deveci.github.io/AdvancedProgramming-Studies/Classworks/List%20of%20Objects.html)

Copy this file to your local repo
https://blm305.github.io/2022/work/ObjectList

1. Find a small table (Web page, Excel sheet, etc) and convert it to an array of objects

2. Demonstrate Array methods (map() and filter()) using this data

Put your code, your explanation, and a screen shot on the same PDF file
##
CW#3 – Object Inspector -> [Solution](https://mustafa-deveci.github.io/AdvancedProgramming-Studies/Classworks/Inspector.html)

Use the Inspector -- no need to copy to your local repo
https://blm305.github.io/2022/work/Inspector

1. Demonstrate the use of the Menu:

* Invoke one method on each object in the Menu

* Test deepEqual() method on two Arrays with the same content


2. Reload and invoke filter() and map() methods on JOURNAL of Chap4

##
CW#4 – Fetching Remote Files -> [Solution](https://mustafa-deveci.github.io/AdvancedProgramming-Studies/Classworks/xxx.html)

Put a copy of this file to your repo https://blm305.github.io/2022/work/fetch.html

Modify title, xxx items, and the default URL (must be different for each student)

Complete init() and check() functions so that xxx items on the page are filled with correct values. Battery level must be an integer percent value. Latitude/Longitude must be in this order, with 4 digits after the decimal point, separated by a comma.

Take a partial screen shot of the page only (max 600px width) – do not include the console. Put the image into the required PDF.

##
CW#5 -- Event listeners -> [Solution](https://mustafa-deveci.github.io/AdvancedProgramming-Studies/Classworks/EventListener.html)

Copy and modify your web page for CW4

Listen to the following events:

b.onlevelchange, b.onchargingchange where b is BatteryManager
onoffline, ononline, onkeydown, onkeyup (using window object)
Here is the desired output: 
Events

##
CW#6 -- GitHub users API  ->  [Solution](https://mustafa-deveci.github.io/AdvancedProgramming-Studies/Classworks/GitHub_Users.html)

Copy the following page to your own repo and replace it:
https://maeyler.github.io/JS/api/GitHub_Users

1. You must have an avatar that represents you on GitHub. It could be a close-up of a face, a drawing, or a logo. We will use this on the project page.

2. Discard the excess on the page, when you enter your own username and the data should come.

##
CW#7 -- Open Weather API  ->  [Solution](https://mustafa-deveci.github.io/AdvancedProgramming-Studies/Classworks/OpenWeather.html)


https://blm305.github.io/2022/work/Weather.html

Copy it to your own repo, add it to your homepage. Show the weather inside the canvas element. Thus, you get a copyable picture of the weather forecast.

You will need a KEY to run the application, if you still do not receive it, use the key provided in the mail: 1e198835246bf67f6fdee02ed5f4786e

Show/describe your work in a PDF report -- the code you add must be in the Report

##
CW#8 -- Open Maps API  ->  [Solution](https://mustafa-deveci.github.io/AdvancedProgramming-Studies/Classworks/OpenMapsAPI.html)

Add a map to the Weather app
 (Make a new file, don't mess with the CW#7 assignment)

* No redundancy on the screen (code, reference, etc.)

* Show your original location with zoom=10

* Show weather while centering given/Clicked Lat/Long point:
    MAP.on('zoom', report) // not needed
    MAP.on('click', ...) //show weather
* Bonus: Find the name of the country from the abbreviation

Have only the weather and the map on the page you made. Upload your changes to the code and screenshot as PDF. The code you add must be in the PDF
