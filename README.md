# C++ Web App

### 0. Tools

#### You will touch the follow technologies.

###### C++ (cgicc)
###### HTML/CSS
###### Google cloud (linux vm, vim)
###### Docker
###### Apache2 Web Server


### 1. Task 1 - Hacking.

###### Copy the repository on you computer:
```
git clone https://github.com/DevIncubator/New-Server
```
###### Create index.html file in the root of project directory. The file must has a html form with post method. And form must has a input element (or input area) with attribute name and submit button in the html form.
###### Edit file script.cpp. There is the function called getInt in the script file. Write your code in this function.
###### Create a CSS style for the form. FOR your taste.
###### Create repository and push the project. You need it later.

### 2. Create Environment
###### Go to cloud.google.com
###### Press "select a project" -> press "new project" -> type the project name -> press "create"
###### Press "menu |||" -> press "home" -> dashboard -> create resource -> compute vm instance
###### Button "sign up for a free trial" appears - press it.
###### Select country, mark agree licence and press continue.
###### Set follow fields: Tax information -> "Individual entrepreneur", type town, address line1, name, business name.
###### Set really credit card, type address of credit card or mark "Credit or debit card address is same as above" -> press "START MY FREE TRIAL"
###### Press "Marketplace" -> type "docker" -> search "Docker Engine Community on Ubuntu 18.04 LTS" -> Press "Launch" -> Mark "I accept..." -> Press "Deploy".
###### Press "Menu |||" -> "Home" -> "Dashboard" -> Click on "Compute engine" in Resources section -> click on your instance -> click on SSH (section remote access). Window with terminal will be open.
###### To check all our dependencies type follow commands. For example:
```docker --version``` output ```Docker version 19.03.12, build 48a66213fe```
```git --version``` output ```git version 2.17.1```
###### Press "Menu |||" -> "Home" -> "Dashboard" -> Click on "Compute engine" in Resources section -> Press "Set up firewall rules"
###### Press "Create firewall rule", select: "Action on match: allow", "Source IP ranges: 0.0.0.0/0", "Protocols and ports: Specified protocols and ports, tcp: 8080". Press "Create".

### 3. Deploy
###### Go to your git-repository and copy repository url
###### Type in terminal (terminal opened after the step 2 of this instruction) a command ```git clone <repository-url>```, where <repository-url> is your url (format is "https://github.com/username/reponame/").
###### Command "ls" show directories and files in the current directory, command "cd" move you in the selected directory.
###### Type ```cd dirname``` for go to the repository directory.
###### Now, open Dashboard (don't close terminal) and select you instance in resources section. Copy the external ip address.
###### Open the terminal and type ```vim index.html``` (How to use vim see here - https://www.howtoforge.com/vim-basics#:~:text=To%20start%20using%20vim%2C%20just,that%20you%20want%20to%20edit.&text=%5Benter%5D%20means%20to%20press%20the,are%20in%20insert%20mode%20now.)
###### Replace "localhost" to external ip address in html form.
###### Then type follow commands to build and run the app:
```
sudo docker build -t app:1.0 .
sudo docker run -d -p 8080:80 app:1.0
```
###### Port 8080 must be free, or write another port in the command.
###### Type in browser ```http:<external_ip>:8080/``` for check app.

*For stop project - type follow commands:*
```sudo docker ps -a```
*copy container name (last colunm of output of the command).*
*Type* ```sudo docker stop <container_name>``` *, where <container_name> is a name of the container.*

#### Congratulations - app is working!!!
