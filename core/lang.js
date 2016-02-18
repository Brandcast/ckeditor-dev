/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

( function() {
	/**
	 * Stores language-related functions.
	 *
	 * @class
	 * @singleton
	 */
	CKEDITOR.lang = {
		/**
		 * The list of languages available in the editor core.
		 *
		 *		alert( CKEDITOR.lang.languages.en ); // 1
		 */
		languages: {
			af: 1, ar: 1, bg: 1, bn: 1, bs: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, el: 1,
			'en-au': 1, 'en-ca': 1, 'en-gb': 1, en: 1, eo: 1, es: 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1,
			'fr-ca': 1, fr: 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, id: 1, is: 1, it: 1, ja: 1, ka: 1,
			km: 1, ko: 1, ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, ms: 1, nb: 1, nl: 1, no: 1, pl: 1, 'pt-br': 1,
			pt: 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, 'sr-latn': 1, sr: 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1,
			uk: 1, vi: 1, 'zh-cn': 1, zh: 1
		},

		/**
		 * The list of languages that are written Right-To-Left (RTL) and are supported by the editor.
		 */
		rtl: { ar: 1, fa: 1, he: 1, ku: 1, ug: 1 },

		/**
		 * Loads a specific language file, or auto detects it. A callback is
		 * then called when the file gets loaded.
		 *
		 * @param {String} languageCode The code of the language file to be
		 * loaded. If null or empty, autodetection will be performed. The
		 * same happens if the language is not supported.
		 * @param {String} defaultLanguage The language to be used if
		 * `languageCode` is not supported or if the autodetection fails.
		 * @param {Function} callback A function to be called once the
		 * language file is loaded. Two parameters are passed to this
		 * function: the language code and the loaded language entries.
		 */
		load: function( languageCode, defaultLanguage, callback ) {
			// If no languageCode - fallback to browser or default.
			// If languageCode - fallback to no-localized version or default.
			if ( !languageCode || !CKEDITOR.lang.languages[ languageCode ] )
				languageCode = this.detect( defaultLanguage, languageCode );

			var that = this,
				loadedCallback = function() {
					that[ languageCode ].dir = that.rtl[ languageCode ] ? 'rtl' : 'ltr';
					callback( languageCode, that[ languageCode ] );
				};

			if ( !this[ languageCode ] )
				CKEDITOR.scriptLoader.load( CKEDITOR.getUrl( 'lang/' + languageCode + '.js' ), loadedCallback, this );
			else
				loadedCallback();
		},

		/**
		 * Returns the language that best fits the user language. For example,
		 * suppose that the user language is "pt-br". If this language is
		 * supported by the editor, it is returned. Otherwise, if only "pt" is
		 * supported, it is returned instead. If none of the previous are
		 * supported, a default language is then returned.
		 *
		 *		alert( CKEDITOR.lang.detect( 'en' ) ); // e.g., in a German browser: 'de'
		 *
		 * @param {String} defaultLanguage The default language to be returned
		 * if the user language is not supported.
		 * @param {String} [probeLanguage] A language code to try to use,
		 * instead of the browser-based autodetection.
		 * @returns {String} The detected language code.
		 */
		detect: function( defaultLanguage, probeLanguage ) {
			var languages = this.languages;
			probeLanguage = probeLanguage || navigator.userLanguage || navigator.language || defaultLanguage;

			var parts = probeLanguage.toLowerCase().match( /([a-z]+)(?:-([a-z]+))?/ ),
				lang = parts[ 1 ],
				locale = parts[ 2 ];

			if ( languages[ lang + '-' + locale ] )
				lang = lang + '-' + locale;
			else if ( !languages[ lang ] )
				lang = null;

			CKEDITOR.lang.detect = lang ?
			function() {
				return lang;
			} : function( defaultLanguage ) {
				return defaultLanguage;
			};

			return lang || defaultLanguage;
		}
	};

	/*
	Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	For licensing, see LICENSE.md or http://ckeditor.com/license
	*/
	CKEDITOR.lang['en']={"editor":"Rich Text Editor","editorPanel":"Rich Text Editor panel","common":{"editorHelp":"Press ALT 0 for help","browseServer":"Browse Server","url":"URL","protocol":"Protocol","upload":"Upload","uploadSubmit":"Send it to the Server","image":"Image","flash":"Flash","form":"Form","checkbox":"Checkbox","radio":"Radio Button","textField":"Text Field","textarea":"Textarea","hiddenField":"Hidden Field","button":"Button","select":"Selection Field","imageButton":"Image Button","notSet":"<not set>","id":"Id","name":"Name","langDir":"Language Direction","langDirLtr":"Left to Right (LTR)","langDirRtl":"Right to Left (RTL)","langCode":"Language Code","longDescr":"Long Description URL","cssClass":"Stylesheet Classes","advisoryTitle":"Advisory Title","cssStyle":"Style","ok":"OK","cancel":"Cancel","close":"Close","preview":"Preview","resize":"Resize","generalTab":"General","advancedTab":"Advanced","validateNumberFailed":"This value is not a number.","confirmNewPage":"Any unsaved changes to this content will be lost. Are you sure you want to load new page?","confirmCancel":"You have changed some options. Are you sure you want to close the dialog window?","options":"Options","target":"Target","targetNew":"New Window (_blank)","targetTop":"Topmost Window (_top)","targetSelf":"Same Window (_self)","targetParent":"Parent Window (_parent)","langDirLTR":"Left to Right (LTR)","langDirRTL":"Right to Left (RTL)","styles":"Style","cssClasses":"Stylesheet Classes","width":"Width","height":"Height","align":"Alignment","alignLeft":"Left","alignRight":"Right","alignCenter":"Center","alignJustify":"Justify","alignTop":"Top","alignMiddle":"Middle","alignBottom":"Bottom","alignNone":"None","invalidValue":"Invalid value.","invalidHeight":"Height must be a number.","invalidWidth":"Width must be a number.","invalidCssLength":"Value specified for the \"%1\" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).","invalidHtmlLength":"Value specified for the \"%1\" field must be a positive number with or without a valid HTML measurement unit (px or %).","invalidInlineStyle":"Value specified for the inline style must consist of one or more tuples with the format of \"name : value\", separated by semi-colons.","cssLengthTooltip":"Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).","unavailable":"%1<span class=\"cke_accessibility\">, unavailable</span>"},"basicstyles":{"bold":"Bold","italic":"Italic","strike":"Strikethrough","subscript":"Subscript","superscript":"Superscript","underline":"Underline"},"blockquote":{"toolbar":"Block Quote"},"clipboard":{"copy":"Copy","copyError":"Your browser security settings don't permit the editor to automatically execute copying operations. Please use the keyboard for that (Ctrl/Cmd+C).","cut":"Cut","cutError":"Your browser security settings don't permit the editor to automatically execute cutting operations. Please use the keyboard for that (Ctrl/Cmd+X).","paste":"Paste","pasteArea":"Paste Area","pasteMsg":"Please paste inside the following box using the keyboard (<strong>Ctrl/Cmd+V</strong>) and hit OK","securityMsg":"Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.","title":"Paste"},"indent":{"indent":"Increase Indent","outdent":"Decrease Indent"},"fakeobjects":{"anchor":"Anchor","flash":"Flash Animation","hiddenfield":"Hidden Field","iframe":"IFrame","unknown":"Unknown Object"},"link":{"acccessKey":"Access Key","advanced":"Advanced","advisoryContentType":"Advisory Content Type","advisoryTitle":"Advisory Title","anchor":{"toolbar":"Anchor","menu":"Edit Anchor","title":"Anchor Properties","name":"Anchor Name","errorName":"Please type the anchor name","remove":"Remove Anchor"},"anchorId":"By Element Id","anchorName":"By Anchor Name","charset":"Linked Resource Charset","cssClasses":"Stylesheet Classes","emailAddress":"E-Mail Address","emailBody":"Message Body","emailSubject":"Message Subject","id":"Id","info":"Link Info","langCode":"Language Code","langDir":"Language Direction","langDirLTR":"Left to Right (LTR)","langDirRTL":"Right to Left (RTL)","menu":"Edit Link","name":"Name","noAnchors":"(No anchors available in the document)","noEmail":"Please type the e-mail address","noUrl":"Please type the link URL","other":"<other>","popupDependent":"Dependent (Netscape)","popupFeatures":"Popup Window Features","popupFullScreen":"Full Screen (IE)","popupLeft":"Left Position","popupLocationBar":"Location Bar","popupMenuBar":"Menu Bar","popupResizable":"Resizable","popupScrollBars":"Scroll Bars","popupStatusBar":"Status Bar","popupToolbar":"Toolbar","popupTop":"Top Position","rel":"Relationship","selectAnchor":"Select an Anchor","styles":"Style","tabIndex":"Tab Index","target":"Target","targetFrame":"<frame>","targetFrameName":"Target Frame Name","targetPopup":"<popup window>","targetPopupName":"Popup Window Name","title":"Link","toAnchor":"Link to anchor in the text","toEmail":"E-mail","toUrl":"URL","toolbar":"Link","type":"Link Type","unlink":"Unlink","upload":"Upload"},"list":{"bulletedlist":"Insert/Remove Bulleted List","numberedlist":"Insert/Remove Numbered List"},"magicline":{"title":"Insert paragraph here"},"pastetext":{"button":"Paste as plain text","title":"Paste as Plain Text"},"pastefromword":{"confirmCleanup":"The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?","error":"It was not possible to clean up the pasted data due to an internal error","title":"Paste from Word","toolbar":"Paste from Word"},"undo":{"redo":"Redo","undo":"Undo"}};

} )();
