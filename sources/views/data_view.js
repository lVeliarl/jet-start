import {JetView} from "webix-jet";

export default class DataView extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._gridData = data;
	}

	config() {
		return {view: "datatable",
			editable: true,
			editor: "text",
			editaction: "dblclick",
			autoConfig: true,
			scroll: "auto",
			css: "webix_shadow_medium"};
	}

	init(view) {
		view.parse(this._gridData);
	}
}
