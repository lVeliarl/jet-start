import {JetView} from "webix-jet";
import Toolbar from "./toolbar";
import Data from "./data";

export default class DataMenuView extends JetView {
	config() {
		return {
			rows: [
				Toolbar,
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
					{rows: [
						Data,
						{cols: [
							{gravity: 2},
							{view: "button",
								value: "Add new",
								click: () => {}
							},
							{view: "button", value: "Delete"}
						],
						type: "empty"}
					]}
				]}
			]
		};
	}
}
