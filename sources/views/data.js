import {JetView} from "webix-jet";

export default class Data extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._gridData = data;
	}

	config() {
		return {
			rows: [
				{view: "datatable",
					editable: true,
					borderless: true,
					editor: "text",
					editaction: "dblclick",
					autoConfig: true,
					scroll: "auto",
					css: "webix_shadow_medium"},
				{cols: [
					{gravity: 2},
					{view: "button",
						value: "Add new",
						click: () => {}
					},
					{view: "button", value: "Delete"}
				],
				type: "empty"}
			]
		};
	}

	init(view) {
		view.queryView("datatable").parse(this._gridData);
	}
}

