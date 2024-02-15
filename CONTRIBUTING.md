# Contributing to the Daisy Collection

Thank you for considering contributing to our open source project. Whether you are fixing a problem
or making an improvement, your efforts make a difference. Together, we can create an amazing 
collection of UI components for DaisyUI that everyone can use!

Currently, there are 4 ways to contribute:

- [Add new UI components](#add-a-new-ui-component) such as navigation bars, sidebars, authentication forms, blog sections, and so on
- [Report problems with UI components](#report-problems-with-ui-components)
- [Point out improvements to UI components](#point-out-improvements-to-ui-components)
- [Share with others](#share-with-others)

## Project structure

All UI components are located in the `src/collection` folder. Each subfolder within it is a tag and
each file within these tags is a UI component

A UI component is simply an HTML file containing DaisyUI, TailwindCSS and Font Awesome classes

## Contributing

## Issues to contribute

If you want to contribute to issues that are not assigned to anyone else, use
[this issue filter](https://github.com/willpinha/daisy-collection/issues?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted) to select all issues with the `help-wanted` label

### Add a new UI component

#### 1. Fork the repository

The first step is to fork this repository

#### 2. Create a new branch

Create a new branch on the fork, where you can work on your contribution

#### 3. Build the project

This project is made with [Astro](https://astro.build/) and [Svelte](https://svelte.dev/). After
forking the repository, clone your fork locally and install all dependencies:

```
npm install
```

After that, start the Astro web server:

```
npm run dev
```

#### 4. Make a new UI component

In the `src/collection` folder, there are many subfolders such as `navbar` and `sidebar`. Each of these 
subfolders is a tag that groups UI components

To add a new UI component, simply create an HTML file within one of these tag subfolders

> [!NOTE]
> If your UI component doesn't fit into any existing tags, you can create a new tag subfolder for it

The file name must be lower camel case and represent a feature of your example UI, like `centeredLogo` 
for a navigation bar with centered logo

In the HTML file, you can use TailwindCSS, DaisyUI and Font Awesome. Make sure to add simple
HTML comments in code to separate and organize it better

> [!IMPORTANT]
> To make things more organized, add only one UI component per pull request

#### 5. Make a pull request

After you finish your UI component, submit a pull request. Make sure your UI component:

- Is well written, clean and have brief comments
- Only uses TailwindCSS, DaisyUI and Font Awesome
- Have a new look (do not repeat existing UI components)

That's it. If you followed all the steps, your UI component will be added to the collection!

> [!WARNING]
> Please be aware that there are no guarantees that your pull request will be accepted. If it is not
> accepted, a comment will be left explaining why

> [!IMPORTANT]
> Please allow changes to the pull request code for possible improvements before the pull request is   
> merged 

### Report problems with UI components

If you find any problems in the collection, please
[submit an issue](https://github.com/willpinha/daisy-collection/issues/new?assignees=willpinha&labels=problem&projects=&template=report_problem.yml)
explaining the problem. If it's simple to solve, you can submit a pull request referencing your issue

### Point out improvements to UI components

If you see something in the look or code of a sample UI that could be improved, please
[submit an issue](https://github.com/willpinha/daisy-collection/issues/new?assignees=willpinha&labels=improvement&projects=&template=improvement.yml)
explaining the improvement

### Share with others

If you liked this collection, we would be very happy if you shared it with your friends and colleagues,
and on your social networks. Thanks!
