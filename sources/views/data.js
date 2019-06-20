import {JetView} from "webix-jet";
import DataView from "./data_view";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

export default class Data extends JetView {
	config() {
		return {
			cells: [
				{$subview: new DataView(this.app, "", countries), id: "countries_switch"},
				{$subview: new DataView(this.app, "", statuses), id: "statuses_switch"}
			]
		};
	}
}

