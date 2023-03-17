export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6295e479.js","imports":["_app/immutable/entry/start.6295e479.js","_app/immutable/chunks/index.847936d9.js","_app/immutable/chunks/singletons.0a1306d0.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.63574fea.js","imports":["_app/immutable/entry/app.63574fea.js","_app/immutable/chunks/index.847936d9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
