export const Intro = () => {
	const LINKEDIN_URI = `https://www.linkedin.com/in/juan-pablo-djeredjian/`;
	const GITHUB_URI = `https://github.com/jpdjere`;
	const TWITTER_URI = `https://twitter.com/JPDjere`;

  return (
  	<section id="intro">

			<div className="intro-overlay"></div>	
			<div className="intro-content">
				<div className="row">

					<div className="col-twelve">
						<h5>Hello, I'm</h5>
						<h1>Juan P. Djeredjian</h1>
						<p className="intro-position">
							<span>Berlin-based Software Engineer</span>
						</p>
						<a className="button stroke smoothscroll" href="#about" title="More about me">More About Me</a>
					</div>  
				</div>   		 		
			</div> 

			<ul className="intro-social">        
				<li><a href={LINKEDIN_URI} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
				<li><a href={GITHUB_URI} target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
				<li><a href={TWITTER_URI} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
			</ul> 

   </section> 

  )
}