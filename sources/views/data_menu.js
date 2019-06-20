import {JetView} from "webix-jet";
import Toolbar from "./toolbar";
import Data from "./data";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

export default class DataMenuView extends JetView {
	config() {
		return {
			rows: [
				new Toolbar(this.app, "", "Data"),
				{cols: [
					{view: "list",
						id: "data_list",
						width: 200,
						select: true,
						scroll: "auto",
						template: "#value#",
						data: [
							{value: "Countries", id: "countries_switch"},
							{value: "Statuses", id: "statuses_switch"}
						],
						on: {
							onAfterSelect(id) {
								$$(id).show();
							}
						}
					},
					{cells: [
						{$subview: new Data(this.app, "", countries), id: "countries_switch"},
						{$subview: new Data(this.app, "", statuses), id: "statuses_switch"}
					]}
				]}
			]
		};
	}
}
