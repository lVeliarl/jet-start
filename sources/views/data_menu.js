import {JetView, plugins} from "webix-jet";
import Toolbar from "./toolbar";
import Data from "./data";

export default class DataMenuView extends JetView {
	config() {
		return {
			rows: [
				Toolbar,
				{cols: [
					{view: "list",
						width: 200,
						select: true,
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
					{rows: [
						Data,
						{cols: [
							{gravity: 2},
							{view: "button", value: "Add new"},
							{view: "button", value: "Delete"}
						],
						type: "empty"}
					]}
				]}
			]
		};
	}

	// init() {
	// 	this.use(plugins.Menu, "data:menu");
	// }
}
