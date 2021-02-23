"use strict"

/* Runs the setupStyles() function when the page is loaded */
window.addEventListener("load", setupStyles);

function setupStyles() {

	/* Create a link element for the page view styles */
	var pageStyle = document.createElement("link");

	/* defines the source of the style sheet file */
	pageStyle.setAttribute("href", "./StyleSheets/page.css");

	/* defines the link element as pointing to a style sheetfile */
	pageStyle.setAttribute("rel", "stylesheet");

	/* adds the disabled attribute to the link element */
	pageStyle.setAttribute("disabled", "disabled");

	/* Append the link element to the document head */
	document.head.appendChild(pageStyle);

	/*
	 * disables the page view style sheet object for browsers that don't support
	 * the disabled attribute
	 */
	pageStyle.disabled = true;

	/* Insert buttons for the style switcher */
	var buttonDIV = document.createElement("div");
	buttonDIV.setAttribute("id", "styleButtons");

	var webButton = document.createElement("input");

	/* input button for Web View */
	webButton.setAttribute("type", "button");
	webButton.setAttribute("value", "Web View");

	var pageButton = document.createElement("input");

	/* input button for Page View */
	pageButton.setAttribute("type", "button");
	pageButton.setAttribute("value", "Page View");

	/* append the buttons to the div element */
	buttonDIV.appendChild(webButton);
	buttonDIV.appendChild(pageButton);

	/* insert the div element at the start of the page body */
	document.body.insertBefore(buttonDIV, document.body.firstChild);

	/* Append an embedded style sheet to the document head */
	var buttonStyles = document.createElement("style");

	/* appends the style element to the end of the document */
	document.head.appendChild(buttonStyles);

	/* references the last sheet in the document.styleSheets collection */
	document.styleSheets[document.styleSheets.length - 1].insertRule(
			"div#styleButtons {position: fixed; \}", 0);

	document.styleSheets[document.styleSheets.length - 1]
			.insertRule(
					"div#styleButtons input {background-color: rgba(68, 94, 186, 0.6);\
			border: 3px solid rgba(0, 24, 123, 0.6);\
			border-radius: 50%;\
			cursor: pointer; color: white;\
			display: inline-block;\
			font-size: 1.2em;\
			height: 60px;\
			margin: 5px 10px;\
			width: 100px;\
			}",
					1);

	document.styleSheets[document.styleSheets.length - 1].insertRule(
			"@media print { div#styleButtons {  display: none;  } }", 2);

	/*Turn on the Page View style off and on*/
	webButton.onclick = function() {

		/*disables the Page View style sheet when clicked*/
		pageStyle.disabled = true;
	};

	pageButton.onclick = function() {

		/*enables the Page View style sheet when clicked*/
		pageStyle.disabled = false;
	};
}