import {JetView} from "webix-jet";
import Toolbar from "./toolbar";

export default class ContactsView extends JetView {
	config() {
		return {
			rows: [
				Toolbar,
				{cols: [
					{view: "label", label: "Language:", width: 100},
					{view: "select",
						options: [
							{id: "1", value: "RU"},
							{id: "2", value: "EN"}
						]}
				]},
				{template: " "}
			]
		};
	}
}

