import {JetView} from "webix-jet";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

export default class Data extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._gridData = data;
	}

	config() {
		const _ = this.app.getService("locale")._;

		// let columns = [];
		// const item = this._gridData.getItem(this._gridData.getFirstId());

		// Object.keys(item).forEach((i) => {
		// 	if (i !== "id") {
		// 		columns.push({
		// 			id: i,
		// 			header: _(i),
		// 			editable: true,
		// 			fillspace: 1
		// 		});
		// 	}
		// });

		return {
			rows: [
				{
					view: "datatable",
					localId: "data",
					editor: "text",
					editaction: "dblclick",
					editable: true,
					borderless: true,
					columns: [
						{
							id: "Name",
							header: _("Name"),
							fillspace: true,
							editor: "text"
						}
					],
					scroll: "y",
					css: "webix_shadow_medium"
				},
				{cols: [
					{gravity: 2},
					{
						view: "button",
						value: _("Add new"),
						css: "webix_primary",
						click: () => {
							let currentTab = this.getParam("data");
							let table = this.$$("data");
							if (currentTab === "countries_switch") {
								countries.add({});
							}
							else if (currentTab === "statuses_switch") {
								statuses.add({});
							}
							table.editRow(table.getLastId());
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
									let currentTab = this.getParam("data");
									if (currentTab === "countries_switch") {
										countries.remove(table.getSelectedId());
									}
									else if (currentTab === "statuses_switch") {
										statuses.remove(table.getSelectedId());
									}
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
		this.$$("data").sync(this._gridData);
	}
}

