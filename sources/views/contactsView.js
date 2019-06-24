import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";
import ContactsForm from "./contactsForm";

webix.protoUI({
	name: "edit_list"
}, webix.EditAbility, webix.ui.list);
export default class ContactsView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

		return {
			cols: [
				{rows: [
					{type: "header", template: _("Contacts"), css: "webix_header section_header"},
					{
						view: "edit_list",
						editable: true,
						editor: "text",
						editValue: "Name",
						editaction: "dblclick",
						localId: "contacts_list",
						template: "#Name# <br> #Email# <span class='webix_icon wxi-close remove_contact'></span>",
						select: true,
						type: {height: 62},
						scroll: "auto",
						on: {
							onAfterSelect: (id) => {
								this.setParam("id", id, true);
							}
						},
						onClick: {
							remove_contact: (e, id) => {
								this.webix.confirm({
									title: "Remove this item",
									text: "Are you sure you want to remove this item?"
								}).then(() => {
									contacts.remove(id);
									this.$$("contacts_list").clearSelection();
								});
							}
						}
					},
					{
						view: "button",
						value: _("Add"),
						click: () => {
							contacts.add({Name: "John Doe", Email: "2134@aol.com", Status: 1, Country: 1});
						}
					}
				]},
				ContactsForm
			]
		};
	}

	init() {
		this.$$("contacts_list").sync(contacts);
	}

	urlChange() {
		contacts.waitData.then(() => {
			let list = this.$$("contacts_list");
			let id = this.getParam("id");

			if (!contacts.exists(id)) {
				list.select(contacts.getFirstId());
			}
			else if (id && contacts.exists(id)) {
				list.select(id);
			}
		});
	}
}
