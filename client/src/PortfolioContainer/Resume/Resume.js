import React, { useState } from 'react';
import './Resume.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import educationIcon from '../../assets/Resume/education.svg';
import workHistoryIcon from '../../assets/Resume/work-history.svg';
import programmingSkillsIcon from '../../assets/Resume/programming-skills.svg';
import interestsIcon from '../../assets/Resume/interests.svg';
import projectsIcon from '../../assets/Resume/projects.svg';

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet' />
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + " - " + props.toDate}
                        </div>
                    ): (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>)
    };

    const resumeBullets = [
        {label: "Education", logoSrc: educationIcon},
        {label: "Work History", logoSrc: workHistoryIcon},
        {label: "Programming Skills", logoSrc: programmingSkillsIcon},
        {label: "Projects", logoSrc: interestsIcon},
        {label: "Interests", logoSrc: projectsIcon}
    ];

    const programmingSkillsDetails = [
        {skill: "JavaScript", ratingPercentage: 70},
        {skill: "TypeScript", ratingPercentage: 70},
        {skill: "ReactJS", ratingPercentage: 70},
        {skill: "VueJS", ratingPercentage: 60},
        {skill: "HTML", ratingPercentage: 65},
        {skill: "CSS", ratingPercentage: 65},
        {skill: "Java", ratingPercentage: 60},
        {skill: "SQL", ratingPercentage: 80},
        {skill: "Python", ratingPercentage: 80},
        {skill: "GDScript", ratingPercentage: 80},
        {skill: "C#", ratingPercentage: 60}
    ]

    const projectDetails = [
        {
            title: "JacobLakies.com",
            duration: {fromDate: "2024", toDate: "2024"},
            description: "A personal portfolio website to showcase my projects and resume.",
            subHeading: "Technologies Used: React JS, Bootstrap"
        },
        {
            title: "commoncadet.com",
            duration: {fromDate: "2024", toDate: "2024"},
            description: "A website to host games that I develop using Godot. The design and feel is reminiscent of flash game websites.",
            subHeading: "Technologies Used: React JS"
        },
        {
            title: "Planetary Defense",
            duration: {fromDate: "2024", toDate: "2024"},
            description: "A simple turret-defense game where alien ships are coming to attack your homeworld! Earn money, invest in upgrades and use abilities to save your homeworld! Can be played at https://www.commoncadet.com/games/planetary-defense",
            subHeading: "Technologies Used: Godot, GDScript"
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key='education'>
            <ResumeHeading 
            heading={"Grand Valley State University"}
            subHeading={"Bachelor of Science in Computer Science"}
            fromDate={"2018"}
            toDate={"2022"}
            />
            <ResumeHeading 
            heading={"Northwestern Michigan College"}
            subHeading={"Associate of Arts and Sciences"}
            fromDate={"2015"}
            toDate={"2018"}
            />
            <ResumeHeading 
            heading={"Traverse City Central High School"}
            subHeading={"High School Diploma"}
            fromDate={"2011"}
            toDate={"2015"}
            />
        </div>,
        <div className='resume-screen-container' key='work-experience'>
            <div className='experience-container'>
            <ResumeHeading 
            heading={"Infosys"}
            subHeading={"Software Development Consultant"}
            fromDate={"2021"}
            toDate={"Present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently working as a Software Development Consultant contracted to a large retailer based in Cupertino. 
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                    - Worked to develop and improve Machine Learning based microservices to support the customer experience.
                </span>
                <br/>
                <span className='resume-description-text'>
                    - Collaborated to develop and maintained a React client that serves large scale usage every day. 
                </span>
                <br/>
                <span className='resume-description-text'>
                    - Built ETL pipelines that process millions of records daily.
                </span>
                <br/>
            </div>
            </div>
        </div>,
        <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => 
            (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullt'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                    <div style={{width: skill.ratingPercentage + "%"}}
                    className='active-percentage'>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>,
        <div className='resume-screen-container' key="projects">
        {projectDetails.map((projectDetails, index) => (
            <ResumeHeading 
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.fromDate}
            toDate={projectDetails.toDate}
            />
        ))}
    </div>,
    <div className='resume-screen-container' key="interests">
        <ResumeHeading 
        heading='Robotics'
        description='I have had a long interest in Robotics and Microcontrollers. In high school I participated in the underwater ROV club as well as FIRSTRobotics.'
        />
        <ResumeHeading 
        heading='Game Development'
        description='As someone who enjoys gaming, video games were something that originally got me started with programming. From running my own WoW private servers back in middle school, to now creating games as a hobby.'/>
    </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 500;
        let newCarousalOffset = {
            style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"}
        };
        setCarousalOffsetStyle(newCarousalOffset)
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img className='bullet-logo'
                src={bullet.logoSrc}
                alt='No internet connection' />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ));
    };
    

    const getResumeScreen = () => {
        return(
            <div
            style={carousalOffsetStyle.style}
            className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

  return (
    <div className='resume-container screen-container' id={props.id || ''}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullet-details'>{getResumeScreen()}</div>
            </div>
        </div> 
    </div>
  )
}
