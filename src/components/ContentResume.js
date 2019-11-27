import React from "react";
import {Box, Typography, withStyles} from "@material-ui/core";
import ResumeItem from "./ResumeItem";
import ResumeHeader from "./ResumeHeader";

const ResumeParagraph = withStyles({
  root: {
    lineHeight: 1.2,
    marginBottom: '0.4rem',
    paragraph: 'true',
    variant: 'body1'
  },
})(Typography)


const ContentResume = () => {
  return (
    <Box>
      <ResumeHeader>Education</ResumeHeader>

      <ResumeItem company="Massachusetts Institute of Technology"
                  title="Leaders for Global Operations Fellow"
                  date="May 2021">
        <ResumeParagraph>
          Candidate for MBA, MIT Sloan School of Management
        </ResumeParagraph>
        
        <ResumeParagraph>
          Candidate for M.S. in Mechanical Engineering, MIT School of Engineering
        </ResumeParagraph>
      </ResumeItem>

      <ResumeItem company="olin college of engineering"
                  title="B.S in Mechanical Engineering"
                  date="May 2012"
                  gpa="GPA: 3.9/4.0">
        <ResumeParagraph>
          Received a 4-year full tuition merit Olin Scholarship
        </ResumeParagraph>
      </ResumeItem>

      <ResumeHeader>Experience</ResumeHeader>

      <ResumeItem company="the boeing company"
                  title="Propulsion Safety Lead Engineer"
                  date="2016 &ndash; 2019">
        <ResumeParagraph>
          Led five-person team in developing and implementing Propulsion safety strategy for all in-production programs
        </ResumeParagraph>
        
        <ResumeParagraph>
          Defined Propulsion technical positions for high profile potential in-service safety issues
        </ResumeParagraph>
        
        <ResumeParagraph>
          Led a separate four-person team in developing and maintaining a database capable of delivering accurate and readily available propulsion safety data critical to airplane safety assessments and regulatory fleet reliability reporting
        </ResumeParagraph>
      </ResumeItem>

      <ResumeItem title="Manager, 737 Manufacturing Operations (Acting)"
                  date="2018 &ndash; 2019">
        <ResumeParagraph>
          Recruited as an Acting Manager in standing up a temporary organization to help resolve critical factory delays
        </ResumeParagraph>

        <ResumeParagraph>
          Led a 10-person team and had responsibility for completing all traveled jobs on assigned airplane
        </ResumeParagraph>

        <ResumeParagraph>
          Executed on completing behind schedule jobs as part of factory recovery efforts to meet Boeing delivery commitments
        </ResumeParagraph>

        <ResumeParagraph>
          Coordinated multiple teams work on planes to complete jobs safely and efficiently within recovery schedule
        </ResumeParagraph>

        <ResumeParagraph>
          Met aggressive build schedule allowing significant downsizing of temporary organization within six months of initiation
        </ResumeParagraph>
      </ResumeItem>

      <ResumeItem title="Propulsion Systems Division Rotation Program"
                  date="2015 &ndash; 2016">
        <ResumeParagraph>
          Accepted into two-year rotation program with three eight-month rotations to broaden technical skills and perspective:
        </ResumeParagraph>

        <ResumeParagraph>
          Rotation 3: Propulsion Technology Analysis Engineer (2016)
        </ResumeParagraph>

        <ResumeParagraph>
          Rotation 2: KC-46A Tanker Propulsion & Fuels Integration Engineer (2015 &ndash; 2016)
        </ResumeParagraph>

        <ResumeParagraph>
          Rotation 1: Fuels Analysis and Certification Engineer (2015)
        </ResumeParagraph>
      </ResumeItem>

      <ResumeItem title="787 Propulsion Engine Build Up Design Engineer and Equipment Manager"
                  date="2012 &ndash; 2014">
        <ResumeParagraph>
          Coordinated with multiple organizations to resolve manufacturing issue leading to a high number of quality escapes
        </ResumeParagraph>

        <ResumeParagraph>
          Partnered with Engine Company to reduce design, fabrication, and delivery time on numerous parts by 90% in order to meet a major Boeing certification milestone resulting in no delay to deliveries
        </ResumeParagraph>
      </ResumeItem>

      <ResumeItem company="GE Aviation"
                  title="Engine Performance Intern"
                  date="2011">
        <ResumeParagraph>
          Matured engine health monitoring software from development status to ready for engine test in 12 weeks
        </ResumeParagraph>
      </ResumeItem>

      <ResumeItem title="Manufacturing Engineering Intern"
                  date="2010">
        <ResumeParagraph>
          Increased manufacturing efficiency by developing a parts database to determine the most efficient order of jobs
        </ResumeParagraph>
      </ResumeItem>


      <ResumeHeader>Leadership Development</ResumeHeader>

      <ResumeItem company="MIT-Gordon Engineering Leadership Program"
                  title="Volunteer Mentor"
                  date="2019">
        <ResumeParagraph>
          Provided guidance to an engineering undergraduate student on various topics including education and career planning.
        </ResumeParagraph>
      </ResumeItem>

      <ResumeItem company="the boeing company"
                  title="Olin SCOPE Project Sponsor"
                  date="2017 &ndash; 2019">
        <ResumeParagraph>
          Organized a Boeing-funded an engineering senior design project (SCOPE) at Olin College and provided support and guidance to teams of students
        </ResumeParagraph>
      </ResumeItem>

      <ResumeItem company="the boeing company"
                  title="Propulsion Leadership Dimensions Program"
                  date="2017 &ndash; 2018">
        <ResumeParagraph>
          Accepted into and graduated from the Propulsion Leadership Dimensions Program, an 18-month development program focused on developing mid-career employees into the next generation of leaders
        </ResumeParagraph>
      </ResumeItem>

      <ResumeHeader>Skills</ResumeHeader>


      <Box pb={0.8}>
        <Typography variant="h3">
          Mechanical Engineering
        </Typography>
      </Box>
      <Typography variant="body1">
        <ResumeParagraph>
          mechanical design and analysis, Python, MATLAB, Simulink, R, SolidWorks
        </ResumeParagraph>
      </Typography>

      <ResumeHeader>Volunteer Experience</ResumeHeader>

      <ResumeItem company="Boeing Employees alpine society (BOEALPS)"
                  title="Climbing Instructor & Curriculum Advisor"
                  date="2014 &ndash; 2019">
        <ResumeParagraph>
          Instructed students at all levels and advised on curriculum decisions for the club’s three climbing courses.
        </ResumeParagraph>
      </ResumeItem>

    </Box>
  )
};

export default ContentResume