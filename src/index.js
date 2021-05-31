import {registerPlugin} from "@wordpress/plugins"
import {PluginSidebar} from "@wordpress/edit-post"
import {
	SelectControl,
	TextControl
} from "@wordpress/components"

let kind = "note"

registerPlugin("post-kinds-sidebar", {
	render () {
		return (
			<PluginSidebar
				name="post-kinds"
				icon="admin-post"
				title="Post kinds">
				<SelectControl
					label="Post Kind"
					value={kind}
					onChange={k => kind = k}
					options={[
						{label: "Note", value: "note"},
						{label: "Article", value: "article"},
						{label: "Like", value: "like"},
						{label: "Reply", value: "reply"},
						{label: "RSVP", value: "rsvp"}
					]}
				/>
			</PluginSidebar>
		)
	}
})
