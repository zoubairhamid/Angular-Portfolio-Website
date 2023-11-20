import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[]; 

  filtering: boolean = false; 

  isCollapsed: boolean = true;

  python: boolean = false;
  java: boolean = false;
  javascript: boolean = false; 
  html: boolean = false; 
  css: boolean = false;
  kotlin: boolean = false;
  sql: boolean = false;
  typescript: boolean = false; 

  angular: boolean = false;
  react: boolean = false;
  libgdx: boolean = false;
  nodejs: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Zoubair Hamid - Portfolio")
  } 
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() { 
    let filterTags: Tag[] = []; 

    if (this.python) { 
      filterTags.push(Tag.PYTHON);
    }

    if (this.java) { 
      filterTags.push(Tag.JAVA); 
    }

    if (this.javascript){ 
      filterTags.push(Tag.JAVASCRIPT);
    }

    if (this.typescript){ 
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.html){ 
      filterTags.push(Tag.HTML);
    }

    if (this.css){ 
      filterTags.push(Tag.CSS);
    }

    if (this.kotlin){ 
      filterTags.push(Tag.KOTLIN);
    }

    if (this.sql){ 
      filterTags.push(Tag.SQL);
    }

    if (this.angular) { 
      filterTags.push(Tag.ANGULAR);
    }

    if (this.react) { 
      filterTags.push(Tag.REACT); 
    }

    if (this.libgdx){ 
      filterTags.push(Tag.LIBGDX);
    }

    if (this.nodejs){ 
      filterTags.push(Tag.NODEJS);
    }

    if (this.python || this.java || this.javascript || this.typescript || this.html || this.css || this.kotlin || this.sql || this.angular || this.react || this.libgdx || this.nodejs){ 
      this.filtering = true; 
    }

    else{ 
      this.filtering = false; 
    }


    this.projects = this.projectService.GetProjectsByFilter(filterTags); 
  }

  ResetFilters() { 
    this.python = false;
    this.java = false;
    this.javascript = false; 
    this.typescript = false;
    this.html = false;
    this.css = false;
    this.kotlin = false;
    this.sql = false;


    this.angular = false; 
    this.react = false;
    this.libgdx = false;
    this.nodejs = false; 

    this.filtering = false;

    this.projects = this.projectService.GetProjects(); 
  }
}
