import React from 'react'

import Card from './components/Card.jsx'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEndPkpxU-FDOQK0acJ6iuFECTI914xOelQ&s",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJERPxrzvNH1aNZTO9KmZKQXHtxLg9Agt1Sg&s",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAAAkFBMVEX////yUCKAugECpO//uQJzc3NwcHB3d3f8/PxsbGyMjIz29vaJiYnk5OSnp6eBgYHHx8etra3+7ejk8szk9v3/8Mbo8tLv7+//zsDU6/b53tfj7dDyShbzZED8xbyHvRvZ2dnZ7L655/44rfGw3/3+vBv/8tO6urqZmZn/673Q0ND7/fXyRgiMwCr/1Mj/vSpDMemtAAAEF0lEQVR4nO2Ya3PcJhRASVtACPFyktJHmpC2CZRtmv//73ovSF7kyXjXs+vxZuaeD5ZArHTE415kxgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjiu2X6bcfd4fcdh5f2G7n7493Av+9f/zDy4eeX9hsB11dH3r1//eGWXV+R6zPw8q4xeW/OanmuazTGxOEBUNQQRWrWF6qaIpQq13SdZulkufeKWAyMZSHKZbJxEZyL67ouXEqZtl95KAnLmFViid++8ZlkJRdjEjPennzpp7jysJXs6ppm5y9SZTMXeAezqOWaruC3lozjvLkyfVmvoqtK/Y7zFV1d4WrtxCxkaa46xv6EKZpq8BxqJijEXpeSmdY7xJRS7AVtUu3nWi9cVB11AlcT48Qe4wmuXooy9YJYMkfXuiwZa0xYYDo7y7RdZpOdCMe61KTyjIWKp7U4OF9CZLpg7TLP89KO5fFROjPH4hyIhTscL5aUyL65eqVwDqdFQOBRyjG9CBng3LLkWp0QEgcjKI4N8MXgLfuFOWqnwLGV4Ai/P+X6oF+/jK5fRtfJ8766inBmdRXYg9FxueSU7Mx06z5rA07p2RtfICIZlgR31STr8SdcWp+yk2LWHg7c5hCsky6EE8F6+u+XkbvDxx3bnrC54gKANzc4Vbd+RVcrWj1caa4OspAOgrcR1TM29IrjSmSaTY6LjLMiQUem3dp6fLKixJ873hz+GXm7c52skBVXFq8sH10nGMa6tgNXkbsi73VegoUXsk8fmD9SdKnSxuQpceDNXz+O/P32608DXz+PrjiUBXIWzLTNFZ9nYIC354BjyxhG8nXygYUzEQOexawPPTz3pllhurrI9dPo+mnvymAATeXYc4MrvMGyjR/2p9m5RoggBlcfF8pGzMq2N62KX9X1Qb/ikwJMBPPQ1X3DVQ79CocMEUKECXcQvam/cr8+dMXugvXL2H4OSL5t6jZXDA2p1STJe/aMAc5iFVv2g9CWn9MVV1dfSIMr5vS225riveu0xYGpcGjSslucIT5r2aZQe20IZoPr6U3Q01xZhR1MW0ijK6xyXiB8hnLviiFJtjqBkyHbaoxvIS9ASMjJVHgHzIKbK9w/mPp42DrbVTRX6BvR8sEQs6ATFexlnMS8tbnCxGx1vOUt2Pk5SKM46LHABYcXZmw4i+aqLWQwd6Jrz3WFGN9eOq+B0kvca/e/cIQMz/FcFynXuVtBDnQLNq8OT1u2ha1BK7jQ5ue87ooNnKwZ5VJX/GhpR236Zii2bxi9fdho+Giqptffx4RUex3rH1VpM4kVCusFs7XXx8aXut4C5Po8fNeuo+pxP3ATTL/umA6fd9zU/zQJgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI4qb5Hwetcewu+v8tAAAAAElFTkSuQmCC",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://iprsoftwaremedia.com/219/files/202512/692f50553d6332b453bbc5c2_nvidia-logo-vert-blk/nvidia-logo-vert-blk_thmb.png",
    companyName: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNPRQuLPpKrjO5bdFPgVGRoAbysq635o6ZQ&s",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Embedded Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uidlRjzqk5YH-NqxaFCP74QUYo-w74BvYw&shttps://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "9 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$72/hr",
    location: "Bangalore, India"
  }
];
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} datePosted={elem.datePosted} />
          </div>
      })}
      
    </div>
  )
}

export default App
