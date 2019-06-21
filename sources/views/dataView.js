import {JetView} from "webix-jet";
import Data from "./data";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

export default class DataView extends JetView {
	config() {
		const sidebar = {
			view: "list",
			id: "data_list",
			width: 200,
			select: true,
			scroll: "auto",
			template: "#value#",
			data: [
				{value: "Countries", id: "countries_switch"},
				{value: "Statuses", id: "statuses_switch"}
			]
		};

		return {
			rows: [
				{type: "header", template: "Data", css: "webix_header section_header"},
				{cols: [
					sidebar,
					{cells: [
						{rows: [{$subview: new Data(this.app, "", countries)}], localId: "countries_switch"},
						{rows: [{$subview: new Data(this.app, "", statuses)}], localId: "statuses_switch"}
					]}
				]}
			]
		};
	}

	init() {
		this.$$("data_list").select("countries_switch");
		this.$$("data_list").attachEvent("onAfterSelect", (id) => {
			this.$$(id).show();
		});
	}
}
