import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";

export default class ContactsView extends JetView {
	config() {
		return {
			cols: [
				{rows: [
					{type: "header", template: "Contacts", css: "webix_header section_header"},
					{
						view: "list",
						localId: "contacts_list",
						template: "#Name# <br> #Email#",
						select: true,
						type: {height: 62},
						scroll: "auto"
					}
				]},
				{
					view: "form",
					width: "400",
					elements: [
						{view: "text", label: "User name", labelPosition: "top"},
						{view: "text", label: "Email", labelPosition: "top"},
						{
							view: "combo",
							label: "Country",
							options: [
								{id: 1, value: "test"},
								{id: 2, value: "test"},
								{id: 3, value: "test"}
							]
						},
						{
							view: "combo",
							label: "Status",
							options: [
								{id: 1, value: "test"},
								{id: 2, value: "test"},
								{id: 3, value: "test"}
							]
						},
						{}
					]
				}
			]
		};
	}

	init(view) {
		view.queryView("list").parse(contacts);

		let list = this.$$("contacts_list");
		list.select(list.getFirstId());
	}
}
