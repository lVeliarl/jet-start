import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

export default class ContactsForm extends JetView {
	config() {
		return {
			view: "form",
			width: "400",
			localId: "contacts_form",
			elements: [
				{view: "text", name: "Name", label: "User name", labelPosition: "top"},
				{view: "text", name: "Email", label: "Email", labelPosition: "top"},
				{
					view: "combo",
					label: "Country",
					name: "Country",
					localId: "countries",
					placeholder: "Options",
					options: {
						body: {
							template: "#Name#",
							data: countries
						}
					}
				},
				{
					view: "combo",
					label: "Status",
					name: "Status",
					placeholder: "Options",
					options: {
						body: {
							template: "#Name#",
							data: statuses
						}
					}
				},
				{cols: [
					{},
					{
						view: "button",
						value: "Save",
						width: 200,
						css: "webix_primary",
						click: () => {
							let data = this.getRoot().getValues();
							if (data.id) {
								contacts.updateItem(data.id, data);
								webix.message("Entry successfully updated");
							}
						}
					}
				]
				},
				{}
			]
		};
	}

	urlChange() {
		let id = this.getParam("id");
		if (id && contacts.exists(id)) {
			let item = contacts.getItem(id);
			this.$$("contacts_form").setValues(item);
		}
	}
}
