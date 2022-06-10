import Link from "next/link"
import { VideoItemProps } from "@/models/Interfaces"
import { YoutubeThumbnail } from "@/partials/YoutubeComponent"
import styles from "@/styles/Home.module.scss"

export function VideoItem({ id, title, description, date }: VideoItemProps) {
	return (
		<div id={styles["video-item-container"]}>
			<Link href={`https://youtu.be/${id}`} passHref>
				<a>
					<YoutubeThumbnail id={id} />
				</a>
			</Link>
			<article
				id={styles["video-item-details"]}
				itemScope
				itemType="http://schema.org/CreativeWork"
			>
				<h3>{title}</h3>
				<p id={styles["video-description"]}>{description}</p>
				<p>
					Filmed in: <span itemProp="datePublished">{date}</span>
				</p>
			</article>
		</div>
	)
}
