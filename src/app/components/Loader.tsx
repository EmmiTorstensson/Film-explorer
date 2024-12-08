const Loader: React.FC = () => {
	return (
		<div style={{textAlign: "center", padding: "20px"}}>
			  <div className="spinner" style={{
				width: "40px",
				height: "40px",
				border: "4px solid #ccc",
				borderTop: "4px solid #1F51FF",
				borderRadius: "50%",
				animation: "spin 1s linear infinite"
			}}>
			</div>
			<p>Loading...</p>
			<style jsx>{`
				@keyframes spin {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}
			`}</style>
		</div>
	);
};

export default Loader;