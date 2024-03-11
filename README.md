# Covid19 Malaysia stats

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Contributing](#contributing)

## Introduction
This project is based on Kementerian Kesihatan Malaysia (KKM) data catalogue on Covid 19 Statistic in Malaysia. This info provided is include technology stack ,technique and tools used throughout the project and explanation to it.

## Features
List of the features in the project
1) Data Card - Display Total Cases,Import Cases,Local Cases and Recovered Cases
    A[User interacts with UI] --> B{Next.js Page};
    B --> C[Fetch API call];
    C --> D[External API];
    D --> C;
    C --> H[Style with Tailwind CSS & SCSS];
    H --> I[Display to user];

2) Line Chart - Display Total Cases over Period of a month
    A[User interacts with UI] --> B{Next.js Page};
    B --> C[Fetch API call];
    C --> D[External API];
    D --> C;
    C --> E[Process data with react-chartjs-2];
    E --> H[Style with Tailwind CSS & SCSS];
    H --> I[Display to user];

3) Data Table -  Display Total Cases Filtered by States over a period of Year
    A[User interacts with UI] --> B{Next.js Page};
    B --> C[Fetch API call];
    C --> D[External API];
    D --> C;
    C --> F[Process data with Moment.js];
    F --> G[Update UI with Ant Design components];
    B --> H[Style with Tailwind CSS & SCSS];
    G --> I[Display to user];

Explanation of the diagram:

- **A: User interacts with UI** - This is the starting point, where a user interacts with web application's interface.
- **B: Next.js Page** - The interaction triggers a request to a Next.js page, which could involve SSR (Server-Side Rendering) functionalities.
- **C: Fetch API call** - The Next.js application makes an external API call, possibly to fetch or submit data.
- **D: External API** - This represents the external service or API with which your application is communicating. API is getting from KKM Data Catalagoue ( read : Covid19 )
- **E: Process data with react-chartjs-2** - Once data is received from the API, react-chartjs-2 is needed for chart constructing.
- **F: Process data with Moment.js** - Once data is received from the API, it might need processing, such as date formatting with Moment.js.
- **G: Update UI with Ant Design components** - Processed data is then used to update the user interface, utilizing Ant Design components for a consistent and professional look.
- **H: Style with Tailwind CSS & SCSS** - Alongside Ant Design, Tailwind CSS and SCSS are used for additional styling, ensuring the application is visually appealing and responsive.
- **I: Display to user** - Finally, the updated and styled UI is displayed back to the user.

# Setup

Here is the setup and installation step of the project.
1) Open project on any IDE ( preferer is VScode ) and run.
    **Terminal > New Terminal**
2) Installation of the Project - installing all project dependencies by run.
    **npm install** 
3) After succesfully in step 2, type in the Terminal and run the project.
    **npm run dev**
4) Open any search engine and run the URL 
    **http://localhost:3000**

Additional step is for any error regards to dependencies that lead to unable to run the project.-
    a) Open Terminal on Step 1. 
    b) Installation axios for data fetching.
        "npm install axios"
    c) Installation SCSS for styling.
        "npm install sass"
    d) Installation react-chartjs-2 for line chart.
        "npm install --save chart.js react-chartjs-2"
    e) Installation moment for date formatting;
        "npm install moment"
    f) Installation antd for styling and features.
        "npm install antd"
    g) Run the project as it should has no problem, repeat step 3 and 4 rerspectively

## Contributing
 KKM Web Api - "https://api.data.gov.my/data-catalogue?id=covid_cases",
 

 ## Quizzes
 1. What is the difference between Client Side Rendering and Server Side Rendering? 
    
    Client-Side Rendering: The browser does most of the work assembling the web page from raw data, which might make the initial load slower but subsequent navigation faster.

    Server-Side Rendering: The server sends complete, ready-to-display web pages to the browser, making initial page loads faster but requiring a complete reload for new pages.

    The main difference between these two rendering approaches is in the algorithms of their operation. CSR shows an empty page before loading, while SSR displays a fully-rendered HTML page on the first load.

2.  Explain and justify the technology stack, libraries, router framework, ui component framework you choose.

    * FrontEnd & Backend
        -   Languages: HTML, SCSS, JavaScript, Typescript
        -   Frameworks/Libraries: Next.js

    Next.js serves as a full-stack framework that allows developers to build the user-facing part of web applications (front end) and handle server-side logic and data fetching (back end) within the same project. 

    * Ui component framework
        - Ant Design

    React UI library with a set of high-quality React components, one of best React UI library.Ant Design provides plenty of UI components to enrich website design.

     * Deployment 
        - Vercel

    It allows developers to build and deploy web projects with ease. With Vercel, I can deploy project to the cloud and can intergrate with github repositories.
    
3.  Provides points of improvement, or feedback for this "Task (Assessment) Requirement".

    It is a good task as it makes me learn and relearn, I am a beginner to intermediate in Next.js. This task urge me to adapt fast , code fast while ensuring a quality deliverance.Starting with simpler challenges and progressively increasing the difficulty can enhance learning and confidence in handling more complex issues.

5.  Provide a screenshot and briefly explain your source control strategy.
        a.shows the source-control-graph of your code changes, (e.g. VSCode - GitGraph)
        b.following "conventional commits" message pattern. (e.g. "feat: add ABC graph")

 ![Screenshot of gitGraph](/public/img/gitgraph.PNG)     
 Source Control Strategy 
  **Branching Strategy** - Use Main/master that holds the  production ready state.If there is more than one developer I might use several branching that holds predeployment,development and etc.
  **Commit Message** - Commit message that easy to recall and understand, sometimes we tend to commit several changes at once. Justifiy the most changes made and the rest follow.
  **Pull Request and Code Review** - Before any sync is made ( read: one developer), the code is review before any pull request been made in order to prevent conflict and hassle.
  **CI/CD Automation** - Using github (Action Beta) and vercel helps me to automatically code reviewing ensuring only working code that passed can be merged into Main and also deploy to the cloud.  

