import "./singlePost.css"

export default function SinglePost() {
	return(
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img src="https://th.bing.com/th/id/R.c53160d05bad5d62023a9496c060ff97?rik=ETls9lT0a9GHqg&pid=ImgRaw&r=0" alt="Petra" className="singlePostImg"></img>
			</div>
			<h1 className="singlePostTitle">Lorem Ipsum Title Title
				<div className="singlePostEdit">
					<i className="singlePostIcon fa-solid fa-pen-to-square"></i>
					<i className="singlePostIcon fa-solid fa-trash-can"></i>
				</div>	
			</h1>
			<div className="singlePostInfo">
				<span className="singlePostAuthor">
					Author: <b>Gwen</b>
				</span>
				<span className="singlePostDate">1 hour ago</span>
			</div>
			<p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis, sem at eleifend imperdiet, ligula dolor maximus sapien,
											 eget ullamcorper nulla erat at turpis. Etiam hendrerit eros at bibendum hendrerit. Pellentesque ante nisl, porta vel bibendum tempus, 
											 venenatis nec nibh. Cras nunc tellus, aliquet non lobortis vel, dignissim vitae dui. Sed tempus, ante vel egestas fermentum, elit libero
											  facilisis metus, sit amet tincidunt neque libero et odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
											   himenaeos. Fusce sit amet arcu ut magna porttitor sollicitudin sit amet at libero. Phasellus vitae odio felis. Aliquam sit amet efficitur nunc.</p>
		</div>
	)
}