import "./write.css"

export default function Write(){
	return(
		<div className="write">
			<img className="writeImg" src="https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Portugal-Madeira-Funchal-498882476-FevreDream-copy.jpg" alt="madeira" />
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fa-solid fa-square-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{display: "none"}}/>
					<input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
				</div>
				<div className="writeFormGroup">
					<textarea placeholder="Add to my list!" type="text" className="writeInput writeText"></textarea>
				</div>
				<button className="writeSubmit">Publish</button>
			</form>
		</div>
	)
}