# Contributing to the Daisy Collection

Thank you for considering contributing to our open source project. Whether you are fixing a
bug, implementing a new feature or improving code, your efforts make a difference. Together,
We can create an amazing collection of UI examples for DaisyUI that everyone can use!

The main way to contribute is by adding new user interface (UI) examples such as navigation bars, sidebars, authentication forms, blog sections, and so on. Other ways to contribute include reporting 
issues and make feature requests

## Guide to add a new UI example

### 1. Fork the repository

The first step is to fork this repository

### 2. Build the project

This project is made with [Astro](https://astro.build/) and [Svelte](https://svelte.dev/). After
forking the repository, clone your fork locally and install all dependencies:

```
npm install
```

After that, start the Astro web server:

```
npm run dev
```

### 3. Make a new UI example

In the `src/examples` folder, there are many subfolders such as `navbar` and `sidebar`. Each of these subfolders is a tag that groups UI examples

To add a new UI example, simply create an HTML file within one of these tag subfolders

> [!NOTE]
> If your UI example doesn't fit into any existing tags, you can create a new tag subfolder for it

The file name must be lower camel case and represent a feature of your example UI, like `centeredLogo` 
for a navigation bar with centered logo

In the HTML file, you can use TailwindCSS, DaisyUI and Font Awesome. Make sure to add simple
HTML comments in code to separate and organize it better

> [!IMPORTANT]
> To make things more organized, add only one UI example per pull request

### 4. Make a pull request

After you finish your UI example, submit a pull request. Make sure your UI example:

- Is well written, clean and have comments
- Only uses TailwindCSS, DaisyUI and Font Awesome
- Have a new look (do not repeat existing UI examples)

That's it. If you followed all the steps, your UI example will be added to the collection!

> [!WARNING]
> Please be aware that there are no guarantees that your pull request will be accepted. If it is not
> accepted, a comment will be left explaining why

## Other ways to contribute

### [Report problems](https://github.com/willpinha/daisy-collection/issues/new?assignees=willpinha&labels=bug&projects=&template=report_problem.yml)

If you find any bugs in the collection or ways to improve the existing code, please submit an issue 
explaining the problem. If it's simple to solve, you can submit a pull request referencing your issue

### [Make feature requests](https://github.com/willpinha/daisy-collection/issues/new?assignees=willpinha&labels=enhancement&projects=&template=feature_request.yml)

If you would like to see any new features in this collection, please submit an issue explaining which 
feature you want. If it's simple to implement, you can submit a pull request referencing your issue

### Share with others

If you liked this collection, we would be very happy if you shared it with your friends and colleagues,
and on your social networks. Thanks!
