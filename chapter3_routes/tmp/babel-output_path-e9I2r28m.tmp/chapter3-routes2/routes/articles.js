//  app/routes/article.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		var articles = [{
			id: 1,
			title: 'Pushing a CSS file from an addon into the host ',
			body: "So I got an addon working great - pushing everything under the ./app directory and even a 3rd party bower component into the hosted app BUT there a CSS file I'd like to include along with my component and for the life of me I can't figure out where to put what file or line of code to get into the final host's vendor.css.The more detailed steps the better since this is my first ember project and I'm groping a little...Thanks!",
			category: 'java'
		}, {
			id: 2,
			title: 'Why i´m leaving ember',
			body: "We have an ambitiously large ember-cli app (our pods folder is 3.4 MB for 1,101 items) running on the bleeding(ish) edge version of everything:",
			category: 'java'
		}, {
			id: 13,
			title: 'Ember-cli compilation time',
			body: "I'm on a super small project compared to yours but it takes ~5-10 secs to build. It was so annoying I first ditched the idea of using live reload and now I'm not using ember serve at all. While developing, I serve the app via python -m SimpleHTTPServer and run ember build as needed.",
			category: 'php'
		}, {
			id: 4,
			title: 'How to get metaData of model?',
			body: "Interesting - with that approach, how often do you need to build? If I change a template, doesn't a precompile have to happen before I can see any updates in the bowser? We also ditched live-reload a while back..",
			category: 'java'
		}];

		return articles;
	}
});