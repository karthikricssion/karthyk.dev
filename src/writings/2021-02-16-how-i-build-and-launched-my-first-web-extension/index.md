---
slug: "/writings/how-i-build-and-launched-my-first-web-extension"
title: "🚀 How I build and launched my first web extension"
date: "2021-02-16"
tags: 
    - product
    - idea
    - browser extension
category: "product"
author: { name: 'Karthikeyan Rajendran', url: 'https://twitter.com/karthik_dot_js' }
published: true
---

P.S: This was my first side project to get published 

### 💡 Ideation 
It was a Saturday evening having my cup of coffee, thinking about the problems I use to face while building web applications. I took my note, started listing out problems and the solutions I used at that time. By analyzing I found a simple problem that can be solved on the usability of temp-email extensions.

### 🙈 Problem
I use to test a lot of products for gathering ideas and motivation, I get spammed a lot. And while testing my product modules like registration, emails I need a quick inbox where I can access email in-ease to test out my emails. Tried various quick extension plugins, Most of the plugins either takes me to a new tab or their website.

### 💻 Develop
I don't have prior knowledge of developing web extensions. I googled and found that [MDN Firefox web extension docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions). I followed with getting started and tried out their examples. I tried to modify the codes and play around with them. Then I started to work out a small idea in order to explore more I developed a simple extension called [Responsify viewer](https://addons.mozilla.org/en-US/firefox/addon/responsify-viewer/). It gave an idea about how to use 'content script', 'browser local storage', and 'manifest file'. 

I thought to get started with developing the app extension. I took my notebook again started drawing the user flows, UI of the views, and list the functionalities related to the UI's. I chose VueJS framework for developing the extension. Research and found a generator call [vue-cli-browser-extension](https://github.com/adambullmer/vue-cli-plugin-browser-extension). Framed a plan with the following todos

- Give a name
- Design extension logo 
- Design icons for the app
- CSS Loader
- Build HTML layouts
- Add VueJs to the project
- Split the HTML into Vue components
- work on icons for all resolution
- Add JS functionalities
- Build a website and write content myself

#### ⛳ MVP
It took me 5 days to develop the application. It came well. I did most of the development testing manually, didn't create any test cases because I haven't done it. I shared the project with my dev friends and asked them for their feedback on the usage. Meanwhile, I chose versoly website builder for building the website. It took me just 4hrs to work on the layouts and contents and then share with the same people for feedback. I was surprised with feedbacks they gave and I started to work on it and updated both the app and website. The product is ready to publish.

### ⛵ Ship the product
I was planned to publish extension for firefox and chrome. I followed the steps and submitted for review and get approval. After 1 day got a mail from firefox that my extension that app is added to their gallery and another mail in the next few hours from google stating I need to add a privacy page to my website. I worked out with a simple privacy page and re-submitted for review. It took nearly 4 days to get approved for the public. 

Hurray! what a journey it was to work on from an idea to publish. Next comes the most important part ***How to market the product?*** Where I wasn't successful in that, but am still figuring it out away. I will write a post on *Success or failure* soon. 

I am sharing the extension website link and addon links here, Try out! and I am open to any feedback and comments. 

Website: [https://tempemailify.versoly.page/](https://tempemailify.versoly.page/) \
Chrome Addon: [Link](https://chrome.google.com/webstore/detail/tempemailify-an-temporary/odnbnmfjpeiegeabmjefkbioiblkceha?hl=en-GB&authuser=0) \
Firefox Addon: [Link](https://addons.mozilla.org/en-GB/firefox/addon/tempemailify/)  

