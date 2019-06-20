import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";
import Toolbar from "./toolbar";

export default class SettingsView extends JetView {
	config() {
		return {
			cols: [
				{rows: [
					Toolbar,
					{view: "list", template: "#Name# <br> #Email#", select: true, type: {height: 62}}
				]},
				{view: "form",
					width: "400",
					elements: [
						{view: "text", label: "User name", labelPosition: "top"},
						{view: "text", label: "Email", labelPosition: "top"},
						{}
					]}
			]
		};
	}

	init(view) {
		view.queryView("list").parse(contacts);
	}
}
