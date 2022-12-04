<h1>Social Scoop</h1>

Social scoop is a social media plattorm built using react, React Bootstrap, Bootstrap, Sass, Axios and Javascript. What the site is about is that people who register can make posts and share it with other people.

<h2>Technologies used</h2>
<li>React</li>
<li>Bootstrap@5.2.2</li>
<li>Yup validation</li>
<li>Sass</li>
<li>Axios</li>

<h1>How to install and setup</h1>
Clone this repository. You have to have node and npm installed globally on your machine.

Here are the installation:
npm install

Start server:
npm start

The app will appear on a 3000 port if you do not have something else running on port 3000.
And to view it in the browser localhost:3000.

<h1>My reflection on the project</h1>

I worked for 7 weeks on this project and it is my final project exam at noroff. During these weeks I was going to use what I have learned over my two years studying front end at noroff and make a social media site where people can register and make posts and share them with others.

I used create-react-app and react-router-dom to build the site. I used react-Bootsrap, Bootstrap and Sass to style the project.
When it comes to making components and having the code organised in folders I belive I have done a good jobb. I have multible folders that shows whats in them. And the components names are sensible in my oppinion. The site is fully responsive accros all platform due to using the bootstrap framework and some media querries.

I used Yup for the form validation and that worked perfect. React useState and useEffect from axios I have used for handeling requests and making access control. For example form to edit and delete a post is only available to do if you are the one owning the post otherwise you get a error message saying you do not have premission to do that. You will be able to register and then redirected to a login form where you can login and if you are logged in successfully you get access to the posts page and you get two new navigation places, one is a logout button and the other one is a add post button. They are only available and viseble if you are logged in with a valid user with a spesial email. A email that has for example Adrian.lafjell@stud.noroff.no is the only valid email, one that has @stud.noroff.no of course.

The project was not easy at all. I had very many chalanges and where not able to make a few of the criterias. I did not get the reacion buttons to work as they should. The comment field I did not get to work either and the profile page and to be able to follow other people I was not able to make work. It is unfortunate but I could not figure it out. But otherwise I am happy with how the site looks and works.
