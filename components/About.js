const AboutMe = () => {
  return (
   	<div className="row section-intro">
   		<div className="col-twelve">

   			<h5>About</h5>
   			<h1>A little bit about myself</h1>

   			<div className="intro-info">

   				<img src="/images/armenia-crop.jpg" alt="Profile Picture" />

   				<p className="lead">
             I'm an Armenian-Argentinian software developer and journalist, living in Berlin with an Italian passport.
             I'm a self taught developer, and I like to read and watch movies. I've had the luck of combining
             my passion for technology, news and politics in different projects.
           </p>
   			</div>   			

   		</div>   		
   	</div> 
  )
}

const Buttons = () => {
  return (
   	<div className="row button-section">
   		<div className="col-twelve">
   			<a href="#films" title="Check out what I've watched" className="button stroke smoothscroll">What I've watched</a>
   			<a href="#contact" title="Check out what I've read" className="button stroke smoothscroll">What I've read</a>
   			<a href="#" title="Download CV" className="button button-primary">Download CV</a>
   		</div>   		
   	</div>
  );
}

export const About = () => {
  return (
   <section id="about">  
    <AboutMe />
    <Buttons />
   </section> 

  )
}