import { FC } from "react";
import { TWITTER_URI, GITHUB_URI, DEV_TO_URI } from "./Intro";

export const Footer: FC = () => {
	
  return (
   <footer>
     	<div className="row">

     		<div className="col-six tab-full pull-right social">
     			<ul className="footer-social">        
			      <li><a href={TWITTER_URI}><i className="fa fa-twitter"></i></a></li>
			      <li><a href={GITHUB_URI}><i className="fa fa-github"></i></a></li>
			      <li><a href={DEV_TO_URI}><i className="fa fa-pencil"></i></a></li>
			   	</ul> 
	      </div>

      	<div className="col-six tab-full">
	      	<div className="copyright">
		        	<span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>	         	
		         </div>		                  
	      	</div>

	      	<div id="go-top">
		         <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
		      </div>

      	</div> 
   </footer>  
  )
};