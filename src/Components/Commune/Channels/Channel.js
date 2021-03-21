import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TreeView from "@material-ui/lab/TreeView"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import TreeItem from "@material-ui/lab/TreeItem"

const Channel = ({ channel, id, onClick, active, isAdmin, handleDeleteChannel }) => {
	const useStyle = makeStyles({
		root: {
			fontSize: "16px",
		},
	})
	return (
		<TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
			<TreeItem
				nodeId="1"
				label="Applications"
				className={`${active ? "active channel" : "channel"}`}
				onClick={(e) => {
					if (!e.target.classList.contains("delete")) {
						onClick(id)
					}
				}}
			>
				<TreeItem nodeId="2" label="Calendar" />
				<TreeItem nodeId="3" label="Chrome" />
				<TreeItem nodeId="4" label="Webstorm" />
			</TreeItem>
		</TreeView>

		// <div
		// 	className={active ? "active channel" : "channel"}
		// 	onClick={(e) => {
		// 		if (!e.target.classList.contains("delete")) {
		// 			onClick(id)
		// 		}
		// 	}}
		// >
		// 	<span>
		// 		{channel.type === "text" ? <span className="hash">#</span> : null} {channel.name}
		// 	</span>
		// 	{isAdmin && id !== "0" ? (
		// 		<span className="delete" onClick={() => handleDeleteChannel()}>
		// 			&#x2715;
		// 		</span>
		// 	) : null}
		// </div>
	)
}

export default Channel
