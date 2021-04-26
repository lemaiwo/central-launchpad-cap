/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"demo/booksui5masterdetail/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});