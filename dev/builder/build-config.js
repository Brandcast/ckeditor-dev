/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/* exported CKBUILDER_CONFIG */

var CKBUILDER_CONFIG = {
	skin: 'moono-dark',
	ignore: [
		'bender.js',
		'.bender',
		'bender-err.log',
		'bender-out.log',
		'dev',
        'samples',
		'docs',
		'.DS_Store',
		'.editorconfig',
		'.gitignore',
		'.gitattributes',
		'gruntfile.js',
		'.idea',
		'.jscsrc',
		'.jshintignore',
		'.jshintrc',
		'less',
		'.mailmap',
		'node_modules',
		'package.json',
		'README.md',
		'tests'
	],
    plugins: {
    	basicstyles: 1,
    	blockquote: 1,
    	dialogui: 1,
    	dialog: 1,
    	clipboard: 1,
    	enterkey: 1,
    	entities: 1,
    	floatingspace: 1,
        justify: 1,
    	htmlwriter: 1,
    	indent: 1,
    	indentlist: 1,
    	fakeobjects: 1,
    	link: 1,
    	list: 1,
    	pastetext: 1,
    	pastefromword: 1,
    	tab: 1,
    	undo: 1,
    	removeformat: 1,
        confighelper: 1
    }
};
