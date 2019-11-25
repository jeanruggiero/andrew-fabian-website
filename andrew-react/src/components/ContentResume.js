import React from "react";
import Typography from "@material-ui/core/Typography";
import ResumeItem from "./ResumeItem";

const ContentResume = () => {
  return (
    <div className="content content-resume">
      <Typography variant="h2">
        Education
      </Typography>

      <ResumeItem company="Massachusetts Institute of Technology"
                  title="Leaders for Global Operations Fellow"
                  date="May 2021">
        Candidate for MBA, MIT Sloan School of Management<br/>
        Candidate for M.S. in Mechanical Engineering, MIT School of Engineering
      </ResumeItem>

      <ResumeItem company="olin college of engineering"
                  title="B.S in Mechanical Engineering"
                  date="May 2012"
                  gpa="GPA: 3.9/4.0">
        Received a 4-year full tuition merit Olin Scholarship
      </ResumeItem>

      <Typography variant="h2">
        Experience
      </Typography>

      <ResumeItem company="the boeing company"
                  title="Propulsion Safety Lead Engineer"
                  date="2016 &ndash; 2019">
        Led five-person team in developing and implementing Propulsion safety strategy for all in-production programs <br/>
	        Defined Propulsion technical positions for high profile potential in-service safety issues <br/>
	        Led a separate four-person team in developing and maintaining a database capable of delivering accurate and readily available propulsion safety data critical to airplane safety assessments and regulatory fleet reliability reporting
      </ResumeItem>

      <ResumeItem title="Manager, 737 Manufacturing Operations (Acting)"
                  date="2018 &ndash; 2019">
        	Recruited as an Acting Manager in standing up a temporary organization to help resolve critical factory delays <br/>
	        Led a 10-person team and had responsibility for completing all traveled jobs on assigned airplane <br/>
	        Executed on completing behind schedule jobs as part of factory recovery efforts to meet Boeing delivery commitments <br/>
	        Coordinated multiple teams work on planes to complete jobs safely and efficiently within recovery schedule <br/>
	        Met aggressive build schedule allowing significant downsizing of temporary organization within six months of initiation <br/>
      </ResumeItem>

      <ResumeItem title="Propulsion Systems Division Rotation Program"
                  date="2015 &ndash; 2016">
        Accepted into two-year rotation program with three eight-month rotations to broaden technical skills and perspective: <br/>
        Rotation 3: Propulsion Technology Analysis Engineer (2016) <br/>
	      Rotation 2: KC-46A Tanker Propulsion & Fuels Integration Engineer (2015 &ndash; 2016) <br/>
	      Rotation 1: Fuels Analysis and Certification Engineer (2015)<br/>
      </ResumeItem>

      <ResumeItem title="787 Propulsion Engine Build Up Design Engineer and Equipment Manager"
                  date="2012 &ndash; 2014">
        Coordinated with multiple organizations to resolve manufacturing issue leading to a high number of quality escapes <br/>
	      Partnered with Engine Company to reduce design, fabrication, and delivery time on numerous parts by 90% in order to meet a major Boeing certification milestone resulting in no delay to deliveries
      </ResumeItem>

      <ResumeItem company="GE Aviation"
                  title="Engine Performance Intern"
                  date="2011">
        Matured engine health monitoring software from development status to ready for engine test in 12 weeks
      </ResumeItem>

      <ResumeItem title="Manufacturing Engineering Intern"
                  date="2010">
        Increased manufacturing efficiency by developing a parts database to determine the most efficient order of jobs
      </ResumeItem>


      <Typography variant="h2">
        Leadership Development
      </Typography>

      <ResumeItem company="MIT-Gordon Engineering Leadership Program"
                  title="Volunteer Mentor"
                  date="2019 &ndash; Present">
        Provided guidance to an engineering undergraduate student on various topics including education and career planning.
      </ResumeItem>

      <ResumeItem company="the boeing company"
                  title="Olin SCOPE Project Sponsor"
                  date="2017 &ndash; 2019">
        Organized a Boeing-funded an engineering senior design project (SCOPE) at Olin College and provided support and guidance to teams of students
      </ResumeItem>

      <ResumeItem company="the boeing company"
                  title="Propulsion Leadership Dimensions Program"
                  date="2017 &ndash; 2018">
        Accepted into and graduated from the Propulsion Leadership Dimensions Program, an 18-month development program focused on developing mid-career employees into the next generation of leaders
      </ResumeItem>

      <Typography variant="h2">
        Skills
      </Typography>

      <div className="resume-item">
        <Typography variant="h4">
          Mechanical engineering: mechanical design and analysis, Python, MATLAB, Simulink, R, SolidWorks
        </Typography>
      </div>

      <Typography variant="h2">
        Volunteer Experience
      </Typography>

      <ResumeItem company="Boeing Employees alpine society (BOEALPS)"
                  title="Climbing Instructor & Curriculum Advisor"
                  date="2014 &ndash; 2019">
        Instructed students at all levels and advised on curriculum decisions for the club’s three climbing courses.
      </ResumeItem>

    </div>
  )
};

export default ContentResume