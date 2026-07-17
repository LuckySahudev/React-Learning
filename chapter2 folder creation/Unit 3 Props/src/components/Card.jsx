import React from 'react';
import { Bookmark } from 'lucide-react';
const Card = (props) => {
	console.log(props);
  return (
    <div className="card">
		<div className="top">
			<img src={props.companyLogo} alt="" className="logo" />
			<button>save <Bookmark size={14} /> </button>
		</div>
		<div className="center">
			<h1>{props.companyName} <span>5 days ago</span></h1>
			<h3 className='pos'>{props.role}</h3>
			<div className='job-type'>
				<h2>{props.jobType}</h2>
				<h2>{props.workMode}</h2>

			</div>
		</div>
		<div className="bottom">
			<div>
				<div className="pay-of">{props.pay}</div>
				<div className="location">{props.location}</div>
			</div>
			<button>Apply Now</button>
		</div>
	</div>

  )
}

export default Card
