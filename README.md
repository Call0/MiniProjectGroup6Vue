# Project Title: Railway Reservation System (Using Vue + Springboot)
This is the frontend repository for Railway Reservation System - <br>
(for zuul configuration repository go to: https://github.com/sujoydey13/ZuulApp) <br>
(for backend Booking and Searching Microservice repository go to: https://github.com/GamerbutCoder/RailwayBookingandSearching) <br>
(for backend Login Microservice repository go to: https://github.com/GamerbutCoder/RailwayLogin) <br>
(for Register Microservice repository go to: https://github.com/GamerbutCoder/RailwayRegistration) <br>
(for SearchAPI Microservice repository go to: https://github.com/GamerbutCoder/railwaySearchAPI) <br>

<h2>Requirements</h2>
<li>Visual Studio Code (VS Code)</li>
<li>Vue-cli</li>
<li>All backend microservices mentioned above</li>

<h2>How to run</h2>
The following files contain the axios post requests, in order to run the project, you must change the IP address and Port number provided in the url paths of axios post requests for these files based on the <b>zuul configurations</b>.
<li>src/components/navbar.vue --> Line no. 44, change IP address and port number in url path in axios post request with the IP address and port number (on which Zuul is running) of the machine running Zuul configurations</li> <br>
Do the same for the next files (line no.'s are specified)
<li>src/components/admin.vue --> Line no. 74</li>
<li>src/components/book.vue --> Line no. 74</li>
<li>src/components/historypane.vue --> Line no. 58</li>
<li>src/components/login.vue --> Line no. 73</li>
<li>src/components/register.vue --> Line no. 126</li>
<li>src/components/search.vue --> Line no. 88</li>
<li>src/components/train.vue --> Line no. 64</li>
<li>src/components/userprofile.vue --> Line no. 47</li>

Open the project in VS Code. Then run the following commands in the integrated terminal.
<li>npm install</li>
<li>npm run serve</li> -> to run the project
<li>npm run build</li> -> Compiles and minifies for production
<li>npm run lint</li> -> lint and fixes
<br>
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
