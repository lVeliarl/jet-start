import {JetView} from "webix-jet";

export default class Data extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._gridData = data;
	}

	config() {
		const _ = this.app.getService("locale")._;

		return {
			rows: [
				{
					view: "datatable",
					localId: "data",
					editable: true,
					borderless: true,
					editor: "text",
					editaction: "dblclick",
					autoConfig: true,
					scroll: "auto",
					css: "webix_shadow_medium"
				},
				{cols: [
					{gravity: 2},
					{
						view: "button",
						value: _("Add new"),
						css: "webix_primary",
						click: () => {
							let table = this.$$("data");
							let id = table.add({ });
							table.editRow(id);
						}
					},
					{
						view: "button",
						value: _("Delete"),
						css: "webix_primary",
						click: () => {
							let table = this.$$("data");
							let id = table.getSelectedId();
							if (id) {
								this.webix.confirm({
									title: "Remove this entry",
									text: "Are you sure you want to remove this entry?"
								}).then(() => {
									table.remove(table.getSelectedId());
								});
							}
							else {
								this.webix.message("Please select an entry to remove");
							}
						}}
				],
				type: "empty"}
			]
		};
	}

	init() {
		this.$$("data").parse(this._gridData);
	}
}

