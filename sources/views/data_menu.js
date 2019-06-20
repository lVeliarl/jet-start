import {JetView, plugins} from "webix-jet";
import Toolbar from "./toolbar";
import Data from "./data";

export default class DataMenuView extends JetView {
	config() {
		return {
			rows: [
				Toolbar,
				{cols: [
					{view: "menu",
						width: 200,
						localId: "data:menu",
						layout: "y",
						select: true,
						template: "#value#",
						data: [
							{value: "Countries", id: "countries"},
							{value: "Statuses", id: "statuses"}
						]},
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

	init() {
		this.use(plugins.Menu, "data:menu");
	}
}
