import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Angular Portfolio Website", pictures: [], projectLink: "//www.github.com", summary: "Portfolio Website created using Angular", description: "Portfolio Website including Resume and Contact page. Developed using Angular and programming languages HTML, CSS, and TypeScript. Some features on this website include: page routing, project card modules, buttons, drop-down expansions, forms, and contact forms", tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS, Tag.TYPESCRIPT]},
    {id: 1, name: "NBA Statistics Bot", pictures: ["../../assets/basketball1.png", "../../assets/basketball2.png"], projectLink: "//www.github.com", summary: "NBA Statistics Bot programmed in Python and SQL", description: "NBA statistics and data bot programmed using Python and SQL. This bot receives data from the NBA Python API and is capable of representing and storing the data retrieved from this bot in different ways depending on how the user interacts with it and the commands prompted. This bot is capable of searching for any players statistics from any season and displaying their stats as either averages or totals. Users are also capable of saving their favourite players and favourite seasons.", tags: [Tag.PYTHON, Tag.SQL]},
    {id: 2, name: "Duck Defense", pictures: ["../../assets/Duck1.png", "../../assets/duckmovie.gif", "../../assets/Duck3.png", "../../assets/Duck2.png"], projectLink: "https://github.com/zoubairhamid/Duck-Defense", description: "2D Tower Defense game developed using Java and LibGDX. The game is played similar to any other tower defense game. A wave of enemies travel through a designated path and the user is required to place towers in order to defeat the enemies travelling through the path before they reach the end of the path. When an enemy is defeated, a certain amount of gold is dropped by them which can be used to purchase and place other towers. Each tower has unique prices, stats, and abilities. There are different waves of enemies and each wave the enemies get stronger and faster. The game is won when all waves are complete.", summary: "Duck Defense is a 2D Tower Defense game developed using LibGDX and Java.", tags: [Tag.LIBGDX, Tag.JAVA]},
    {id: 3, name: "Skelly Run", pictures: ["../../assets/skelly4.gif", "../../assets/skelly2.gif", "../../assets/skelly3.gif"], projectLink: "https://github.com/zoubairhamid/Skelly-Run", summary: "5-Stage 2D Platformer game developed using LibGDX and the Box2D library in Kotlin", description: "Skelly Run is a 2D platformer developed using programming languages Python and Kotlin and development framework LibGDX. The game is a 2D platformer with enemies and has multiple features including sprinting, jumping, and shooting. When the player shoots, the longer they charge their ammo for the larger the projectile and the more damage it does. The game includes 5 levels and each level contains platforming challenges as well as enemies scattered across the map. As the enemies detect you they will engage in battle with you and try to defeat you. The player is defeated when they run out of health. The game is successfully completed once the player goes through and completes each level and arrives at the final goal of the final level", tags: [Tag. LIBGDX, Tag.KOTLIN, Tag.PYTHON]},
    {id: 4, name: "MeloMatch", pictures: [], projectLink: "//www.github.com", summary: "Sound to image browser application developed using React", description: "MeloMatch is a browser application. There are multiple game modes in this application, but at it's core the application is a melody matching game where a melody is played and either the user interacting with the application or the application itself determines an image to go alongside the image that would match the tone of the image. There are multiple game modes and features that this application includes. This app is still in early development stages.", tags: [Tag.REACT, Tag.HTML, Tag.CSS, Tag.JAVASCRIPT]},
    {id: 5, name: "PeakSpark", pictures: [], projectLink: "//www.github.com", summary: "Daily life planning desktop and mobile app targeted for students. Developed using React and Node.js", description: "PeakSpark is desktop and mobile app in order to help the user better schedule their day to day life. This app is targeted towards students of all ages that need assisstance organizing their courses, assignments, and other daily responsibilities. The user may input their courses and school schedule and the app will determine the best possible studying times and methods in order to optimize the user's success. The app does not only help schedule courses and school work, but it can also help the user better plan their diet, workout schedule, and sleep schedule. This app is still in early development stages", tags: [Tag.REACT, Tag.NODEJS, Tag.HTML, Tag.CSS, Tag.JAVASCRIPT]}
  ];
  
  constructor() { }

  GetProjects() { 
    return this.projects; 
  }

  GetProjectById(id: number) : Project { 
    let project = this.projects.find(project => project.id === id);
  
    if (project === undefined) { 
      throw new TypeError('There is no project that matches the id: ' + id)
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){ 
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) { 
      let foundAll = true; 

      filterTags.forEach(function (filterTag) { 
        if (project.tags.includes(filterTag) == false) { 
          foundAll = false; 
        }
      });

      if (foundAll) { 
        filteredProjects.push(project); 
      }
    });

    return filteredProjects;
  }
}


