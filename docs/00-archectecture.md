# Stack & Project Philosophy

Designed with a minimil\[ist] set of libraries to build constructs designed to be as agnostic, descriptive, as possible.

Constructs in this context are:
* Node.JS modules
* React components
* Classes
* Functions
* helpers
* utils

Aeon is the code base and engine in which you your projects workflow and services is build. Eg anytime your building a Webpack you'll prob use Webpack and need it's Development server.

### Reason for Initial Complexity

While initially on a short time line such as an MVP, software QA tools, devops seem to be a time sink. On a long enough timeline with enough complex projects and entropy (dependencies, features, etc), you'll find using a boilerplate will actually allow much high quality code and early error catching aiding rapid prototyping.

Momentum can be lost to manual testing, updates or dependencies that suddenly stop working because of package changes (hint, this is why you want nightly, weekly, monthly etc builds even if nothings changed).

QA tools such as prettier, linters, precommit/prepush, CI and CI can unlock *huge multipliers* As you've automated whole days (or devs) away, with quick feedback look on if package updates or feature changes have upset any parts of your code base and services.

### Stack
The project consists of a few groups with the frontend and backend partitioned to make sure they each excel at their designated task rather than shoehorning a Webpack Build Server, SSR Renderer, GraphQL+Database backend into a single monolith which is still possible to tie the two express server together if needed but easier to proxy a la cate.













