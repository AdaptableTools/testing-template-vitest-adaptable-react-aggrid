export interface WebFramework {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  github_stars: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  license: string;
  topics: string[];
  github_watchers: number;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  closed_issues_count: number;
  open_pr_count: number;
  closed_pr_count: number;
  week_issue_change: number;
}

export const rowData: WebFramework[] = [
  {
    id: 10270250,
    name: "react",
    full_name: "facebook/react",
    html_url: "https://github.com/facebook/react",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    created_at: new Date("2013-05-24T16:15:54").toDateString(),
    updated_at: new Date("2021-12-20T09:03:49").toDateString(),
    pushed_at: new Date("2021-12-19T14:34:59").toDateString(),
    homepage: "https://reactjs.org",
    github_stars: 179429,
    language: "JavaScript",
    forks_count: 36403,
    open_issues_count: 920,
    license: "MIT License",
    topics: ["declarative", "frontend", "javascript", "library", "react", "ui"],
    github_watchers: 6671,
    has_projects: true,
    has_wiki: true,
    has_pages: true,
    closed_issues_count: 10326,
    open_pr_count: 249,
    closed_pr_count: 11408,
    week_issue_change: 5,
  },
  {
    id: 24195339,
    name: "angular",
    full_name: "angular/angular",
    html_url: "https://github.com/angular/angular",
    description: "The modern web developer’s platform",
    created_at: new Date("2014-09-18T16:12:01").toDateString(),
    updated_at: new Date("2021-12-20T08:37:07").toDateString(),
    pushed_at: new Date("2021-12-19T21:54:01").toDateString(),
    homepage: "https://angular.io",
    github_stars: 78348,
    language: "TypeScript",
    forks_count: 20569,
    open_issues_count: 1889,
    license: "MIT License",
    topics: ["angular", "javascript", "pwa", "typescript", "web", "web-framework", "web-performance"],
    github_watchers: 3119,
    has_projects: true,
    has_wiki: false,
    has_pages: false,
    closed_issues_count: 21706,
    open_pr_count: 159,
    closed_pr_count: 20052,
    week_issue_change: 12,
  },
  {
    id: 11730342,
    name: "vue",
    full_name: "vuejs/vue",
    html_url: "https://github.com/vuejs/vue",
    description: "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
    created_at: new Date("2013-07-29T03:24:51").toDateString(),
    updated_at: new Date("2021-12-20T08:47:06").toDateString(),
    pushed_at: new Date("2021-12-20T08:10:16").toDateString(),
    homepage: "http://vuejs.org",
    github_stars: 191435,
    language: "JavaScript",
    forks_count: 30945,
    open_issues_count: 546,
    license: "MIT License",
    topics: ["framework", "frontend", "javascript", "vue"],
    github_watchers: 6187,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 9318,
    open_pr_count: 224,
    closed_pr_count: 1878,
    week_issue_change: -9,
  },
  {
    id: 74293321,
    name: "svelte",
    full_name: "sveltejs/svelte",
    html_url: "https://github.com/sveltejs/svelte",
    description: "Cybernetically enhanced web apps",
    created_at: new Date("2016-11-20T18:13:05").toDateString(),
    updated_at: new Date("2021-12-20T08:56:37").toDateString(),
    pushed_at: new Date("2021-12-19T14:53:30").toDateString(),
    homepage: "https://svelte.dev",
    github_stars: 53935,
    language: "TypeScript",
    forks_count: 2584,
    open_issues_count: 604,
    license: "MIT License",
    topics: ["compiler", "template", "ui"],
    github_watchers: 874,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 3549,
    open_pr_count: 104,
    closed_pr_count: 2738,
    week_issue_change: 14,
  },
  {
    id: 224663696,
    name: "alpine",
    full_name: "alpinejs/alpine",
    html_url: "https://github.com/alpinejs/alpine",
    description: "A rugged, minimal framework for composing JavaScript behavior in your markup. ",
    created_at: new Date("2019-11-28T13:51:55").toDateString(),
    updated_at: new Date("2021-12-20T08:12:43").toDateString(),
    pushed_at: new Date("2021-12-14T16:02:26").toDateString(),
    homepage: "https://alpinejs.dev",
    github_stars: 19338,
    language: "HTML",
    forks_count: 837,
    open_issues_count: 19,
    license: "MIT License",
    topics: [],
    github_watchers: 202,
    has_projects: false,
    has_wiki: false,
    has_pages: false,
    closed_issues_count: 544,
    open_pr_count: 13,
    closed_pr_count: 546,
    week_issue_change: 21,
  },
  {
    id: 95797174,
    name: "lit",
    full_name: "lit/lit",
    html_url: "https://github.com/lit/lit",
    description: "Lit is a simple library for building fast, lightweight web components.",
    created_at: new Date("2017-06-29T16:27:16").toDateString(),
    updated_at: new Date("2021-12-20T07:20:35").toDateString(),
    pushed_at: new Date("2021-12-17T03:45:26").toDateString(),
    homepage: "https://lit.dev",
    github_stars: 9752,
    language: "JavaScript",
    forks_count: 528,
    open_issues_count: 207,
    license: "BSD 3-Clause",
    topics: ["html-templates", "lit", "lit-element", "lit-html"],
    github_watchers: 204,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 895,
    open_pr_count: 53,
    closed_pr_count: 1138,
    week_issue_change: -45,
  },
  {
    id: 76694515,
    name: "stimulus",
    full_name: "hotwired/stimulus",
    html_url: "https://github.com/hotwired/stimulus",
    description: "A modest JavaScript framework for the HTML you already have",
    created_at: new Date("2016-12-17T00:19:29").toDateString(),
    updated_at: new Date("2021-12-20T07:20:01").toDateString(),
    pushed_at: new Date("2021-12-17T20:47:34").toDateString(),
    homepage: "https://stimulus.hotwired.dev/",
    github_stars: 11049,
    language: "TypeScript",
    forks_count: 316,
    open_issues_count: 17,
    license: "MIT License",
    topics: [],
    github_watchers: 221,
    has_projects: false,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 282,
    open_pr_count: 5,
    closed_pr_count: 191,
    week_issue_change: -11,
  },
  {
    id: 1801829,
    name: "ember.js",
    full_name: "emberjs/ember.js",
    html_url: "https://github.com/emberjs/ember.js",
    description: "Ember.js - A JavaScript framework for creating ambitious web applications",
    created_at: new Date("2011-05-25T23:39:40").toDateString(),
    updated_at: new Date("2021-12-19T07:57:31").toDateString(),
    pushed_at: new Date("2021-12-20T07:15:54").toDateString(),
    homepage: "https://emberjs.com",
    github_stars: 22093,
    language: "JavaScript",
    forks_count: 4253,
    open_issues_count: 427,
    license: "MIT License",
    topics: ["ember", "hacktoberfest", "javascript", "javascript-framework"],
    github_watchers: 908,
    has_projects: true,
    has_wiki: false,
    has_pages: false,
    closed_issues_count: 6187,
    open_pr_count: 94,
    closed_pr_count: 9574,
    week_issue_change: -22,
  },
  {
    id: 82095231,
    name: "stencil",
    full_name: "ionic-team/stencil",
    html_url: "https://github.com/ionic-team/stencil",
    description: "A toolchain for building scalable, enterprise-ready component systems on top of TypeScript.",
    created_at: new Date("2017-02-15T18:57:07").toDateString(),
    updated_at: new Date("2021-12-20T05:46:50").toDateString(),
    pushed_at: new Date("2021-12-16T21:15:17").toDateString(),
    homepage: "https://stenciljs.com",
    github_stars: 9884,
    language: "TypeScript",
    forks_count: 641,
    open_issues_count: 499,
    license: "Other",
    topics: [
      "custom-elements",
      "ionic",
      "progressive-web-app",
      "pwa",
      "ssg",
      "ssr",
      "static-site-generator",
      "stencil",
      "stenciljs",
      "typescript",
      "webcomponents",
    ],
    github_watchers: 203,
    has_projects: true,
    has_wiki: false,
    has_pages: false,
    closed_issues_count: 1929,
    open_pr_count: 46,
    closed_pr_count: 743,
    week_issue_change: 12,
  },
  {
    id: 130884470,
    name: "solid",
    full_name: "solidjs/solid",
    html_url: "https://github.com/solidjs/solid",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    created_at: new Date("2018-04-24T16:36:27").toDateString(),
    updated_at: new Date("2021-12-20T08:29:47").toDateString(),
    pushed_at: new Date("2021-12-19T21:06:01").toDateString(),
    homepage: "https://solidjs.com",
    github_stars: 13119,
    language: "TypeScript",
    forks_count: 330,
    open_issues_count: 21,
    license: "MIT License",
    topics: ["declarative", "fine-grained", "javascript", "jsx", "performance", "proxies", "reactive", "solid"],
    github_watchers: 161,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 366,
    open_pr_count: 3,
    closed_pr_count: 164,
    week_issue_change: 23,
  },
  {
    id: 17814354,
    name: "mithril.js",
    full_name: "MithrilJS/mithril.js",
    html_url: "https://github.com/MithrilJS/mithril.js",
    description: "A JavaScript Framework for Building Brilliant Applications",
    created_at: new Date("2014-03-17T01:59:39").toDateString(),
    updated_at: new Date("2021-12-20T03:17:55").toDateString(),
    pushed_at: new Date("2021-11-24T10:16:47").toDateString(),
    homepage: "https://mithril.js.org",
    github_stars: 13064,
    language: "JavaScript",
    forks_count: 940,
    open_issues_count: 173,
    license: "MIT License",
    topics: ["framework", "javascript", "mithril", "router", "vdom", "virtual-dom", "xhr"],
    github_watchers: 324,
    has_projects: true,
    has_wiki: true,
    has_pages: true,
    closed_issues_count: 1368,
    open_pr_count: 28,
    closed_pr_count: 1144,
    week_issue_change: 57,
  },
  {
    id: 167174,
    name: "jquery",
    full_name: "jquery/jquery",
    html_url: "https://github.com/jquery/jquery",
    description: "jQuery JavaScript Library",
    created_at: new Date("2009-04-03T15:20:14").toDateString(),
    updated_at: new Date("2021-12-20T06:13:48").toDateString(),
    pushed_at: new Date("2021-12-17T16:50:04").toDateString(),
    homepage: "https://jquery.com",
    github_stars: 55666,
    language: "JavaScript",
    forks_count: 20187,
    open_issues_count: 84,
    license: "MIT License",
    topics: ["jquery"],
    github_watchers: 3306,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 2083,
    open_pr_count: 13,
    closed_pr_count: 2692,
    week_issue_change: 15,
  },
  {
    id: 5532320,
    name: "polymer",
    full_name: "Polymer/polymer",
    html_url: "https://github.com/Polymer/polymer",
    description: "Our original Web Component library.",
    created_at: new Date("2012-08-23T20:56:30").toDateString(),
    updated_at: new Date("2021-12-19T05:05:03").toDateString(),
    pushed_at: new Date("2021-12-07T22:20:44").toDateString(),
    homepage: "https://polymer-library.polymer-project.org/",
    github_stars: 21724,
    language: "HTML",
    forks_count: 2026,
    open_issues_count: 281,
    license: "Other",
    topics: ["polymer", "web-components"],
    github_watchers: 894,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 3648,
    open_pr_count: 26,
    closed_pr_count: 1404,
    week_issue_change: 9,
  },
  {
    id: 952189,
    name: "backbone",
    full_name: "jashkenas/backbone",
    html_url: "https://github.com/jashkenas/backbone",
    description: "Give your JS App some Backbone with Models, Views, Collections, and Events",
    created_at: new Date("2010-09-30T19:41:28").toDateString(),
    updated_at: new Date("2021-12-19T05:50:57").toDateString(),
    pushed_at: new Date("2020-05-19T16:52:55").toDateString(),
    homepage: "http://backbonejs.org",
    github_stars: 27840,
    language: "JavaScript",
    forks_count: 5608,
    open_issues_count: 85,
    license: "MIT License",
    topics: [],
    github_watchers: 1365,
    has_projects: true,
    has_wiki: true,
    has_pages: true,
    closed_issues_count: 2335,
    open_pr_count: 32,
    closed_pr_count: 1797,
    week_issue_change: -14,
  },
  {
    id: 757363,
    name: "knockout",
    full_name: "knockout/knockout",
    html_url: "https://github.com/knockout/knockout",
    description: "Knockout makes it easier to create rich, responsive UIs with JavaScript",
    created_at: new Date("2010-07-05T08:08:34").toDateString(),
    updated_at: new Date("2021-12-18T17:20:52").toDateString(),
    pushed_at: new Date("2021-10-09T07:42:49").toDateString(),
    homepage: "http://knockoutjs.com/",
    github_stars: 10122,
    language: "JavaScript",
    forks_count: 1571,
    open_issues_count: 362,
    license: "Other",
    topics: ["data-binding", "javascript", "knockout", "mvvm"],
    github_watchers: 549,
    has_projects: true,
    has_wiki: true,
    has_pages: true,
    closed_issues_count: 1534,
    open_pr_count: 72,
    closed_pr_count: 670,
    week_issue_change: 63,
  },
  {
    id: 191051391,
    name: "redwood",
    full_name: "redwoodjs/redwood",
    html_url: "https://github.com/redwoodjs/redwood",
    description: "The App Framework for Startups",
    created_at: new Date("2019-06-09T20:17:57").toDateString(),
    updated_at: new Date("2021-12-20T01:41:55").toDateString(),
    pushed_at: new Date("2021-12-20T00:37:09").toDateString(),
    homepage: "https://redwoodjs.com",
    github_stars: 10334,
    language: "TypeScript",
    forks_count: 431,
    open_issues_count: 269,
    license: "MIT License",
    topics: ["apollo", "graphql", "hacktoberfest", "jamstack", "prisma", "react"],
    github_watchers: 80,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 1071,
    open_pr_count: 35,
    closed_pr_count: 2602,
    week_issue_change: 14,
  },
  {
    id: 36040894,
    name: "gatsby",
    full_name: "gatsbyjs/gatsby",
    html_url: "https://github.com/gatsbyjs/gatsby",
    description: "Build blazing fast, modern apps and websites with React",
    created_at: new Date("2015-05-21T22:43:05").toDateString(),
    updated_at: new Date("2021-12-20T09:04:22").toDateString(),
    pushed_at: new Date("2021-12-20T08:04:34").toDateString(),
    homepage: "https://www.gatsbyjs.com",
    github_stars: 51931,
    language: "JavaScript",
    forks_count: 10049,
    open_issues_count: 359,
    license: "MIT License",
    topics: [
      "blog",
      "compiler",
      "documentation-tool",
      "gatsby",
      "graphql",
      "react",
      "static-site-generator",
      "web-app",
    ],
    github_watchers: 853,
    has_projects: true,
    has_wiki: false,
    has_pages: false,
    closed_issues_count: 12975,
    open_pr_count: 180,
    closed_pr_count: 19058,
    week_issue_change: -34,
  },
  {
    id: 26316966,
    name: "cyclejs",
    full_name: "cyclejs/cyclejs",
    html_url: "https://github.com/cyclejs/cyclejs",
    description: "A functional and reactive JavaScript framework for predictable code",
    created_at: new Date("2014-11-07T11:28:45").toDateString(),
    updated_at: new Date("2021-12-20T06:39:49").toDateString(),
    pushed_at: new Date("2021-12-17T11:03:37").toDateString(),
    homepage: "http://cycle.js.org",
    github_stars: 9999,
    language: "TypeScript",
    forks_count: 421,
    open_issues_count: 102,
    license: "MIT License",
    topics: [
      "cyclejs",
      "framework",
      "functional-programming",
      "hacktoberfest",
      "javascript",
      "reactive-programming",
      "rxjs",
      "typescript",
    ],
    github_watchers: 205,
    has_projects: true,
    has_wiki: true,
    has_pages: true,
    closed_issues_count: 563,
    open_pr_count: 26,
    closed_pr_count: 301,
    week_issue_change: -2,
  },
  {
    id: 42283287,
    name: "preact",
    full_name: "preactjs/preact",
    html_url: "https://github.com/preactjs/preact",
    description: "⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM.",
    created_at: new Date("2015-09-11T02:40:18").toDateString(),
    updated_at: new Date("2021-12-20T09:02:15").toDateString(),
    pushed_at: new Date("2021-12-17T23:21:58").toDateString(),
    homepage: "https://preactjs.com",
    github_stars: 30538,
    language: "JavaScript",
    forks_count: 1702,
    open_issues_count: 222,
    license: "MIT License",
    topics: ["components", "dom", "jsx", "preact", "react", "vdom", "virtual-dom"],
    github_watchers: 425,
    has_projects: true,
    has_wiki: true,
    has_pages: true,
    closed_issues_count: 1309,
    open_pr_count: 78,
    closed_pr_count: 1729,
    week_issue_change: -12,
  },
  {
    id: 13142126,
    name: "riot",
    full_name: "riot/riot",
    html_url: "https://github.com/riot/riot",
    description: "Simple and elegant component-based UI library",
    created_at: new Date("2013-09-27T05:21:01").toDateString(),
    updated_at: new Date("2021-12-20T05:17:31").toDateString(),
    pushed_at: new Date("2021-12-17T20:09:25").toDateString(),
    homepage: "https://riot.js.org",
    github_stars: 14597,
    language: "JavaScript",
    forks_count: 1032,
    open_issues_count: 5,
    license: "Other",
    topics: [
      "client-side",
      "customelement",
      "customelements",
      "customtags",
      "elegant",
      "framework",
      "javascript",
      "lite",
      "minimal",
      "simple",
      "view",
      "webcomponents",
    ],
    github_watchers: 412,
    has_projects: true,
    has_wiki: false,
    has_pages: false,
    closed_issues_count: 2147,
    open_pr_count: 0,
    closed_pr_count: 755,
    week_issue_change: 0,
  },
  {
    id: 121594173,
    name: "aurelia",
    full_name: "aurelia/aurelia",
    html_url: "https://github.com/aurelia/aurelia",
    description:
      "Aurelia 2, a standards-based, front-end framework designed for high-performing, ambitious applications.",
    created_at: new Date("2018-02-15T05:22:58").toDateString(),
    updated_at: new Date("2021-12-19T04:23:43").toDateString(),
    pushed_at: new Date("2021-11-28T16:21:43").toDateString(),
    homepage: "",
    github_stars: 1142,
    language: "TypeScript",
    forks_count: 121,
    open_issues_count: 143,
    license: "MIT License",
    topics: [
      "aurelia",
      "cordova",
      "cross-platform",
      "electron",
      "framework",
      "frontend",
      "html",
      "javascript",
      "javascript-framework",
      "mobile",
      "pwa",
      "single-page-applications",
      "spa",
      "typescript",
      "web",
      "web-framework",
      "web-performance",
    ],
    github_watchers: 66,
    has_projects: true,
    has_wiki: false,
    has_pages: false,
    closed_issues_count: 214,
    open_pr_count: 17,
    closed_pr_count: 959,
    week_issue_change: 32,
  },
  {
    id: 70107786,
    name: "next.js",
    full_name: "vercel/next.js",
    html_url: "https://github.com/vercel/next.js",
    description: "The React Framework",
    created_at: new Date("2016-10-05T23:32:51").toDateString(),
    updated_at: new Date("2021-12-20T08:57:47").toDateString(),
    pushed_at: new Date("2021-12-20T08:21:58").toDateString(),
    homepage: "https://nextjs.org",
    github_stars: 78446,
    language: "JavaScript",
    forks_count: 15787,
    open_issues_count: 1361,
    license: "MIT License",
    topics: [
      "blog",
      "browser",
      "compiler",
      "components",
      "hybrid",
      "nextjs",
      "node",
      "react",
      "server-rendering",
      "ssg",
      "static",
      "static-site-generator",
      "universal",
      "vercel",
    ],
    github_watchers: 1224,
    has_projects: false,
    has_wiki: false,
    has_pages: false,
    closed_issues_count: 10320,
    open_pr_count: 254,
    closed_pr_count: 9849,
    week_issue_change: 63,
  },
  {
    id: 71995937,
    name: "nuxt.js",
    full_name: "nuxt/nuxt.js",
    html_url: "https://github.com/nuxt/nuxt.js",
    description: "The Intuitive Vue(2) Framework",
    created_at: new Date("2016-10-26T11:18:47").toDateString(),
    updated_at: new Date("2021-12-20T08:27:45").toDateString(),
    pushed_at: new Date("2021-12-20T08:05:15").toDateString(),
    homepage: "https://nuxtjs.org",
    github_stars: 38997,
    language: "JavaScript",
    forks_count: 3157,
    open_issues_count: 464,
    license: "Other",
    topics: [
      "framework",
      "isomorphic",
      "nuxt",
      "server-rendering",
      "ssr",
      "universal",
      "vue",
      "vue-router",
      "vuex",
      "web-app",
    ],
    github_watchers: 772,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 6129,
    open_pr_count: 30,
    closed_pr_count: 2869,
    week_issue_change: -18,
  },
  {
    id: 3214406,
    name: "meteor",
    full_name: "meteor/meteor",
    html_url: "https://github.com/meteor/meteor",
    description: "Meteor, the JavaScript App Platform",
    created_at: new Date("2012-01-19T01:58:17").toDateString(),
    updated_at: new Date("2021-12-20T06:36:27").toDateString(),
    pushed_at: new Date("2021-12-17T18:10:08").toDateString(),
    homepage: "https://www.meteor.com",
    github_stars: 42742,
    language: "JavaScript",
    forks_count: 5187,
    open_issues_count: 120,
    license: "Other",
    topics: [
      "build-system",
      "framework",
      "hacktoberfest",
      "javascript",
      "meteor",
      "mongodb",
      "nodejs",
      "npm",
      "reactive-programming",
      "zero-configuration",
    ],
    github_watchers: 1642,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    closed_issues_count: 8537,
    open_pr_count: 24,
    closed_pr_count: 2998,
    week_issue_change: 21,
  },
  {
    id: 43695474,
    name: "quasar",
    full_name: "quasarframework/quasar",
    html_url: "https://github.com/quasarframework/quasar",
    description: "Quasar Framework - Build high-performance VueJS user interfaces in record time",
    created_at: new Date("2015-10-05T15:45:36").toDateString(),
    updated_at: new Date("2021-12-20T08:26:07").toDateString(),
    pushed_at: new Date("2021-12-19T23:18:50").toDateString(),
    homepage: "https://quasar.dev",
    github_stars: 20095,
    language: "JavaScript",
    forks_count: 2543,
    open_issues_count: 367,
    license: "MIT License",
    topics: [
      "android",
      "browser-extension",
      "electron",
      "ios",
      "javascript",
      "material",
      "material-components",
      "material-design",
      "material-theme",
      "pwa",
      "quasar-framework",
      "server-side-rendering",
      "ssr",
      "vue",
      "vue-component",
      "vue-components",
      "vue2",
      "vuejs",
      "vuejs2",
    ],
    github_watchers: 488,
    has_projects: false,
    has_wiki: false,
    has_pages: false,
    closed_issues_count: 6097,
    open_pr_count: 97,
    closed_pr_count: 3424,
    week_issue_change: 1,
  },
];