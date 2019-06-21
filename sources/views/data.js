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
					localId: "data",
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
						click: () => {
							let id = this.$$("data").add({ });
							this.$$("data").editRow(id);
						}
					},
					{view: "button",
						value: "Delete",
						click: () => {
							let table = this.$$("data");
							let id = this.$$("data").getSelectedId();
							if (table.isSelected(id)) {
								table.remove(table.getSelectedId());
							}
							else if (table.getLastId()) {
								table.editStop();
								table.remove(table.getLastId());
								table.editCell(table.getLastId());
							}
						}}
				],
				type: "empty"}
			]
		};
	}

	init(view) {
		view.queryView("datatable").parse(this._gridData);
	}
}

