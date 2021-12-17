import { useParams } from "remix";

function Post() {
	const params = useParams();

	return (
		<div>
			<h1> Dynamic Post {params.postId} </h1>
		</div>
	);
}

export default Post;
