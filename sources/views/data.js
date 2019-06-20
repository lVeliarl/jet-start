import {JetView} from "webix-jet";
import DataView from "./data_view";
import {countries} from "../models/countries";
//	import {statuses} from "../models/statuses";

export default class Data extends JetView {
	config() {
		return new DataView(this.app, "", countries);
	}
}

//	{$subview: new DataView(this.app, "", statuses)}
