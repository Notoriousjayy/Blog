"use strict";

/*
 * Generate an outline based on h1 through h6 headings in the source document
 */
window.addEventListener("load", makeOutline);

function makeOutline() {

	/* Location of the doucment outline */
	var outline = document.getElementById("outline");

	/* Source document for the outline */
	var source = document.getElementById("doc");

	/* Create an element node for h1 */
	var mainHeading = document.createElement("h1");

	/* Create an element node for ol */
	var outlineList = document.createElement("ol");

	/* Creates a text node containing the test String "Outline" */
	var headingText = document.createTextNode("Outline");

	/* Appends the text node to the h1 element */
	mainHeading.appendChild(headingText);

	/* appends the h1 heading to the outline */
	outline.appendChild(mainHeading);

	/* appends an ordered list to the outline */
	outline.appendChild(outlineList);

	createList(source, outlineList);
}

function createList(source, outlineList) {

	/* Headings for the outline */
	var headings = [ "H1", "H2", "H3", "H4", "H5", "H6" ];

	/* Previous Level of the Headings */
	var prevLevel = 0;

	/* Running total of the article headings */
	var headNum = 0;

	/*
	 * Loop through all of the child nodes of source article until no child
	 * nodes are left behind
	 */
	for (var n = source.firstChild; n !== null; n = n.nextSibling) {

		/* retrieves the index of the element node name */
		var headLevel = headings.indexOf(n.nodeName);

		/* test whether the element node name appears in the heading array */
		if (headLevel !== -1) {

			headNum++;
			if (n.hasAttribute("id") === false) {

				/*
				 * if no id attribute exists, adds one using the headNum
				 * variable
				 */
				n.setAttribute("id", "head" + headNum);
			}

			/*
			 * sets the inner HTML of the li element to the value of the
			 * heading's text node
			 */
			var listElem = document.createElement("li");
			
			/*Create hypertext links to the document headings*/ 
			var linkElem = document.createElement("a");
			
			/*creates a hypertext link within each list itemm*/
			linkElem.innerHTML = n.innerHTML;
			linkElem.setAttribute("href", "#" + n.id);
			
			/*Append the hypertext link to the list item*/
			listElem.appendChild(linkElem);

			if (headLevel === prevLevel) {

				/* appends the list item to the current list */
				outlineList.appendChild(listElem);
			} else if (headLevel > prevLevel) {

				/* Start a new nested list */
				var nestedList = document.createElement("ol");
				nestedList.appendChild(listElem);

				/* Append nested list to last item in the current list */
				outlineList.lastChild.appendChild(nestedList);

				/* Change the current list to the nested list */
				outlineList = nestedList;

			} else {

				/*
				 * Append the list item to a higher list Calculate the
				 * difference between the current and previous level
				 */
				var levelUp = prevLevel - headLevel;

				for (var i = 1; i <= levelUp; i++) {

					/*
					 * moves the outlineList object up two levels for each
					 * iteration in the for loop
					 */
					outlineList = outlineList.parentNode.parentNode;
				}
				outlineList.appendChild(listElem);
			}

			/* Update the value of prevLevel */
			prevLevel = headLevel;
		}
	}
}