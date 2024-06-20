import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { Languages } from '../enums/ELanguage';
import { Language } from '../models/Language';
import { LanguagesLevel } from '../enums/ELanguageLevel';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit {
  public projects: Project[] = [];
  public languages: Language[] = [];

  ngOnInit() {
    this.setProjects();
    this.setLanguages();
  }

  public setProjects() {
    const bankSystem = new Project(
      1,
      'Banking System',
      'This Java Spring project is used for creating user profiles and managing banking operations. It integrates secure user authentication, account management, and transaction handling.',
      [Languages.Java, Languages.CSS, Languages.HTML, Languages.Spring],
      'Jan',
      2021,
      'https://github.com/Prince2802/Banksystem',
      ''
    );
    const bookmyshow = new Project(
      2,
      'BookmyShow',
      'This project is clone of bookmyshow. Built on the robust MERN Stack. Discover a user-friendly experience with detailed event information, seat selection, and instant confirmations',
      [Languages.React, Languages.MongoDB, Languages.Node, Languages.Express],
      'May',
      2024,
      'https://github.com/Prince2802/BookmyShow'
    );
    const portfolio = new Project(
      3,
      'Portfolio',
      'This is this website. It is a personal project, which allows me to put forward my different projects whether they are academic or personal.',
      [
        Languages.Angular,
        Languages.HTML,
        Languages.ThreeJS,
        Languages.TailwindCSS,
      ],
      'June',
      2024,
      'https://github.com/Prince2802/PersonalWebsite',
      ''
    );
    const foodOrderingApp = new Project(
      4,
      'Swiggy Clone',
      'This project is a Swiggy clone leveraging Swiggy APIs and developed using React. Offering users a familiar interface to browse menus, place orders, and track deliveries efficiently.',
      [
        Languages.React,
        Languages.TailwindCSS,
        Languages.HTML,
        Languages.TypeScript,
      ],
      'June',
      2024,
      'https://github.com/Prince2802/food-ordering-app'
    );
    const calcapp = new Project(
      5,
      'Calulator App',
      'This project facilitates calculating interest rates over specified years. Users can input principal amounts, select interest rates, and determine accrued interest over chosen periods.',
      [Languages.Angular, Languages.CSS, Languages.HTML, Languages.TypeScript],
      'May',
      2024,
      'https://github.com/Prince2802/calc-app'
    );
    const shopFoodWithRecipies = new Project(
      6,
      'Shop Food Items',
      'This project is build on MEAN stack for purchasing food items with comprehensive menus, and real-time order updates.',
      [Languages.HTML, Languages.CSS, Languages.TypeScript, Languages.Angular],
      'May',
      2024,
      'https://github.com/Prince2802/shop-food-with-recipies'
    );

    this.projects.push(
      bankSystem,
      portfolio,
      bookmyshow,
      foodOrderingApp,
      calcapp,
      shopFoodWithRecipies
    );
  }

  public setLanguages() {
    const typescript = new Language(
      1,
      Languages.TypeScript,
      'https://cdnlogo.com/logos/t/96/typescript.svg',
      'I use it in my work-study projects, and in my personal projects.',
      LanguagesLevel.Intermediate
    );
    const angular = new Language(
      2,
      Languages.Angular,
      'https://cdnlogo.com/logos/a/24/angular-icon.svg',
      'I use it in my work-study projects, and in my personal projects.',
      LanguagesLevel.Advanced
    );
    const git = new Language(
      3,
      Languages.Git,
      'https://cdnlogo.com/logos/g/46/git.svg',
      'I use it in my personal projects, school projects and my work-study projects.',
      LanguagesLevel.Advanced
    );
    const html = new Language(
      4,
      Languages.HTML,
      'https://cdnlogo.com/logos/h/90/html-5.svg',
      'I use Html in basically all of my projects.',
      LanguagesLevel.Expert
    );
    const css = new Language(
      5,
      Languages.CSS,
      'https://cdnlogo.com/logos/c/18/css.svg',
      'I use CSS in most of my projects.',
      LanguagesLevel.Intermediate
    );
    const javascript = new Language(
      6,
      Languages.JavaScript,
      'https://cdnlogo.com/logos/j/44/javascript.svg',
      'I use javascript in most of my projects.',
      LanguagesLevel.Advanced
    );
    const React = new Language(
      7,
      Languages.React,
      'https://cdnlogo.com/logos/r/63/react.svg',
      'I use it in my personal and college projects.',
      LanguagesLevel.Intermediate
    );
    const java = new Language(
      8,
      Languages.Java,
      'https://cdnlogo.com/logos/j/86/java.svg',
      'I use it especially in college projects and few projects while I was working in Verifone.',
      LanguagesLevel.Advanced
    );
    const spring = new Language(
      9,
      Languages.Spring,
      'https://cdnlogo.com/logos/s/91/spring.svg',
      'I use it in my personal projects and while I was working in Verifone.',
      LanguagesLevel.Intermediate
    );
    const ionic = new Language(
      10,
      Languages.Ionic,
      'https://cdnlogo.com/logos/i/24/ionic.svg',
      'I used it while I was working in Verifone in one of my Project.',
      LanguagesLevel.Advanced
    );
    const swift = new Language(
      11,
      Languages.SWIFT,
      'https://cdnlogo.com/logos/s/13/swift.svg',
      'I recently started learning it and working on improving it.',
      LanguagesLevel.Beginner
    );
    const threeJS = new Language(
      12,
      Languages.ThreeJS,
      'https://cdnlogo.com/logos/t/92/three-js.svg',
      'I use it in my personal projects.',
      LanguagesLevel.Beginner
    );
    const tailwind = new Language(
      13,
      Languages.TailwindCSS,
      'https://cdnlogo.com/logos/t/58/tailwind-css.svg',
      'I use it in my personal projects.',
      LanguagesLevel.Beginner
    );
    const bulma = new Language(
      14,
      Languages.Bulma,
      'https://cdnlogo.com/logos/b/37/bulma.svg',
      'I use it in my personal projects and while I was working in Veridone.',
      LanguagesLevel.Intermediate
    );
    this.languages.push(
      html,
      javascript,
      angular,
      typescript,
      css,
      java,
      git,
      React,
      spring,
      ionic,
      threeJS,
      swift,
      tailwind,
      bulma
    );
  }

  getLanguageUrl(language: string): string {
    switch (language.toLowerCase()) {
      case 'javascript':
        return 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
      case 'typescript':
        return 'https://www.typescriptlang.org/';
      case 'html':
        return 'https://developer.mozilla.org/en-US/docs/Web/HTML';
      case 'css':
        return 'https://developer.mozilla.org/en-US/docs/Web/CSS';
      case 'angular':
        return 'https://angular.dev/overview';
      case 'ionic':
        return 'https://ionicframework.com/docs';
      case 'typescript':
        return 'https://www.typescriptlang.org/docs/';
      case 'rxjs':
        return 'https://rxjs.dev/guide/overview';
      case 'java':
        return 'https://docs.oracle.com/en/java/';
      case 'spring':
        return 'https://docs.spring.io/spring-framework/reference/index.html';
      case 'bulma':
        return 'https://bulma.io/documentation/';
      case 'git':
        return 'https://git-scm.com/doc';
      case 'react':
        return 'https://legacy.reactjs.org/docs/getting-started.html';
      case 'threejs':
        return 'https://threejs.org/docs/';
      case 'swift':
        return 'https://www.swift.org/documentation/';
      case 'tailwind':
        return 'https://tailwindcss.com/docs/installation';
      case 'express':
        return 'https://expressjs.com/en/5x/api.html';
      default:
        return '#';
    }
  }
}
