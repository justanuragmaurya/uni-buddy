import AssingmentCards from '@/components/AssingmentCard'

function AssignmentsPage() {
  const data = [
    {
        title: "Web Development Assignment",
        description: "Develop a responsive personal portfolio website using HTML, CSS, and JavaScript. The site should include an about section, project showcase, and contact form.",
        budget: 100,
        deadline: "7th Aug"
    },
    {
        title: "Data Analysis with Python",
        description: "Perform exploratory data analysis on a given dataset using Python libraries like Pandas and Matplotlib. Include insights with visualizations and summary statistics.",
        budget: 120,
        deadline: "10th Aug"
    },
    {
        title: "Machine Learning Project",
        description: "Build a machine learning model to predict house prices based on a dataset. Use algorithms like Linear Regression or Decision Trees and evaluate model performance.",
        budget: 150,
        deadline: "15th Aug"
    },
    {
        title: "Database Design",
        description: "Design a relational database schema for a library management system. Include an ER diagram and SQL queries for common operations like book loans and returns.",
        budget: 180,
        deadline: "20th Aug"
    },
    {
        title: "Mobile App Prototype",
        description: "Create a basic mobile app prototype for a food delivery service using React Native. The app should have features like browsing restaurants, adding items to cart, and placing orders.",
        budget: 200,
        deadline: "25th Aug"
    },
    {
        title: "Content Writing for Blog",
        description: "Write a 1500-word blog post on the latest trends in artificial intelligence and its impact on industries like healthcare, finance, and education.",
        budget: 75,
        deadline: "30th Aug"
    },
    {
        title: "SEO Optimization Task",
        description: "Optimize an existing website for SEO, including keyword research, meta tags, and improving page load speed. Provide a report of changes made.",
        budget: 90,
        deadline: "2nd Sep"
    },
    {
        title: "Social Media Marketing Campaign",
        description: "Develop a social media marketing campaign strategy for a small business. Include a content calendar, target audience analysis, and budget allocation.",
        budget: 130,
        deadline: "5th Sep"
    },
    {
        title: "Graphic Design for Flyers",
        description: "Design promotional flyers for a local event using Adobe Photoshop or Illustrator. The flyer should be visually appealing and convey event details clearly.",
        budget: 85,
        deadline: "8th Sep"
    },
    {
        title: "Blockchain Development",
        description: "Implement a simple voting system on the Ethereum blockchain using smart contracts. Ensure security and immutability of votes.",
        budget: 220,
        deadline: "12th Sep"
    },
    {
        title: "Cloud Computing Setup",
        description: "Set up a cloud infrastructure for hosting a web application on AWS or Azure. Include auto-scaling, load balancing, and database management.",
        budget: 250,
        deadline: "15th Sep"
    },
    {
        title: "Cybersecurity Audit",
        description: "Conduct a security audit of a small company's network. Identify vulnerabilities, perform penetration testing, and provide recommendations for improvement.",
        budget: 300,
        deadline: "18th Sep"
    }
];

return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 p-5'>
      {data.map((e,index)=>{return(      
          <AssingmentCards  key={index}  data={e}/>
      )})}
    </div>
  )
}

export default AssignmentsPage
