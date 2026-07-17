import React from 'react'
import Card from './components/Card'


const jobOffers = [
  {
    id: 1,
    companyLogo: "https://tse3.mm.bing.net/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=Api&h=220&P=0",
    companyName: "Google",
    postedAgo: "5 days ago",
    role: "Frontend Developer",
    jobType: "Full-time",
    workMode: "Hybrid",
    pay: "₹1,200/hr",
    location: "Bengaluru, India"
  },
  {
    id: 2,
    companyLogo: "https://tse1.mm.bing.net/th/id/OIP.jNMS1d13tSBDT8JSkbtb9AAAAA?pid=Api&h=220&P=0",
    companyName: "Microsoft",
    postedAgo: "2 days ago",
    role: "Software Engineer",
    jobType: "Full-time",
    workMode: "Remote",
    pay: "₹1,500/hr",
    location: "Hyderabad, India"
  },
  {
    id: 3,
    companyLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&h=220&P=0",
    companyName: "Amazon",
    postedAgo: "7 days ago",
    role: "Backend Developer",
    jobType: "Part-time",
    workMode: "Remote",
    pay: "₹1,100/hr",
    location: "Mumbai, India"
  },
  {
    id: 4,
    companyLogo: "https://tse1.mm.bing.net/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?pid=Api&h=220&P=0",
    companyName: "Meta",
    postedAgo: "1 day ago",
    role: "React Developer",
    jobType: "Contract",
    workMode: "Hybrid",
    pay: "₹1,800/hr",
    location: "Gurugram, India"
  },
  {
    id: 5,
    companyLogo: "https://tse4.mm.bing.net/th/id/OIP.4JzOxxtyEDEvm5ywJSoaHgHaEK?pid=Api&h=220&P=0",
    companyName: "Apple",
    postedAgo: "3 days ago",
    role: "UI/UX Engineer",
    jobType: "Full-time",
    workMode: "On-site",
    pay: "₹1,600/hr",
    location: "Bengaluru, India"
  }
];

const App = () => {
  return (
    jobOffers.map((ele,idx)=>{
      return(
        <Card
        key = {idx} companyLogo={ele.companyLogo}  companyName={ele.companyName} postedAgo={ele.postedAgo} role={ele.role}
        jobType={ele.jobType} workMode={ele.workMode}  pay={ele.pay}  location={ele.location}
      />
      )
    })
    
  )
}

export default App
